/**
 * @file Parent.js
 * @author Code Fellows
 * @description represents a Parent person
 */
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Child from "./Child";

/**
 * A parent person
 */
class Parent extends React.Component {

  /**
   * Initialize the state attributes
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      billysMoney: 0,
      money: 100,
    };
  }

  /**
   * Transfer money from the parent to Billy as a response to a request from
   * the Child component.
   * 
   * @param {number} dollars - the amount of dollars to give to Billy
   */
  giveMoneyToBilly = (dollars) => {
    const parentBalance = this.state.money - dollars;
    this.setState({
      billysMoney: this.state.billysMoney + dollars,
      money: parentBalance,
    });
    if (parentBalance < 0) {
      this.props.onOverdraft();
    }
  };

  /**
   * Draw the component 
   * 
   * @returns {Component}
   */
  render() {
    return (
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Parent</Card.Title>
            <Card.Text>
              I am the parent. I have {this.state.money} dollars.
            </Card.Text>
          </Card.Body>
        </Card>
        <Child
          askForMoney={this.giveMoneyToBilly}
          billysMoney={this.state.billysMoney}
        />
      </CardGroup>
    );
  }
}

export default Parent;
