import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar() {





    return (
        <div className="navbar">
            <h1>This is the navbar</h1>


            {/*Nav Right*/}
            <div className="nav-right">
                <a href="/login"><span>Login / Register<FontAwesomeIcon icon={faUser} /></span></a>
                <span>Cart <FontAwesomeIcon icon={faCartShopping} /></span>
            </div>

        </div>
    )
}

export default NavBar;