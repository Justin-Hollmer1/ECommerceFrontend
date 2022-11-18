import React from 'react';
import Bananas from './Item_Images/Bananas.webp';
import Apples from './Item_Images/Apples.jpeg';
import Chicken_breast from './Item_Images/Chicken_breast.png'
import Avocados from './Item_Images/Avocados.jpeg'
import Carrots from './Item_Images/Carrots.jpeg'
import Kiwis from './Item_Images/Kiwis.jpeg'
import Strawberries from './Item_Images/Strawberries.jpeg'
import Watermelon from './Item_Images/Watermelon.webp'
import Asparagus from './Item_Images/Asparagus.jpeg'
import Bell_Pepper from './Item_Images/Bell_Pepper.jpeg'
import Mango from './Item_Images/Mangos.jpeg'
import Onions from './Item_Images/Onions.jpeg'
import Potatoes from './Item_Images/Potatoes.jpeg'
import Spinach from './Item_Images/Spinach.jpeg'
import { useNavigate } from "react-router-dom";


const images = {Bananas, Apples, Chicken_breast, Avocados, Carrots, Kiwis, Strawberries, Watermelon, Asparagus, Mango, Onions, Bell_Pepper, Potatoes, Spinach}
function ViewCartCard({name, cost, quantity}) {


    let navigate = useNavigate();
    return (
        <div className="view-cart-body-row">
            <div className="card">
                <img className="card-image" src={images[name]}  alt="Image"/>
                <div className="card-text">
                    <span className="card-name">{name}</span>
                    <span className="card-cost">${cost}</span>
                </div>
                <div className="remove-from-cart-buttons">
                    <button className="remove-button" type="submit">Remove From Cart</button>
                </div>
            </div>
            <div className="view-cart-quantity">
                <div className="view-cart-quantity-box">
                    <span>{quantity}</span>
                </div>
            </div>
            <div className="view-cart-price">
                <div className="view-cart-price-box">
                    <span>{cost}</span>
                </div>
            </div>
        </div>
    )
}

export default ViewCartCard;