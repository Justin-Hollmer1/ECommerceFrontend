import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus, faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function NavBar() {

    let navigate = useNavigate();
    console.log(localStorage.getItem("userOrders"))
    return (
        <div className="navbar">
            <h1>Title</h1>
            {/*Nav Right*/}
            <div className="nav-right">
                {!localStorage.getItem("username") && <a href="/login"><span>Login / Register<FontAwesomeIcon icon={faUser}/></span></a>}
                {(localStorage.getItem("userOrders") && JSON.parse(localStorage.getItem("userOrders")).length !== 0) && <a href="/previous-orders"><span>View Previous Orders</span></a>}
                {localStorage.getItem("username") && <a href="/viewcart"><span>Cart / Checkout <FontAwesomeIcon icon={faCartShopping}/></span></a>}
                {localStorage.getItem("username") && <button onClick={() => {
                    sessionStorage.clear();
                    localStorage.clear();
                    navigate("/")
                    window.location.reload();
                }}><span>Logout</span></button>}
            </div>

        </div>
    )
}

export default NavBar;