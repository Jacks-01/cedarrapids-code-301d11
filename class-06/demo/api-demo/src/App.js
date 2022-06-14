/**
 * @file App.js
 * @author Code Fellows
 * @description Class 06 Demo with LocationIQ API call
 *    NOTE: This requires the installation of the axios package
 *          npm install axios --save
 */
import React from "react";
import axios from "axios";

class App extends React.Component {
  /**
   * sets the search query and location state attributes
   * 
   * searchQuery: String - the location name to be passed to the API
   * location: Object - the object containing useful location data
   * 
   * @param {object} props  - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: { place_id: "unknown", display_name: "None" },
    };
  }

  /**
   * This takes no arguments, but gets a location and makes an api call.
   * Requires npm install axios
   * get the access key from your LocationIQ account
   * environment variable name must begin with REACT_APP_
   * Store the access token in .env
   * Can also make the access token an environment variable in your system
   * -  Windows command line: set var_name=var_value
   * -  Linux/Mac terminal: export var_name=var_value
   * -    alternate: edit .bash_profile to add var_name=var_value
   */
  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    this.setState({ location: res.data[0] });
  };

  /**
   * Draw the component
   * 
   * @returns {Component}
   */
  render() {
    console.log(`Location: ${JSON.stringify(this.state.location)}`);
    return (
      <>
        <input
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
          placeholder="search for a city"
        />
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.location.place_id && (
          <h2>The city is: {this.state.location.display_name}</h2>
        )}
      </>
    );
  }
}

export default App;
