import React from 'react';
import ViewCartBody from "../Components/ViewCartBody";


function ViewCart() {
    return (
        <div className="view-cart">
            <div className="view-cart-nav">
                <h2>Checkout</h2>
            </div>
            <ViewCartBody />
        </div>
    )
}

export default ViewCart;