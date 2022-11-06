import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Starting from './components/Starting';
import Home from './components/Home';
import Login from './components/Login';
import Child from './components/child/Child';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App container-fluid">
            <Routes>
              <Route path='/' exact element={<Starting/>} />
              <Route path='/home' exact element={<Home/>} />
              <Route path='/signin' exact element={<Login/>} />
              <Route path='/services' exact element={<Child/>} />
            </Routes>
        </div>
    );
  }
}

export default App;
