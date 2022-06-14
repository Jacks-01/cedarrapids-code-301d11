/**
 * @file CatsForm.js
 * @author Code Fellows
 * @description Provide a form by which the user can specify a new location.
 */
import React from "react";
import Cats from "./Cats";

class CatsForm extends React.Component {

  /**
   * Handles the submission of the location form.
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
        <Cats cats={this.props.cats} />
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
