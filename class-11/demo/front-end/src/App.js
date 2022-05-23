/**
 *
 * @file App.js
 * @author Code Fellows
 */
import React from "react";
import axios from "axios";
//import dotenv from "dotenv";
//dotenv.config();
import CatsForm from "./CatsForm";
import About from "./About";
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
