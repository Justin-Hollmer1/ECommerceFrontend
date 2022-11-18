import React, {useState} from 'react';
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
import {useNavigate} from "react-router-dom";

const images = {Bananas, Apples, Chicken_breast, Avocados, Carrots, Kiwis, Strawberries, Watermelon, Asparagus, Mango, Onions, Bell_Pepper, Potatoes, Spinach}
function Card({name, cost, imagePath}) {
    let navigate = useNavigate();

    let [itemQuantity, setItemQuantity] = useState(1);
    let [inCartValue, setInCartValue] = useState(false);

    function handleQuantityChange(event) {
        event.preventDefault();
        setItemQuantity(event.target.value);
        // console.log("The quantity of " + name + " is " + itemQuantity);
    }

    function addToCart(event) {
        event.preventDefault()
        if (sessionStorage.getItem("username") === null) {
            navigate("/login")
        }
        else {
            console.log("Added " + itemQuantity + " " + name + "'s to cart.")
            if (!sessionStorage.getItem("cart-item-" + name)) {
                sessionStorage.setItem("cart-item-" + name, "quantity-" + itemQuantity);
                setInCartValue(true);
            }
        }
    }

    function removeFromCart(event) {
        event.preventDefault();
        sessionStorage.removeItem("cart-item-" + name);
        setInCartValue(false);
        console.log("Removed " + name + " from cart.");
    }

    return (
        <div>
            <div className="card">
                <img className="card-image" src={images[imagePath]}  alt="Image"/>
                <div className="card-text">
                    <span className="card-name">{name}</span>
                    <span className="card-cost">${cost}</span>
                </div>
                {!sessionStorage.getItem("cart-item-" + name) && <form className="card-button-holder" onSubmit={addToCart}>
                    <button className="card-button" type="submit">Add to cart</button>
                    <input
                        className="card-quantity"
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="99"
                        value={itemQuantity}
                        onChange={handleQuantityChange}
                    />
                </form>}
                {sessionStorage.getItem("cart-item-" + name) && <div className="remove-from-cart-buttons">
                    <button className="remove-button" type="submit" onClick={removeFromCart}>Remove From Cart</button>
                    <p>{itemQuantity} "{name}" in cart now</p>
                    {/*<input*/}
                    {/*    className="card-quantity"*/}
                    {/*    type="number"*/}
                    {/*    id="quantity"*/}
                    {/*    name="quantity"*/}
                    {/*    min="1"*/}
                    {/*    max="99"*/}
                    {/*    value={itemQuantity}*/}
                    {/*    onChange={handleQuantityChange}*/}
                    {/*/>*/}
                </div>}

            </div>
        </div>
    )
}

export default Card;