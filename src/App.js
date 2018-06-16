import React, { Component } from 'react';
import './App.css';
import Tittle from './components/Tittle'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div>
        <Tittle />
        <Form />
      </div>
    );
  }
}

export default App;
