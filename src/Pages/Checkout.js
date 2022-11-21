import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar";
import {FetchURL} from "../FetchLocation";
import {useNavigate} from "react-router-dom";

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
    let dateString = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();


    let postToDatabase = async () => {
        let orderObject = {
            "date": dateString,
            "cost": total.toFixed(2)
        }

        let orderID;
        // This request sets the order to the user in the database.
        await fetch(FetchURL + "/post-order-user-id/" + userID, {
            method: "POST",
            body: JSON.stringify(orderObject),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => resp.json()).then(data => {
            orderID = data.id
        });

        // Now a for loop to add each of the corresponding items.
        for (let i = 0; i < keys.length; i++) {
            // These are the variables that correspond with the specific item.
            let itemID = JSON.parse(sessionStorage.getItem(keys[i]))[3];
            let itemName = keys[i];
            let itemCost = JSON.parse(sessionStorage.getItem(keys[i]))[1];
            let itemImageURL = JSON.parse(sessionStorage.getItem(keys[i]))[2];
            let itemQuantity = JSON.parse(sessionStorage.getItem(keys[i]))[0];

            let itemObject = {
                "id": itemID,
                "name": itemName,
                "cost": itemCost,
                "image_url": itemImageURL,
            }

            // This will loop over the quantity of the item, adding to the database the correct amount of items.
            for (let o = 0; o < itemQuantity; o++) {
                await fetch(FetchURL + "/post-order/" + orderID + "/item/" + itemID, {
                    method: "POST",
                    body: JSON.stringify(itemObject)
                })
            }
        }
        // Reassign that userOrders in local storage to include the order that was just added to the database.
        await fetch(FetchURL + "/user-" + localStorage.getItem("userID"))
            .then(resp => resp.json())
            .then(data => localStorage.setItem("userOrders", JSON.stringify(data.orders)))
        sessionStorage.clear();
        navigate("/");
    }
    // fetch(FetchURL + "/user-" + localStorage.getItem("userID"))
    //     .then(resp => resp.json())
    //     .then(data => console.log(data.orders))
    // console.log(localStorage.getItem("userID"))

    let backToMainPage = () => {
        navigate("/");
    }
    let navigate = useNavigate();
    return (
        <div className="checkout-page">
            <NavBar />
            {!keys.length && <div>
                <h1>Can't place an order without items.</h1>
                <button onClick={backToMainPage}>Go back to main page</button>
            </div>}
            {keys.length !== 0 && <div>
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
                    <button onClick={backToMainPage}>Actually I'm good (back to main page)</button>
                </div>
            </div>}
        </div>
    )
}

export default Checkout;