/**
 * @file CityForm.js
 * @author Code Fellows
 * @description Displays and responds to a form to request city data
 */
import React from "react";

class CityForm extends React.Component {

  /**
   * The even handler for submitting the form.  The form value is sent through a 
   * callback function from the containing component.
   * 
   * @param {object} evt - an event object
   */
  handleClick = (evt) => {
    evt.preventDefault();
    let city = document.getElementById("cityInput").value;
    console.log(`CityForm.handleClick() city: ${city}`);
    this.props.handleSearch(city);
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <form>
        <label htmlFor="cityInput">City:</label>
        <input type="text" id="cityInput" name="cityInput" />
        <button onClick={this.handleClick} className="btn-primary">
          Search
        </button>
      </form>
    );
  }
}

export default CityForm;
