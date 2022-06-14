/**
 * @file App.js
 * @author Code Fellows
 * @description App for demo of class 03
 */
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import OverdraftModal from "./Overdraft-Modal";
import Parent from "./Parent";

/**
 * The primary component for our application.
 */
class App extends React.Component {

  /**
   * Initialize the overdraft warning state attribute
   * 
   * @param {object} props - the properties object
   */
  constructor(props) {
    super(props);
    this.state = {
      showOverdraftWarning: false,
    };
  }

  /**
   * Handle events that require that the overdraft modal be shown by setting
   * the overdraft attribute to true.
   */
  overdrafHandler = () => {
    this.setState({
      showOverdraftWarning: true,
    });
  };

  /**
   * Set the overdraft attribute to false
   */
  closeHandler = () => {
    this.setState({ showOverdraftWarning: false });
  };

  /**
   * Draw the component
   * 
   * @returns {Component}
   */
  render() {
    return (
      <Container>
        <Header title={"Billy is a teenager"} />
        <Parent onOverdraft={this.overdrafHandler} />
        <OverdraftModal
          show={this.state.showOverdraftWarning}
          onClose={this.closeHandler}
        />
      </Container>
    );
  }
}

export default App;
