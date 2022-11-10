import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
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
                <label htmlFor="password">Confirm Password: </label>
                <input id="password" name="password" placeholder="Re-Enter password" />
                <button id="register-form-register-button" onClick={() => navigate("/login")}>Register</button>
            </div>
        </div>
    )
}

export default RegisterForm;