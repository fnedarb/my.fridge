import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';
// import { render } from 'react-dom';

class AddFood extends Component {
    constructor() {
        super();
        this.state = {
            foodName: '',
            expirationDate: Date,
            description: '',
        };
    };

        onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault()

        const data = {
            foodName: this.state.foodName,
            expirationDate: this.state.expirationDate,
            description: this.state.description
        };

        axios
            .post('http://localhost:4445/', data)
            .then(res => {
                this.setState({
                    foodName: '',
                    expirationDate: '',
                    description: '',
                });
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err,'Error adding Food');
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
                            type='String'
                            placeholder='Name of the food'
                            name='foodName'
                            defaultValue={this.state.foodName}
                            onChange={this.onChange}
                        />
                        <input
                            type='Date'
                            placeholder="The food's Expiration date"
                            name='expirationDate'
                            defaultValue={this.state.expirationDate}
                            onChange={this.onChange}
                        />
                        <input
                            type='String'
                            placeholder='Description of the food'
                            name='description'
                            defaultValue={this.state.description}
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