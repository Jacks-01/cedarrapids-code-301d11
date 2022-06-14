/**
 * @file App.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description The primary application logic and display.
 *
 */
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends React.Component {

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
