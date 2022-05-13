/**
 * @file App.js
 * @author Code Fellows
 * @description
 */
import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {  } 
  render() { 
    console.log('youre in app.render');
    return (
      <div className='App'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
 
export default App;
