/**
 * @file CatsForm.js
 * @author Code Fellows
 * @description Display and handle a form for filtering by location.
 */
import React from "react";
import Cats from "./Cats";

class CatsForm extends React.Component {

  /**
   * Handle the submission of the location search form.
   * 
   * @param {object} evt - an event object
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
        <Cats cats={this.props.cats} onDelete={this.props.onDelete} />
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
