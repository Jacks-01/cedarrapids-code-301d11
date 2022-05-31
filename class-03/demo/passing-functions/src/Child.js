/**
 * @file Child.js
 * @author Code Fellows
 * @description the child of the parent
 *
 *
 */
import React from "react";
import { Card, Button } from "react-bootstrap";

class Child extends React.Component {

  /**
   * Attempt to request ten dollars from the parent by calling the 
   * function askForMoney()
   */
  askParentFor10Dollars = () => {
    this.props.askForMoney(10);
  };

  /**
   * Attempt to request twenty dollars from the parent by calling the 
   * function askForMoney()
   */
  askParentFor20Dollars = () => {
    this.props.askForMoney(20);
  };

  /**
   * Draw the component 
   * 
   * @returns {Component}
   */
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Billy</Card.Title>
          <Card.Text>
            I am Billy. I have {this.props.billysMoney} dollars.
          </Card.Text>
          <Button onClick={this.askParentFor10Dollars} variant="primary">
            Ask Parent for 10 dollars
          </Button>
          <Button onClick={this.askParentFor20Dollars} variant="primary">
            Ask Parent for 20 dollars
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Child;
