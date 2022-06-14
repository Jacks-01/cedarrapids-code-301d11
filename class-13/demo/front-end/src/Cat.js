/**
 * @file Cat.js
 * @author Code Fellows
 * @description Defines the display of a single cat
 */
import React from "react";

class Cat extends React.Component {

  /**
   * Handles the logic for clicking the Delete button.
   */
  delete = () => {
    this.props.onDelete(this.props.info);
  };

  /**
   * Handles the logic for clicking the Update button
   */
  update = () => {
    console.log(`Cat.update()`);
    this.props.onUpdate(this.props.info);
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
        <button onClick={this.delete}>Delete</button>
        <button onClick={this.update}>Update</button>
      </h3>
    );
  }
}

export default Cat;
