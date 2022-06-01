/**
 * @file Cat.js
 * @author Code Fellows
 * @description Display a single cat
 */
import React from "react";

class Cat extends React.Component {

  /**
   * Handles the event where the user has chosen to delete the displayed cat.
   * The actual deleting is handled elsewhere.
   */
  delete = () => {
    this.props.onDelete(this.props.info);
  };

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <h3>
        {this.props.info.name} ({this.props.info.location}){" "}
        <span onClick={this.delete}>[X]</span>
      </h3>
    );
  }
}

export default Cat;
