/**
 * @file server.js
 * @author Code Fellows
 * @description Defines a server and endpoints for the API.
 */
'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Cat = require('./models/cat');

const PORT = process.env.PORT;

const app = express();
app.use(cors());

// Connect to mongoose
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => {
  console.error(`DB ERROR: ${err}`);
});
db.once('open', () => {
  console.log(`Connected to database`);
});

// define the end  point for cats
app.get('/cats', async (req, res) => {
  console.log(`request for cats`);
  const filterQuery = {};
  if (req.query.location) {
    filterQuery.location = req.query.location;
  }
  const cats = await Cat.find(filterQuery);
  res.send(cats);
});

// define a default endpoint
app.get('/', (req, res) => {
  console.log(`Received request`);
  res.end('Contact made.');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
