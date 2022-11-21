import React, {useState} from "react";
import {FetchURL} from "../FetchLocation";
import {useNavigate} from "react-router-dom";


function PreviousOrderCard({orderNumber, orderCost, orderDate, itemCount, orderID}) {

    let [viewFullCard, setViewFullCard] = useState(false);

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

    let viewThatOrder = () => {
        console.log("viewing order: " + orderID)
        setViewFullCard(!viewFullCard);
    }


    // This takes in all the items and formats them.
    let returnStatement = "";
    let itemAmount = JSON.parse(localStorage.getItem("userOrders"))[orderNumber].items.length
    // Writing the for loop using hard coded values
    let previousItemName = JSON.parse(localStorage.getItem("userOrders"))[orderNumber].items[0].name
    let count = 0;
    for (let i = 0; i < itemAmount; i++) {
        if (previousItemName === JSON.parse(localStorage.getItem("userOrders"))[orderNumber].items[i].name) {
            count += 1;
        }
        else {
            returnStatement += "" + count + " " + previousItemName + ", "
            previousItemName = JSON.parse(localStorage.getItem("userOrders"))[orderNumber].items[i].name
            count = 1;
        }
    }
    returnStatement += "" + count + " " + previousItemName + ""
    console.log(returnStatement)



    // if (orderNumber === 5) {
    //     let returnStatement = "You ordered: ";
    //     let itemAmount = JSON.parse(localStorage.getItem("userOrders"))[5].items.length
    //     // Writing the for loop using hard coded values
    //     let previousItemName = JSON.parse(localStorage.getItem("userOrders"))[5].items[0].name
    //     let count = 0;
    //     for (let i = 0; i < itemAmount; i++) {
    //         if (previousItemName === JSON.parse(localStorage.getItem("userOrders"))[5].items[i].name) {
    //             count += 1;
    //         }
    //         else {
    //             returnStatement += count + " " + previousItemName + ", "
    //             previousItemName = JSON.parse(localStorage.getItem("userOrders"))[5].items[i].name
    //             count = 1;
    //         }
    //     }
    //     returnStatement += count + " " + previousItemName;
    //     console.log(returnStatement)
    // }
    //
    //
    //
    //
    // let itemAmount = JSON.parse(localStorage.getItem("userOrders"))[5].items.length
    // // Writing the for loop using hard coded values
    // for (let i = 0; i < itemAmount; i++) {
    //
    // }



    let fullOrderCard = (
        <div className="previous-order-card-full">
            <h1>Order Number: {orderNumber + 1}</h1>
            <p>Date Placed: {JSON.parse(localStorage.getItem("userOrders"))[orderNumber].date}</p>
            <p>Cost: {JSON.parse(localStorage.getItem("userOrders"))[orderNumber].cost}</p>
            {/*<p>Items in order: {JSON.parse(localStorage.getItem("userOrders"))[orderNumber].items[0].id}</p>*/}
            <div>
                <p>Items in order: </p>
                <div>{returnStatement}</div>

            </div>
            <button onClick={viewThatOrder}>Compress view</button>
        </div>
    );

    let navigate = useNavigate();
    return (
        <div>
            {/*This gets rendered when the user decides to view the full card.*/}
            {viewFullCard && fullOrderCard}
            {/*This gets rendered when the user decides not to view the full card*/}
            {!viewFullCard && <div className="previous-order-card">
                <h3>Order: {orderNumber + 1}</h3>
                <h4>Date placed: {orderDate}</h4>
                <h4>Price: {orderCost}</h4>
                <p>Number of items: {itemCount}</p>
                <button onClick={viewThatOrder}>Expand view</button>
                <button onClick={deleteOrder}>Delete order</button>
            </div>}
        </div>
    )
}

export default PreviousOrderCard;