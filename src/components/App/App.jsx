import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import { Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

function App() {

  const [gallery, setGallery] = useState([]);

  // Mui variable to show/hide snackbar error message
  const [open, setOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
      console.log('Error fetching gallery', error);
      handleError();
    });
  }

  const handleError = () => {
    setOpen(true);
  };

  // Closing error message handler
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" guttertop="true" className="App-title">
          Gallery of My Life
        </Typography>
      </header>
      <GalleryForm getGallery={getGallery}/>
      <section className="bottom">
        {/* <Typography variant="h4" className="galleryTitle">
          Images
        </Typography> */}
        <GalleryList gallery={gallery} getGallery={getGallery}/>
      </section>
      {/* <img src="images/goat_small.jpg"/> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Error fetching gallery
        </Alert>
      </Snackbar>
    </div>
    
  );
}

export default App;
