/**
 * @file UpdateCatForm.js
 */
import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

class UpdateCatForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.cat) {
      this.state = {
        _id: this.props.cat._id,
        name: this.props.cat.name,
        color: this.props.cat.color,
        location: this.props.cat.location,
        hasClaws: this.props.cat.hasClaws,
      };
    } else {
      this.state = {
        _id: "",
        name: "",
        color: "",
        location: "",
        hasClaws: "",
      };
    }
  }

  /**
   * Handle the event when the user clicks the submit button
   * @param {*} evt
   */
  handleSubmit = (evt) => {
    console.log(`UpdateCatForm.handleSubmit()`);
    evt.preventDefault();
    this.props.onUpdate(this.state);
    this.handleClose();
  };

  /**
   * Handle the change of name event
   *
   * @param {object} evt - the event object
   */
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  /**
   * Handle the change of color event
   *
   * @param {object} evt - the event object
   */
  handleColorChange = (evt) => {
    this.setState({ color: evt.target.value });
  };

  /**
   * Handles changes in the location
   *
   * @param {object} evt - an event object
   */
  handleLocationChange = (evt) => {
    this.setState({ location: evt.target.value });
  };

  /**
   * Handle the change of hasClaws event
   *
   * @param {object} evt - the event object
   */
  handleClawChange = (evt) => {
    this.setState({ hasClaws: evt.target.checked });
  };

  /**
   * Handle closing the modal window
   */
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Kitty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit} className="p-4">
            <Form.Label>
              <h2>Update a Cat</h2>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>Cat Name {this.state.name}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cat name"
                onChange={this.handleNameChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cat Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cat color"
                onChange={this.handleColorChange}
                value={this.state.color}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cat Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cat location"
                onChange={this.handleLocationChange}
                value={this.state.location}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Has Claws"
                onChange={this.handleClawChange}
                checked={this.state.hasClaws}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdateCatForm;
