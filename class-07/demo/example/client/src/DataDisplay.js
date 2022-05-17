/**
 * @file DataDisplay.js
 */
import React from "react";

class DataDisplay extends React.Component {
  render() {
    return (
      <div className="dataDisplayDiv">
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default DataDisplay;
