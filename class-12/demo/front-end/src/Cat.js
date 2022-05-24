/**
 * @file Cat.js
 */
import React from "react";

class Cat extends React.Component {
  delete = () => {
    this.props.onDelete(this.props.info);
  };

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
