/**
 * @file recipes.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description Provide functionality for the recipes endpoint.
 *
 */
'use strict';


const axios = require('axios');
const Recipe = require('./recipe-class');

const inMemoryDB = {};

module.exports = function (request, response) {
  const ingredient = request.query.ingredient;
  if (inMemoryDB[ingredient] !== undefined) {
    // We found the ingredient before
    console.log(`getting infor from db ${ingredient}`);
    return inMemoryDB[ingredient];
  } else {
    // a new ingredient
    console.log(`getting infor from online ${ingredient}`);
    const appId = process.env.FOOD_APP_ID;
    const appKey = process.env.FOOD_APP_KEY;
    //const url = `https://api.edamam.com/search/?q=${ingredient}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${appId}&app_key=${appKey}`;
    console.log(`URL: ${url}`);
    axios
      .get(url)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        const recipeArr = res.data.hits.map((recipe) => {
          new Recipe(recipe.recipe);
        });
        inMemoryDB[ingredient] = recipeArr;
        console.log(`puting info in db `);
        response.status(200).send(recipeArr);
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
        response.status(500).send({ error: err });
      });
  }
}; // end function
