/**
 * @file Main.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description Displays the ingredient form and any related recipes.
 * 
 */
import React from "react";
import IngredientForm from "./IngredientForm";
import Recipe from "./Recipe";

class Main extends React.Component {

  /**
   * Initialize the state attributes.
   * 
   * recipes: Array - a collection of recipe objects.
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  /**
   * Handle the change in available recipes.  This method is passed as 
   * a callback to the IngredientForm (see render() below).
   * 
   * @param {Array} recipes - an array of recipe objects.
   */
  updateRecipes = (recipes) => {
    console.log(`Main.updateRecipes() recipes ${recipes}`);
    this.setState({ recipes: recipes });
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <main>
        <IngredientForm updateRecipes={this.updateRecipes} />
        {this.state.recipes.length &&
          this.state.recipes.map((recipe, idx) => {
            return (
              <div key={idx}>
                <Recipe recipe={recipe} />
              </div>
            );
          })}
      </main>
    );
  }
}

export default Main;
