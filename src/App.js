import React, { Component } from 'react';
import './App.css';
import DangerButton from './components/DangerButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JS Recipes</h1>
        </header>
        <p className="App-intro">
        Collection of js recipes for learning JS
        </p>
        <DangerButton />
      </div>
    );
  }
}

export default App;
