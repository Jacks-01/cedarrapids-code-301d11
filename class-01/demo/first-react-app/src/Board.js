/**
 * @file Board.js
 * @author Code Fellows
 * @description Draws a tic-tac-toe board with Squares
 */
import React from "react";
import Square from "./Square";
/**
 * Defines a tic-tac-toe board
 */
class Board extends React.Component {
  /**
   * Draws the board
   *
   * @returns React.Component
   */
  render() {
    return (
      <div id="board">
        <h2>Board</h2>
        <div className="board-row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="board-row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div className="board-row">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    );
  }
}

export default Board;
