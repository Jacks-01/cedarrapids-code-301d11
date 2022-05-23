/**
 * @file Cats.js
 */
import React from "react";

class Cats extends React.Component {
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
