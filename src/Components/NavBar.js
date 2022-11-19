import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function NavBar() {



    let navigate = useNavigate();

    return (
        <div className="navbar">
            <h1>Title</h1>
            {/*Nav Right*/}
            <div className="nav-right">
                {!localStorage.getItem("username") && <a href="/login"><span>Login / Register<FontAwesomeIcon icon={faUser}/></span></a>}
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