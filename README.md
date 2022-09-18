# React Gallery

## Description
*Duration: Weekend assignment*

Introduced to us at the beginning of the week, this weekend assignment challenged us to create a server and client-side application using **React**, with a stretch goal taking the app to full-stack operation. 

The application was required to include a gallery of images each accompanied by a description and like button. Upon clicking an image, conditional rendering was to be used to switch between the image and its description, and Axios put requests were to be used to update the amount of likes. The gallery and each individual image were required to be their own React components, united in App.jsx.

Additional stretch goals included creating a form component to intake user inputted image links and descriptions, along with a delete function to remove a selected image. 


Full assignment details can be found in [`INSTRUCTIONS.md`](INSTRUCTIONS.md)


## Final Product Snapshot

![Wireframe](./public/images/React_Gallery_Snapshot.png)

### Prerequisites
    • Node.js

## Installation and Setup

Visit the fully deployed app at [here]()

Or, run it locally:

1. Clone this repository from Github
2. Create a database titled "react_gallery" and create a "gallery" table using the initializer found in `database.sql`
3. Run `npm install` in your terminal to download the necessary modules
4. Run `npm start` to start the server
5. Visit http://localhost:3000 in your browser to view the project!

## Usage

Retrieve the absolute link of an image you like to display, and enter it into the image link input along with an accompanying description into the description input. Upon pressing upload, this image will be added to the DOM.

Click on an image to view its description, and click the like button to add a like. Press the x button to permanently delete an image from the database and the DOM. 

## Built With

* React
* JavaScript
* HTML
* CSS
* Axios
* Express 
* Node-Postgres

## Acknowledgement

Special thanks to [Prime Digital Academy!](https://github.com/PrimeAcademy) 
