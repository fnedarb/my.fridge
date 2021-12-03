import React from 'react';
import '../App.css';

const FridgeCard = (props) => {
    const food= props.food;

    return(
        <div className="card-container">
            <div className="desc">
                <h3>{ food.foodName }</h3>
                <p>{ food.description }</p>
            </div>
            </div>
    )
};

export default FridgeCard;