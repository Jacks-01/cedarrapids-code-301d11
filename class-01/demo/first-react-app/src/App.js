/**
 * @file App.js
 * @author Code Fellows (with modifications)
 * @description The starting component of our demonstration.
 */
import React from "react";
import "./App.css";
import Board from "./Board";

/**
 * The definition of the App class.  It does not have a constructor, but
 * because it extends React.Component, it must have a render() funciton.
 */
class App extends React.Component {
  /**
   * Draws the App
   * @returns React.Component
   */
  render() {
    return (
      <div className="App">
        <h1>First React App - Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

export default App;
