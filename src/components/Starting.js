import React, { Component } from 'react';
import NavBar from './NavBar';
import Data from './Data';
import '../App.css';

class Starting extends Component {
  render() {
    return (
      <div className="App container-fluid" id="home">
        <NavBar />
        <Data />
      </div>
    );
  }
}

export default Starting;
