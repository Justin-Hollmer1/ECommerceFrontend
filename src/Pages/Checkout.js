import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import {FetchURL} from "../FetchLocation";

function Checkout() {

    let totalPrice = 0;
    let keys = Object.keys(sessionStorage);
    for (let i = 0; i < keys.length; i++) {
        // console.log(parseFloat(JSON.parse(sessionStorage.getItem(keys[i]))[1]));
        totalPrice += ((parseFloat(JSON.parse(sessionStorage.getItem(keys[i]))[1])) * (parseFloat(JSON.parse(sessionStorage.getItem(keys[i]))[0])));
        // itemsInCart.push({
        //     name: keys[i],
        //     quantity: JSON.parse(sessionStorage.getItem(keys[i]))[0],
        //     cost: JSON.parse(sessionStorage.getItem(keys[i]))[1],
        //     image_path: JSON.parse(sessionStorage.getItem(keys[i]))[2]
        // })
    }
    let tax = totalPrice * 0.0825;
    let total = totalPrice + tax;

    // Declaring the variables needed to post the order to the database.
    let userID = localStorage.getItem("userID");
    let date = new Date();
    let dateString = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();


    let postToDatabase = async () => {
        let orderObject = {
            "date": dateString,
            "cost": total
        }
        // This request sets the order to the user in the database.
        await fetch(FetchURL + "post-order-user-id/" + userID, {
            method: "POST",
            body: JSON.stringify(orderObject),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json()).then(data => console.log(data));

    }
    return (
        <div className="checkout-page">
            <NavBar />
            <div className="checkout-form">
                <h1>This is the checkout page</h1>
                <div className="checkout-form-details">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="checkout-form-details">
                    <span>Tax (8.25%): </span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="checkout-form-details">
                    <span>Total: </span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button onClick={postToDatabase}>Place Order (Post the order to the database)</button>
            </div>
        </div>
    )
}

export default Checkout;