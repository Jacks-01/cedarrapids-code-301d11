/**
 * @file Cats.js
 * @author Code Fellows
 * @description Responsible for rendering a list of Cats.
 */
import React from "react";
import { ListGroup } from "react-bootstrap";
import Cat from "./Cat";

class Cats extends React.Component {

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <ListGroup>
        {this.props.cats.length &&
          this.props.cats.map((cat, idx) => {
            return (
              <ListGroup.Item key={idx}>
                <Cat info={cat} onDelete={this.props.onDelete} />
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    );
  }
}

export default Cats;
