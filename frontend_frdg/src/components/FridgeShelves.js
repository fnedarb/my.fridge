import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import FoodCard from './FoodCard';

class FridgeShelves extends Component {
    constructor(props) {
        super(props);
            this.state = {
                food: []
            };
    }
    componentDidMount() {
        axios
        .get('http://localhost:4444/api/fridges')
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
            foodList = food.map((food, k) =>
                <FoodCard food={food} key={k} />
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