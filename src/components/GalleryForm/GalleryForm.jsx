import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';

export default function GalleryForm({getGallery}) {

    const [path, setPath] = useState('')
    const [description, setDescription] = useState('');

    const [badPathSubmit, setBadPathSubmit] = useState(false);
    const [badDescSubmit, setBadDescSubmit] = useState(false);

    const addItem = (newItem) => {
        console.log(newItem)
        axios.post('/gallery', newItem)
            .then(response => {
                console.log('/gallery POST successful', response);
                getGallery();
                setPath('');
                setDescription('');
            })
            .catch(error => {
                console.log('/gallery POST error', error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (path != '') {
            setBadPathSubmit(false);
        }
        if (description != '') {
            setBadDescSubmit(false);
        }
        if (path != '' && description != '') {
            let newItem = {
                path: path,
                description: description
            }
            addItem(newItem);
        } if (path === '') {
            setBadPathSubmit(true);
        } if (description === '') {
            setBadDescSubmit(true);
        }
    }

    return (
        <Box component="form" 
             className="form" 
             autoComplete="off"
             sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
             }}
             noValidate>
            <div>
                <TextField onChange={(e) => setPath(e.target.value)}
                        error={(badPathSubmit === true) ? true : false}
                        required={(badPathSubmit === true) ? true : false}
                        value={path}
                        label="image link" 
                        helperText={(badPathSubmit === true) ? "required" : null}/>
                <TextField onChange={(e) => setDescription(e.target.value)}
                        error={(badDescSubmit === true) ? true : false}
                        required={(badDescSubmit === true) ? true : false}
                        value={description}
                        label="description"
                        helperText={(badDescSubmit === true) ? "required" : ""}/>
                {/* <input type="submit" value="Submit" /> */}
            </div>
            <div className="upload">
                <Button variant="contained" onClick={handleSubmit}>Upload</Button>
            </div>
        </Box>
    );

}