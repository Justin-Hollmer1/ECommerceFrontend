
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    let navigate = useNavigate();
    return (
        <div className="login-form">
            <div className="login-form-body">
                <h1 id="login-header">Login</h1>
                <label htmlFor="email">Email: </label>
                <input name="email" id="email" placeholder="example@gmail.com" />
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" placeholder="username here" />
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" placeholder="Enter password" />
                <button id="login-form-login-button" onClick={() => navigate("/")}>Login</button>
            </div>

            <button id="login-form-signup-button" onClick={() => navigate('/register')}>Don't have an account? Sign Up</button>
        </div>
    )
}

export default LoginForm;