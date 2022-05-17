/**
 * @file server.js
 */
const express = require("express"); // load the library
const app = express(); // create an object
const port = process.env.PORT || 5000;
//const port = 5000;

app.get("/weather", (req, res) => {
  res.send({ express: req.query.city });
});

/**
 * This is the catchall so place it last or it wil catch all the
 * requests.
 *
 */
app.get("/", (req, res) => {
  res.send({ express: req.query.city });
});

// Start the server
app.listen(port, () => {
  console.log("Listing on port ", port);
});
