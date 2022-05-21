"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const getRecipes = require("./components/recipes");

const PORT = process.env.PORT || 3001;

app.get("/recipes", getRecipes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
