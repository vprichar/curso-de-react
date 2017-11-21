import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h1>Hello, world!</h1>
      <h1>Hello, world!</h1>
    </div>
  );
  const elementDos = (
    <div>
      <h1>Hello, world!dos </h1>
    </div>
  );
    return (
      <div>
        {elementDos}
        {element}
      </div>
    );
  }
}

export default App;
