import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { render } from 'react-dom';

class AddFood extends Component {
    constructor() {
        super();
        this.state = {
            foodName: '',
            expirationDate: '',
            description: '',
        };
};

onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

onSubmit = e => {
    e.preventDefault();

    const data = {
        foodName: this.state.foodName,
        expirationdate: this.state.expirationDate,
        description: this.state.description,
    };

    axios
        .post('http://localhost:4444/api/fridges', data)
        .then(res => {
            this.setState({
                foodName: '',
                expirationDate: '',
                description: '',
            });
            this.props.history.push('/');
        })
        .catch(err => {
            console.log('Error adding Food');
        });
};

render() {
    return(
        <div>
            <div>
                <Link to='/'>
                    Show Food List
                </Link>
            </div>
            <div>
                <h1>Add Food</h1>
                <p>Add New Food</p>
                <form noValidate onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Name of the food'
                        name='food name'
                        value={this.state.foodName}
                        onChange={this.onChange}
                    />
                    <input
                        type='text'
                        placeholder='Description of the food'
                        name='food description'
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
};
};

export default AddFood;