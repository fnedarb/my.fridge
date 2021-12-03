import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "..App.css";

class UpdateFoodInfo extends Component {
    constructor() {
        super();
        this.state = {
            foodName: '',
            expirationDate: Date,
            description: '',
        };
    };

    elementDidMount() {
        axios
            .get('http://localhost:4445/')
            .then(res => {
                this.setState({
                    food: res.data
                })
            })
        .catch(err => {
            console.log('Error in UpdateFood');
        });
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();

        const data = {
            foodName: this.state.foodName,
            expirationDate: this.state.expirationDate,
            description: this.state.description
        };

        axios
            .put('http://localhost:4445/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push("/fridge-shelves/" + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in Put Route");
            })
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
                    <h1>Edit Food item</h1>
                    <form noValidate onSubmit={this.onSubmit}>
                        <input
                            type='String'
                            placeholder='Name of the food'
                            name='foodName'
                            value={this.state.foodName}
                            onChange={this.onChange}
                        />
                        <input
                            type='Date'
                            placeholder="The food's Expiration date"
                            name='expirationDate'
                            value={this.state.expirationDate}
                            onChange={this.onChange}
                        />
                        <input
                            type='String'
                            placeholder='Description of the food'
                            name='description'
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