import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('GET /gallery success', response.data);
      setGallery(response.data);
    })
    .catch((error) => {
      alert('Error fetching gallery', error);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm getGallery={getGallery}/>
      <p>Gallery goes here</p>
      <GalleryList gallery={gallery} getGallery={getGallery}/>
      {/* <img src="images/goat_small.jpg"/> */}
    </div>
  );
}

export default App;
