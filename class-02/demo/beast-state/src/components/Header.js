/**
 * @file Header.js
 * @author Code Fellows
 * @description Defines the standard header section of the page
 */
import React from "react";
import { Navbar } from "react-bootstrap";

/**
 * Defines the page header (not head)
 */
class Header extends React.Component {

  /**
   * Draw the content.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <h1>{this.props.title}</h1>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
