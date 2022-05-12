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
  constructor(props) {
    super(props);
    this.state = {
      showOverdraftWarning: false,
    };
  }

  overdrafHandler = () => {
    this.setState({
      showOverdraftWarning: true,
    });
  };

  closeHandler = () => {
    this.setState({ showOverdraftWarning: false });
  };

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
