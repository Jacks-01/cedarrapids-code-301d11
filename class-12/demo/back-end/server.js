/**
 * @file server.js
 * @author Code Fellows
 */
"use strict";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Cat = require("./models/cat");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to mongoose
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(`DB ERROR: ${err}`);
});
db.once("open", () => {
  console.log(`Connected to database`);
});

// define the end  point for cats
app.get("/cats", async (req, res) => {
  console.log(`request for cats`);
  const filterQuery = {};
  if (req.query.location) {
    filterQuery.location = req.query.location;
  }
  const cats = await Cat.find(filterQuery);
  res.send(cats);
});

// Create a new cat record
app.post("/cats", async (req, res) => {
  try {
    console.log(`Creating a new cat: ${req.body}`);
    const newCat = await Cat.create(req.body);
    res.send(newCat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating cat");
  }
});

// delete a cat record
app.delete("/cats/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`Delete cat with ID: ${id}`);
  try {
    await Cat.findByIdAndDelete(id);
    res.status(204).send("Success");
  } catch (err) {
    console.err(err);
    res.status(404).send(`Unable to delete cat with id ${id}`);
  }
});

app.get("/", (req, res) => {
  console.log(`Received request`);
  res.end("Contact made.");
});

// start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
