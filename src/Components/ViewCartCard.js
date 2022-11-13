import React from 'react';
import Bananas from './Item_Images/Bananas.webp'


function ViewCartCard() {
    return (
        <div className="card">
            <img className="card-image" src={Bananas}/>
            <div className="card-text">
                <span className="card-name">Name here</span>
                <span className="card-cost">Cost here</span>
            </div>
            <button className="remove-from-cart-button">Remove from cart</button>
        </div>
    )
}

export default ViewCartCard;