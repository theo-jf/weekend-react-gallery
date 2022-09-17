const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data'); // OLD NON-DB ROUTE
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let updateId = req.params.id;

    const sqlText = `UPDATE "gallery"
                        SET "likes" = "likes" + 1
                        WHERE "id" = $1;`

    pool.query(sqlText, [updateId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error sending like', error);
        res.sendStatus(500);
    })

    // OLD NON-DB ROUTE
    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM "gallery";`

    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making GET query ${sqlText}`, error);
        res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;