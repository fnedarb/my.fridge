import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import AddFood from './components/AddFood';
// import FoodList from './components/FridgeShelves';
// import FoodDetails from './components/FoodDetails';
// import UpdateFood from './components/UpdateFood';

class App extends Component{
    render() {
      return (
        <Router>
          <div>
            <Routes>
            {/* <Route exact path='/' component = {FoodList} /> */}
            <Route path = '/create-food' component = {AddFood} />
            {/* <Route path = '/edit-food:id' component = {UpdateFood} /> */}
            </Routes>
          </div>
        </Router>
      )
    }
}


export default App;
