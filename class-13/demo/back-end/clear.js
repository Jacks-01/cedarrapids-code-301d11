/**
 * @file clear.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description a helper script to clear the database
 *
 */
'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require('./models/cat');

async function clear() {
  try {
    await Cat.deleteMany({});
    console.log('Cats cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();
