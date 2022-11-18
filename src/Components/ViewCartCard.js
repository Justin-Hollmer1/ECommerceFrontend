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
function ViewCartCard() {
    function returnToMainPage() {
        navigate("/")
    }
    let navigate = useNavigate();
    return (
        <div className="card">
            <button className="back-to-main-page" onClick={returnToMainPage}>Back To Main Page</button>
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