/**
 * @file CityForm.js
 */
import React from "react";

class CityForm extends React.Component {
  handleClick = (evt) => {
    evt.preventDefault();
    let city = document.getElementById("cityInput").value;
    console.log(`CityForm.handleClick() city: ${city}`);
    this.props.handleSearch(city);
  };

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
