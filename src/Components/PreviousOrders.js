import React from "react";
import PreviousOrderCard from "./PreviousOrderCard";


function PreviousOrders() {
    // console.log(JSON.parse(localStorage.getItem("userOrders")))
    let cards = [];


    for (let i = 0; i < JSON.parse(localStorage.getItem("userOrders")).length; i++) {
        cards.push(<PreviousOrderCard orderNumber={i} orderCost={JSON.parse(localStorage.getItem("userOrders"))[i].cost} orderDate={JSON.parse(localStorage.getItem("userOrders"))[i].date} itemCount={JSON.parse(localStorage.getItem("userOrders"))[i].items.length} key={i} orderID={JSON.parse(localStorage.getItem("userOrders"))[i].id}/>)
    }

    return (
        <div>
            <h1>Previous Orders: </h1>
            <div className="item-container">
                {cards}
            </div>
        </div>
    )
}

export default PreviousOrders;