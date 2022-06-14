/**
 *
 * @file App.js
 * @author Code Fellows
 * @description Handles the primary logic and display for the application.
 */
import React from "react";
import axios from "axios";
import CatsForm from "./CatsForm";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {

  /**
   * Initializes the start attributes.
   * 
   * cats: Array - a collection of cat objects
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  /**
   * Handle the case where this component is mounted by attempting to fill 
   * the cats state array.
   */
  componentDidMount() {
    this.fetchCats();
  }

  /**
   * Attempts to get a list of cats from the server.  If the location parameter
   * is supplied, it will be used as a filter in the query.  If the location
   * is not supplied, it will default to null and no filter will be applied 
   * to the query, leaving the query to return all cat records.
   * Any returned cats are stored in the state attribute.
   * 
   * @param {String} location - the search location for cats
   */
  fetchCats = async (location = null) => {
    const SERVER = "http://localhost:3001";
    let apiUrl = `${SERVER}/cats`;
    console.log(`App.fetchCats() apiUrl: ${apiUrl}`);
    if (location) {
      apiUrl += `?location=${location}`;
    }
    try {
      const response = await axios.get(apiUrl);
      this.setState({ cats: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Handles changes in the location by storing the new location and 
   * attempting to refresh the list of cats.
   * 
   * @param {object} evt - the event object
   */
  handleLocationSubmit = (evt) => {
    evt.preventDefault();
    const location = evt.target.location.value;
    console.log(`App.handleLocationSubmit() location: ${location}`);
    this.fetchCats(location);
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <CatsForm cats={this.state.cats} fetchCats={this.fetchCats} />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
/* 
<Route path="/about">
              <h1>About page here</h1>
            </Route>
*/
export default App;
