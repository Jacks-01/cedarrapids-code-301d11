/**
 * @file Square.js
 * @author Code Fellows
 * @description Defines a square on a tic-tac-toe board.
 */
import React from "react";

/**
 * Defines a Square from the tic-tac-toe board.  Requires a name so that
 * it knows what to display.
 */
class Square extends React.Component {
  /**
   * Builds a button using props.name for the display value.
   *
   * @returns React.Component
   */
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

export default Square;
