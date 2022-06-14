/**
 * @file Cats.js
 * @author Code Fellows
 * @description Displays individual cats.
 */
import React from "react";

class Cats extends React.Component {


  /**
   * Draw the component by looping through the cats array (from props) and 
   * displaying them.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <>
        {this.props.cats.length &&
          this.props.cats.map((cat, idx) => {
            return (
              <div key={idx}>
                {cat.name} in {cat.location}
              </div>
            );
          })}
      </>
    );
  }
}

export default Cats;
