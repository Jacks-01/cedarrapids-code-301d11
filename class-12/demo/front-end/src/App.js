/**
 *
 * @file App.js
 * @author Code Fellows
 */
import React from "react";
import axios from "axios";
import "./App.css";
//import dotenv from "dotenv";
//dotenv.config();
import CatsForm from "./CatsForm";
import About from "./About";
import CreateCat from "./CreateCat";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  componentDidMount() {
    this.fetchCats();
  }

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
/* 
<Route path="/about">
              <h1>About page here</h1>
            </Route>
*/
export default App;
