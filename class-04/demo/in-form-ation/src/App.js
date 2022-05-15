/**
 * @file App.js
 * @author Code Fellows
 * @description The primary logic for the in-form-ation project
 */
import React from "react";
import { Container, Form } from "react-bootstrap";
import Header from "./Header";

/**
 * Draws a form where the header changes its text based on input from the user.
 */
class App extends React.Component {
  /**
   * Sets the username state attribute
   *
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      username: "user",
    };
  }

  /**
   * Event handler for form submission.
   *
   * @param {object} evt - the event object
   */
  handleFormSubmitted = (evt) => {
    evt.preventDefault();
    console.log(`Submitted`);
  };

  /**
   * Event handler for changes in the text box
   *
   * @param {object} evt  - the event object
   */
  handleUsernameTyped = (evt) => {
    if (evt.target.value.length > 0) {
      this.setState({
        username: evt.target.value,
      });
    } else {
      this.setState({
        username: "user",
      });
    }
  };

  /**
   * Render the main conent of the page
   *
   * @returns {object} - React DOM component
   */
  render() {
    return (
      <div>
        <Header potato={this.state.username} />
        <form onSubmit={this.handleFormSubmitted}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onInput={this.handleUsernameTyped}
          />
          <br />
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
          <br />
          <input type="submit" />
        </form>
        <Container>
          <Form>
            <Form.Group controlId="bootstrapName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onInput={this.handleUsernameTyped} />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
