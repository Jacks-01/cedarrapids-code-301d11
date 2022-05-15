/**
 * @file Overdraft-Modal.js
 * @author Code Fellows
 * @description Defines a modal panel
 */
import React from "react";
import { Modal, Button } from "react-bootstrap";

class OverdraftModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Overdraft Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the last time!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default OverdraftModal;
