/**
 * @file DataDisplay.js
 * @author Code Fellows
 * @description provides a formatted way to display data.  The formatting is
 *          handled through CSS.
 */
import React from "react";

class DataDisplay extends React.Component {

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <div className="dataDisplayDiv">
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default DataDisplay;
