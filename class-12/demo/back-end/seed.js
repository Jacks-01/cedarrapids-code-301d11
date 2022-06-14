/**
 * @file seed.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description A helper script to populate the database with test data.  To
 *              use, navigate to this directory and type:
 *              >node seed.js
 *
 */
'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require('./models/cat');

async function seed() {
  // seed the database with some cats, so I can retrieve them
  const myCat = new Cat({
    name: 'Jimmy John',
    color: 'orange',
    hasClaws: false,
    location: 'Seattle',
  });
  myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved Jimmy John');
  });

  // alternately...
  await Cat.create({
    name: 'Jersey  Mike',
    color: 'calico',
    hasClaws: true,
    location: 'Paris'
  });

  console.log('saved Jersey Mike');

  mongoose.disconnect();
}

seed();
