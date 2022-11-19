import React from 'react';
import Card from "../Components/Card";
import ViewCartCard from "./ViewCartCard";
import {useNavigate} from "react-router-dom";

function ViewCartBody() {

    let itemsInCart = [];
    console.log("This component is being rendered.")

    let keys = Object.keys(sessionStorage);

    // This loops over all the session storage and assigns it to the itemsInCart array of objects.
    for (let i = 0; i < keys.length; i++) {
        itemsInCart.push({
            name: keys[i],
            quantity: JSON.parse(sessionStorage.getItem(keys[i]))[0],
            cost: JSON.parse(sessionStorage.getItem(keys[i]))[1],
            image_path: JSON.parse(sessionStorage.getItem(keys[i]))[2]
        })
    }

    // This maps over all the itemInCart and creates one card for each.
    let cards = itemsInCart.map(n => {
        return <ViewCartCard name={n.name} quantity={n.quantity} cost={n.cost} image_path={n.image_path} key={n.name}/>
    })

    function returnToMainPage() {
        navigate("/")
    }

    function proceedToCheckout() {
        navigate("/checkout")
    }


    let navigate = useNavigate();
    return (
        <div className="view-cart-body">
            <button className="back-to-main-page" onClick={returnToMainPage}>Back To Main Page</button>
            <div className="view-cart-body-header">
                <h4 className="view-cart-body-products-tag">Products</h4>
                <h4 className="view-cart-body-quantity-tag">Quantity</h4>
                <h4 className="view-cart-body-price-tag">Price</h4>
            </div>
            {cards}
            <button className="proceed-to-checkout" onClick={proceedToCheckout}>Proceed to checkout</button>
        </div>
    )
}
export default ViewCartBody;