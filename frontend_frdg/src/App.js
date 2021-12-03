import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from `react-router-dom`;
import './App.css';

import AddFood from `./components/AddFood`;
import FoodList from `./components/FridgeShelves`;
import FoodDetails from `./components/FoodDetails`;
import UpdateFood from `./components/UpdateFood`;

class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component = {FoodList} />
          <Route path = '/create-food' component = {AddFood} />
          <Route path = '/edit-food:id' component = {UpdateFood} />
        </div>
      </Router>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
