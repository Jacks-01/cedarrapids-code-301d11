/**
 * @file app.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description The primary application logic and display.
 * 
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Photos from './photos';

class App extends React.Component {

  /**
   * Initialize the state attributes.
   * 
   * searchQuery: String - a photo topic for which to search
   * photos: Array - a collection of photo objects retrieved from the server
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photos: [],
    }
  }

  /**
   * An event handler for changes in text for the query input.
   * 
   * @param {object} e - the event object
   */
  updateSearchQuery = (e) => this.setState({ searchQuery: e.target.value });

  /**
   * Handles the form submission event by attempting to contact the server to 
   * request data about photos.  The returned photos are stored in the state 
   * attribute as an array of objects.
   * 
   * @param {object} e - the event object
   */
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API = process.env.REACT_APP_API_URL;
      const url = `${API}/photos`;
      const response = await axios.get(url, { params: { searchQuery: this.state.searchQuery } });
      this.setState({ photos: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Draw the component
   * 
   * @returns {Component}
   */
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="searchQuery">
            <Form.Label>Find Photos About...</Form.Label>
            <Form.Control onChange={this.updateSearchQuery} type="text" placeholder="Enter a search term" />
          </Form.Group>
        </Form>

        {this.state.photos.length > 0 &&
          <Photos
            photos={this.state.photos}
            searchQuery={this.state.searchQuery}
          />
        }
      </>
    )
  }
}

export default App;
