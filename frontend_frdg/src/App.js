import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import cors from 'cors';

import AddFood from './components/AddFood';
import FridgeShelves from './pages/FridgeShelves';
// import FoodDetails from './components/FoodDetails';
// import UpdateFood from './components/UpdateFood';

class App extends Component{
    render() {
      return (
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element = {<FridgeShelves/>} />
              <Route path = '/create-food' element = {<AddFood/>} />
              {/* <Route path = '/edit-food:id' component = {UpdateFood} /> */}
            </Routes>
          </div>
        </Router>
      )
    }
}


export default App;
