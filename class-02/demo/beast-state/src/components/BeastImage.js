/**
 * @file BeastImage.js
 * @author Code Fellows
 * @description Displays a beast image
 */
import React from "react";
import { Image } from "react-bootstrap";

class BeastImage extends React.Component {

  /**
   * Iniitialize the status attribute
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      status: "Yay",
    };
  }

  /**
   * Event handler
   */
  handleClick = () => {
    const newStatus = this.state.status === "Nay" ? "Yay" : "Nay";
    this.setState({ status: newStatus });
  };

  /**
   * Draw the BeastImage
   * 
   * @returns {Component}
   */
  render() {
    return (
      <div className="beastImage" onClick={this.handleClick}>
        <Image
          src={this.props.imageUrl}
          alt="Some horned beast"
          rounded
          fluid
        />
        <h3>{this.state.status}</h3>
      </div>
    );
  }
}

export default BeastImage;
