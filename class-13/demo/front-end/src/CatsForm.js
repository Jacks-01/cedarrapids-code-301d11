/**
 * @file CatsForm.js
 */
import React from "react";
import CatsList from "./CatsList";

class CatsForm extends React.Component {
  handleSubmission = (evt) => {
    evt.preventDefault();
    const location = evt.target.location.value;
    console.log(`App.handleLocationSubmit() location: ${location}`);
    this.props.fetchCats(location);
  };

  render() {
    return (
      <div>
        <CatsList
          cats={this.props.cats}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
        <h2>Filter by Location</h2>
        <form onSubmit={this.handleSubmission}>
          <input name="location" />
          <button>Ok</button>
        </form>
      </div>
    );
  }
}

export default CatsForm;
