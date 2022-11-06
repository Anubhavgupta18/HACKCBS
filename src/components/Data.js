import React, { Component } from 'react';
import '../App.css';

class Data extends Component {
  render() {
    return (
      <div className="container-fluid content" id='cont'>
        <h1 className="data">One place to access <br/> everything and <br/> everyone.</h1>
        <h5 className="data_down">To all the awesome people out there who want their <br/> health diagnosis sitting from anywhere.</h5>
          <a href="/home" className="btn btn-default my_btn">Get Started</a>
      </div>
    )
  }
}

export default Data;
