
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    let navigate = useNavigate();
    return (
        <div className="login-form">
            <h1 id="login-header">Login</h1>
            <div className="login-form-body">
                <label htmlFor="email">Email: </label>
                <input name="email" id="email" />
                <label htmlFor="username">Username: </label>
                <input id="username" name="username"/>
                <label htmlFor="password">Password </label>
                <input id="password" name="password"/>
            </div>
            <div className="login-buttons">
                <button onClick={() => navigate("/")}>Login</button>
                <button onClick={() => navigate('/register')}>Sign Up</button>
            </div>
        </div>
    )
}

export default LoginForm;