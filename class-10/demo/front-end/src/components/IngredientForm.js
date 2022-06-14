/**
 * @file IngredientForm.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description Provides a form and form handling logic for getting recipes.
 * 
 */
import React from "react";
import axios from "axios";

class IngredientForm extends React.Component {

  /**
   * Initializes the attributes.
   * 
   * ingredient: String - the specified ingredient to use in recipe searches.
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
    };
  }

  /**
   * Handle the submission event for searching for recipes.
   * 
   * @param {object} evt - an event object
   */
  getRecipes = async (evt) => {
    evt.preventDefault();
    console.log(
      `IngredientForm.getRecipes() ingredient ${this.state.ingredient}`
    );
    const server = "http://localhost:3001";
    const recipes = await axios.get(`${server}/recipes`, {
      params: { ingredient: this.state.ingredient },
    });
    this.props.updateRecipes(recipes.data);
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <form onSubmit={this.getRecipes}>
        <label htmlFor="ingredientText">Enter an ingredient: </label>
        <input
          type="text"
          id="ingredientText"
          onChange={(evt) => {
            this.setState({ ingredient: evt.target.value });
          }}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default IngredientForm;
