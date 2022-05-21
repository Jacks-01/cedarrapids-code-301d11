import React from "react";
import axios from "axios";

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
    };
  }

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
