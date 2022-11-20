import React from "react";
import {FetchURL} from "../FetchLocation";


function PreviousOrderCard({orderNumber, orderCost, orderDate, itemCount, orderID}) {

    // This function deleted the order
    let deleteOrder = async () => {
        await fetch(FetchURL + "/delete-order/" + orderID, {method: "delete"})
        console.log("delete successful");

        // This removes the deleted order from the local storage.
        let temporaryUserOrders = JSON.parse(localStorage.getItem("userOrders"))
        temporaryUserOrders.splice(orderNumber, 1)
        localStorage.setItem("userOrders", JSON.stringify(temporaryUserOrders))
        window.location.reload();
    }

    return (
        <div className="previous-order-card">
            <h3>Order: {orderNumber + 1}</h3>
            <h4>Date placed: {orderDate}</h4>
            <h4>Price: {orderCost}</h4>
            <p>Number of items: {itemCount}</p>
            <button>View Order</button>
            <button onClick={deleteOrder}>Delete order</button>
        </div>
    )
}

export default PreviousOrderCard;