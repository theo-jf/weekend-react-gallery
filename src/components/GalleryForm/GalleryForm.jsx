import React, { useState } from 'react';
import axios from 'axios';

export default function GalleryForm({getGallery}) {

    const [path, setPath] = useState('')
    const [description, setDescription] = useState('');

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
        let newItem = {
            path: path,
            description: description
        }
        addItem(newItem);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={(e) => setPath(e.target.value)}
                    value={path}
                    placeholder="image link" />
            <input onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="description" />
            <input type="submit" value="Submit" />
        </form>
    );

}