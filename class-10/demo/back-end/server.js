/**
 * @file server.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description Initializes and runs the server.
 *
 */
'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
const getRecipes = require('./components/recipes');

const PORT = process.env.PORT || 3001;

/**
 * Define an endpoint for recipes using the callback function getRecipes()
 */
app.get('/recipes', getRecipes);

/**
 * Start the server and display a message to the console.
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
