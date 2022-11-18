import React from 'react';
import Card from "../Components/Card";
import ViewCartCard from "./ViewCartCard";

function ViewCartBody() {

    let keys = Object.keys(sessionStorage);
    console.log(keys);

    let cardsToDisplayQuantity = [];
    let cardsToDisplayImages = [];

    for (let i = 0; i < keys.length; i++) {
        cardsToDisplayQuantity.push(sessionStorage.getItem(keys[i]))
        cardsToDisplayImages.push(keys[i]);
    }


    return (
        <div className="view-cart-body">
            <div className="view-cart-body-header">
                <h4 className="view-cart-body-products-tag">Products</h4>
                <h4 className="view-cart-body-quantity-tag">Quantity</h4>
                <h4 className="view-cart-body-price-tag">Price</h4>
            </div>
            <div className="view-cart-body-row">
                <div className="view-cart-body-cards">
                    <ViewCartCard />
                </div>
                <div className="view-cart-quantity">
                    <div className="view-cart-quantity-box">
                        <span>10</span>
                    </div>
                </div>
                <div className="view-cart-price">
                    <div className="view-cart-price-box">
                        <span>10.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewCartBody;