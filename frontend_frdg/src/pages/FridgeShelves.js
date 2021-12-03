import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import FoodModel from '/models/Food';
import '../App.css';
import axios from 'axios';
import FridgeCard from '../components/FridgeCard';

class FridgeShelves extends Component {
    constructor(props) {
        super(props);
            this.state = {
                food: []
            };
    }
        elementDidMount() {
            axios
                .get('http://localhost:4445/')
                .then(res => {
                    this.setState({
                        food: res.data
                    })
                })
            .catch(err => {
                console.log('Error in FridgeShelves!');
            });
        }
    render() {
        const food = this.state.food;
        console.log("PrintFood: " + food);
        let foodList;

        if(!food){
            foodList = "There's no food in the fridge..."
        } else {
            foodList = food.map((food) =>
                <li> {food} </li>
            );
        }
        return(
            <div>
                <Link to="/create-food">
                    Add New Food
                </Link>
                <div>
                    {foodList}
                </div>
            </div>
        )
    }
}

export default FridgeShelves;