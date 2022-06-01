/**
 * @file CatsForm.js
 * @author Code Fellows
 * @description Displays cats and a form to filter them by location.
 */
import React from "react";
import CatsList from "./CatsList";

class CatsForm extends React.Component {

  /**
   * Handles the form submission for filtering be location.
   * 
   * @param {object} evt - the event object
   */
  handleSubmission = (evt) => {
    evt.preventDefault();
    const location = evt.target.location.value;
    console.log(`App.handleLocationSubmit() location: ${location}`);
    this.props.fetchCats(location);
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
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
