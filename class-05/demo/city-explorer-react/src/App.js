/**
 * @file App.js
 * @author Code Fellows
 * @description The primary application point
 *
 */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import './App.css';

class App extends React.Component {

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
