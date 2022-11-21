import React from "react";
import PreviousOrderCard from "./PreviousOrderCard";
import {useNavigate} from "react-router-dom";


function PreviousOrders() {
    // console.log(JSON.parse(localStorage.getItem("userOrders")))
    let cards = [];


    for (let i = 0; i < JSON.parse(localStorage.getItem("userOrders")).length; i++) {
        cards.push(<PreviousOrderCard orderNumber={i} orderCost={JSON.parse(localStorage.getItem("userOrders"))[i].cost} orderDate={JSON.parse(localStorage.getItem("userOrders"))[i].date} itemCount={JSON.parse(localStorage.getItem("userOrders"))[i].items.length} key={i} orderID={JSON.parse(localStorage.getItem("userOrders"))[i].id}/>)
    }

    function backToMainScreen() {
        navigate("/")
    }

    let navigate = useNavigate();
    return (
        <div>
            <div className="previous-order-nav">
                <h1>Previous Orders: </h1>
                <button className="back-to-main" onClick={backToMainScreen}>Back to Shop</button>
            </div>
            <div className="item-container">
                {cards}
            </div>
        </div>
    )
}

export default PreviousOrders;