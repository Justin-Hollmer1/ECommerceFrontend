import React, {useEffect, useState} from 'react';
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
function ViewCartCard({name, cost, quantity, image_path}) {
    // console.log("name: " + name)
    // console.log("cost: " + cost)
    // console.log("quantity: " + quantity)
    // console.log("image path: " + image_path)
    let [itemQuantity, setItemQuantity] = useState([]);
    let [itemPrice, setItemPrice] = useState(0);


    // This happens once per card on page load.
    // This sets the quantity equal to what it is in session storage.
    // This also sets the initial value for the price of the item.
    useEffect(() => {
        setItemQuantity(quantity);
        setItemPrice(cost * quantity);
    }, [])

    function removeFromCart(event) {
        // event.preventDefault();
        sessionStorage.removeItem(name)
        window.location.reload();
    }
    // When the quantity is changes, it changes the value in state
    function changeQuantity(e) {
        // e.preventDefault();
        setItemQuantity(e.target.value);
    }

    // When the value of the quantity changes in state, it gets updated to the session storage.
    useEffect(() => {
        sessionStorage.setItem(name, JSON.stringify([itemQuantity, cost, image_path]));
        setItemPrice(itemQuantity * cost);
        console.log("The state has been updated.");
    }, [itemQuantity])


    let navigate = useNavigate();
    return (
        <div className="view-cart-body-row">
            <div className="card">
                <img className="card-image" src={images[image_path]} alt="Image" />
                <div className="card-text">
                    <span className="card-name">{name}</span>
                    <span className="card-cost">${cost}</span>
                </div>
                <div className="remove-from-cart-buttons">
                    <button className="remove-button" type="submit" onClick={removeFromCart}>Remove From Cart</button>
                </div>
            </div>
            <div className="view-cart-quantity">
                <form className="view-cart-quantity-box">
                    <input
                        type="number"
                        onChange={changeQuantity}
                        value={itemQuantity}
                        min="1"
                        max="99"
                    />
                </form>
            </div>
            <div className="view-cart-price">
                <div className="view-cart-price-box">
                    <span>${itemPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default ViewCartCard;