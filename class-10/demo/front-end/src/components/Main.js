import React from "react";
import IngredientForm from "./IngredientForm";
import Recipe from "./Recipe";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  updateRecipes = (recipes) => {
    console.log(`Main.updateRecipes() recipes ${recipes}`);
    this.setState({ recipes: recipes });
  };

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
