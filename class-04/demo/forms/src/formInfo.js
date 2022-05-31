/**
 * @file formInfo.js
 * @date 2022-05-31
 * @author Code Fellows
 * @description Define a modal dialog to display the form data
 * 
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class FormInfo extends React.Component {

  /**
   * Draw the component
   * 
   * @returns {Component}
   */
  render() {
    console.log('form', this.state, this.props)
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Thank you for your response</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This is the information that we collected.</p>
            <p>Name: {this.props.name}</p>
            <p>Your Favorite Activity is: {this.props.activity}</p>
            <p>You Identify as a {this.props.animal} person</p>
            <p>This is your story: {this.props.story}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}

export default FormInfo;