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

    function handleQuantityChange(event) {
        event.preventDefault();
        setItemQuantity(event.target.value);
        // console.log("The quantity of " + name + " is " + itemQuantity);
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (sessionStorage.getItem("username") === null) {
            navigate("/login")
        }
        else {
            console.log("Added " + itemQuantity + " " + name + "'s to cart.")
        }
    }

    return (
        <div>
            <form className="card" onSubmit={handleSubmit}>
                <img className="card-image" src={images[imagePath]}  alt="Image"/>
                <div className="card-text">
                    <span className="card-name">{name}</span>
                    <span className="card-cost">${cost}</span>
                </div>
                <div className="card-button-holder">
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
                </div>
            </form>
        </div>
    )
}

export default Card;