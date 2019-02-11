import React, { Component } from 'react';
import Create from './Create';
import Read from './Read';
import Delete from './Delete';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Create />
      </div>
    );
  }
}

export default App;
