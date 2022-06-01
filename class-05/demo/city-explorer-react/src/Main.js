/**
 * @file Main.js
 * @author Code Fellows
 */
import React from "react";
import restaurants from "./fake-data/restaurants.json";
import location from "./fake-data/location.json";
import Map from "./Map";
import map from "./images/map.png";
import Restaurants from "./Restaurants";

class Main extends React.Component {

  /**
   * Inititialize the state attributes.
   * 
   * displayResult: Boolean - whether to display this component
   * locationObj: Object - information related to the location to be displayed
   * restaurants: Array - a list of Restaurant objects
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      displayResult: false,
      locationObj: location,
      restaurants: restaurants,
    };
  }

  /**
   * Event handler for submision of the search form.
   * 
   * @param {object} evt - the event object
   */
  handleLocationSearch = (evt) => {
    evt.preventDefault();
    this.setState({ displayResult: true });
    console.log("handleLocationSearch()");
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <div id="main">
        <form onSubmit={this.handleLocationSearch} id="search-form">
          <label htmlFor="input-search">Search for a location</label>
          <input
            type="text"
            name="search"
            id="input-search"
            placeholder="Enter location here"
          />
          <button type="submit">Explore!</button>
        </form>

        {this.state.displayResult && (
          <div>
            <Map location={this.state.locationObj} map={map} />
            <Restaurants
              restaurants={this.state.restaurants}
              location={this.state.locationObj}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Main;
