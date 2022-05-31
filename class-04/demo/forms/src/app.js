/**
 * @file app.js
 * @date 2022-05-31
 * @author Code Fellows
 * @description The primary application component.
 * 
 */
import React from 'react';
import Main from './main';

class App extends React.Component {

  /**
   * Draw the component
   * 
   * @returns {Component}
   */
  render() {
    return (
      <Main />
    )
  }
}

export default App;
