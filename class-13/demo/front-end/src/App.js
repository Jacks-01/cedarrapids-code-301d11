/**
 * @file App.js
 * @author Code Fellows
 * @description The primary application logic and display.
 */
import React from "react";
import axios from "axios";
import "./App.css";
import CatsForm from "./CatsForm";
import About from "./About";
import CreateCat from "./CreateCat";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {

  /**
   * Initializes the start attributes.
   * 
   * cats: Array - a collection of Cat objects
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

  handleCatCreate = async (catInfo) => {
    console.log(`App.handleCatCreate() info: ${JSON.stringify(catInfo)}`);
    const SERVER = "http://localhost:3001";
    let apiUrl = `${SERVER}/cats`;
    const response = await axios.post(apiUrl, catInfo);
    const newCat = response.data;
    const currentCats = this.state.cats;
    currentCats.push(newCat);
    this.setState({ cats: currentCats });
  };

  /**
   * Handles updating a cat record in the database
   *
   * @param {Cat} cat - the cat to update
   */
  handleUpdate = async (catToUpdate) => {
    console.log(`App.handleUpdate() cat ${JSON.stringify(catToUpdate)}`);
    try {
      // Try to update
      let url = `http://localhost:3001/cats/${catToUpdate._id}`;
      console.log(`Update URL: ${url}`);
      await axios
        .patch(url, catToUpdate)
        .then((response) => {
          console.log(`response: ${JSON.stringify(response)}`);
          const updatedCats = this.state.cats.map((existingCat) => {
            if (existingCat._id === catToUpdate._id) {
              return catToUpdate;
            } else {
              return existingCat;
            }
          });
          this.setState({ cats: updatedCats });
        })
        .catch((err) => {
          console.log(`Caught: ${err}`);
        });
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Handles the logic for removing a cat record from the database.
   * 
   * @param {object} catToDelete - a cat object
   */
  handleDelete = async (catToDelete) => {
    console.log(`App.handleDelete() cat: ${JSON.stringify(catToDelete)}`);
    let url = `http://localhost:3001/cats/${catToDelete._id}`;
    try {
      const response = await axios.delete(url);
      const filteredCats = this.state.cats.filter((cat) => {
        return cat._id !== catToDelete._id;
      });
      this.setState({ cats: filteredCats });
    } catch (err) {
      console.error(err);
    }
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
            <Link to="/createCat">Create</Link>
          </nav>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <CatsForm
                  cats={this.state.cats}
                  fetchCats={this.fetchCats}
                  onDelete={this.handleDelete}
                  onUpdate={this.handleUpdate}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/createCat"
              element={<CreateCat onCreate={this.handleCatCreate} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
