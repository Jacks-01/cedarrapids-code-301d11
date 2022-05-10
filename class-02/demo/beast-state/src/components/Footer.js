/**
 * @file Footer.js
 * @author Code Fellows
 * @description The page footer
 */
import React from "react";
import { Navbar } from "react-bootstrap";

/**
 * Renders the page footer
 */
class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <p>{this.props.text}</p>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
