import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import Mainbody from './Mainbody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Mainbody />
        <Footer />
      </div>
    );
  }
}

export default App;
