/**
 * @file Header.js
 * @author Code Fellows
 * @description defines the page header
 */
import React from "react";
import Navbar from "react-bootstrap/Navbar";

/**
 * Renders the header as a react-bootstrap Navbar
 */
class Header extends React.Component {

  /**
   * Draw the component 
   * 
   * @returns {Component}
   */
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <h1>{this.props.title}</h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
