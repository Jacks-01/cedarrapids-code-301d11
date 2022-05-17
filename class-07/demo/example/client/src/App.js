/**
 * @file App.js
 */
import React from "react";
import CityForm from "./CityForm";
import DataDisplay from "./DataDisplay";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      city: null,
    };
  }

  /**
   * Called when the React component (App in this case) is mounted to the Virtual DOM.
   * Connect to the back end and get the data to display.
   * Requires that the back end server is running.
   */
  componentDidMount() {
    if (this.state.city !== null) {
      this.callBackendAPI(this.state.city)
        .then((res) => {
          this.setState({ data: res.express });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  /**
   * Handles the connection to the back end and returns the data.
   * Fetching the GET route from the Express erver which matches the
   * GET route from server.js
   *
   * @param {string} city - the name of a city
   * @returns {object} - the JSON object with the data
   */
  callBackEndAPI = async (city) => {
    const response = await fetch("/weather?city=" + city);
    const body = await response.json();
    // Make sure things worked!
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  /**
   * Handles the search when the user submits a city
   *
   * @param {string} city - the clity to look for
   */
  handleSearch = async (city) => {
    console.log(`App.handleSearch() city: ${city}`);
    this.setState({ city: city });
    this.callBackEndAPI(city)
      .then((res) => {
        this.setState({ data: res.express });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`App.handleSearch() data: ${this.state.data}`);
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Example</h1>
        </header>
        <CityForm handleSearch={this.handleSearch} />
        {this.state.data !== null && <DataDisplay data={this.state.data} />}
      </div>
    );
  }
}

export default App;
