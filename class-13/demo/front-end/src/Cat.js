/**
 * @file Cat.js
 */
import React from "react";

class Cat extends React.Component {
  delete = () => {
    this.props.onDelete(this.props.info);
  };

  update = () => {
    console.log(`Cat.update()`);
    this.props.onUpdate(this.props.info);
  };

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
