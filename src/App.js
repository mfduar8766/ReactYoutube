import React, { Component } from 'react';
import './App.css';
import YouTube from './youtube';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <YouTube/>                
          </div>
        </div>
      </div>
    );
  }
}

export default App;
