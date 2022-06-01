/**
 * @file Footer.js
 * @date 2022-06-01
 * @author Code Fellows
 * @description A standard page footer
 * 
 */
import React from "react";

class Footer extends React.Component {

  /**
   * Draw the component.
   * 
   * @returns {Component}
   */
  render() {
    return (
      <footer>
        <p>
          Recipes from{" "}
          <a href="https://www.edamam.com/" target="_blank" rel="noreferrer">
            Edamam
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
