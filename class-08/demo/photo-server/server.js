/**
 * @file server.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description Provides an API endpoint for supplying photos based on a query.
 *
 */
'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

/**
 * The endpoint for getting photos.  Uses callback function getPhotos().
 */
app.get('/photos', getPhotos);

/**
 * Handles the actual attempt to get a photo to return.
 *
 * @param {object} request - the request object
 * @param {object} response - the response object
 */
async function getPhotos(request, response) {
  const searchQuery = request.query.searchQuery;

  const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${searchQuery}`;

  try {
    const photosResponse = await axios.get(url);
    const photoArray = photosResponse.data.results.map(photo => new Photo(photo));
    response.status(200).send(photoArray);
  } catch (err) {
    console.error('error from superagent', err);
    response.status(500).send('server error');
  }
}

/**
 * A helper class defined inside the same file.
 * Typically, classes should be defined in other files, in this case, the class
 * is just being used to organize data, but provides no other functionality, and
 * the class is only being used internally.
 */
class Photo {
  constructor(obj) {
    this.img_url = obj.urls.regular;
    this.original_image = obj.links.self;
    this.photographer = obj.user.name;
  }
}

/**
 * An endpoint to catch all other requests.  It uses the callback function
 * notFound().
 */
app.get('*', notFound);

/**
 * PRovides the 404 response when a resource request was not found.
 * 
 * @param {object} request - the request object
 * @param {object} response - the response object
 */
function notFound(request, response) {
  response.status(404).send('the page you are looking for is not there');
}

/**
 * Start the server and let the user know that the server is listening on port.
 */
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
