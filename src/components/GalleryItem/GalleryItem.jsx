import { useState } from 'react';
import axios from 'axios';

export default function GalleryItem({item, getGallery}) {

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

    return (
        <>
            {(description === false) ? <img src={item.path} onClick={showDescription} /> : 
            <p className="description" onClick={showDescription}>{item.description}</p>} 
            <p className="likes">{item.likes} <button onClick={() => like(item.id)}>Like Button</button>
                                              <button onClick={() => deleteItem(item.id)}>Delete</button></p>   
        </>
    );
}