
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Login form</h1>
            <input name="username" />
            <input name="password" />
            <button onClick={() => navigate("/")}>Login</button>
        </div>
    )
}

export default LoginForm;