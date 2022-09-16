import { useState } from 'react';

export default function GalleryItem({item}) {

    const [description, setDescription] =  useState(false);

    const showDescription = () => {
        setDescription(!description);
    }

    return (
        <>
            {(description === false) ? <img src={item.path} onClick={showDescription} /> : 
            <p className="description" onClick={showDescription}>{item.description}</p>} 
            <p className="likes">{item.likes}</p>   
        </>
    );
}