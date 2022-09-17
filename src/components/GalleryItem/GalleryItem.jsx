import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function GalleryItem({item, getGallery}) {

    // Boolean to render either description or image
    const [description, setDescription] =  useState(false);

    const showDescription = () => {
        setDescription(!description);
    }

    const like = (id) => {
        axios.put(`gallery/like/${id}`)
        .then((response) => {
            console.log('Like successful', response);
            getGallery();
        })
        .catch((error) => {
            console.log('Error liking image', error);
        })
    }

    const deleteItem = (id) => {
        axios.delete(`gallery/delete/${id}`)
        .then((response) => {
            console.log('Delete successful', response);
            getGallery();
        })
        .catch((error) => {
            console.log('Error deleting image', error);
        })
    }

    // Conditional rendering for:
   //    Flipping between description and image
   //    Proper grammar based on likes amount
    return (
        <>
            {(description === false) ? <img src={item.path} onClick={showDescription} /> : 
                                       <p className="description" onClick={showDescription}>{item.description}</p>}
            {(item.likes === 1) ? <p className="likes">{item.likes} like</p> : 
                                  <p className="likes">{item.likes} likes</p>}
            <p><Button onClick={() => like(item.id)}>Like</Button>
               <Button onClick={() => deleteItem(item.id)}>Delete</Button></p>   
        </>
    );
}