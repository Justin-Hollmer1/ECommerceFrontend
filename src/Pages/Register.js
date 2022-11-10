import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {

    let userObject = {
        "username": document.getElementById("username"),
        "email": document.getElementById("email"),
        "password": document.getElementById("password"),
        "admin_status": 0
    }
    function clickToRegister() {
        // axios.post("ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/save-user", userObject);
        // navigate("/login")
        // axios.get("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/users")
        //     .then(data => {
        //         console.log(data)
        //     })
    }







    let navigate = useNavigate();
    return (
        <div className="register-form">
            <div className="register-form-body">
                <h1 id="register-header">Register</h1>
                <label htmlFor="email">Email: </label>
                <input name="email" id="email" placeholder="example@gmail.com" />
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" placeholder="username here" />
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" placeholder="Enter password" />
                <label htmlFor="confirm_password">Confirm Password: </label>
                <input id="confirm_password" name="confirm_password" placeholder="Re-Enter password" />
                <button id="register-form-register-button" onClick={clickToRegister}>Register</button>
            </div>
        </div>
    )
}

export default RegisterForm;