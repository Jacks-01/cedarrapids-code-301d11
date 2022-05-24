/**
 * @file Cats.js
 */
import React from "react";
import { ListGroup } from "react-bootstrap";
import Cat from "./Cat";

class Cats extends React.Component {
  delete = () => {
    this.props.onDelete(this.props.info);
  };

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
