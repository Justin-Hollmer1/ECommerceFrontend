import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {





    return (
        <div className="navbar">
            <h1>Title</h1>
            {/*Nav Right*/}
            <div className="nav-right">
                {!sessionStorage.getItem("username") && <a href="/login"><span>Login / Register<FontAwesomeIcon icon={faUser}/></span></a>}
                {sessionStorage.getItem("username") && <a href="/viewcart"><span>Cart <FontAwesomeIcon icon={faCartShopping}/></span></a>}
                {sessionStorage.getItem("username") && <button onClick={() => {
                    sessionStorage.clear();
                    window.location.reload();
                }}><span>Logout</span></button>}
            </div>

        </div>
    )
}

export default NavBar;