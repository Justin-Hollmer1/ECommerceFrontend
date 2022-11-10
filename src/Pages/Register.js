import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function RegisterForm() {

    let allUsersData;

    let clickToRegister = async () => {
        let userObject = {
            "username": document.getElementById("username").value,
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value,
            "admin_status": 0
        }

        function postUser() {
            fetch("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/save-user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            }).then(resp => console.log(resp));
        }


        await fetch("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/users")
            .then(resp => resp.json())
            .then(data => allUsersData = data);
        console.log(allUsersData);
        let arrayOfUsernames = allUsersData.map(n => {
            return n.username;
        })
        let arrayOfEmails = allUsersData.map(n => {
            return n.email;
        })
        console.log(arrayOfUsernames);


        if (document.getElementById("password").value !== document.getElementById("confirm_password").value) {
            console.log("The passwords do not match.")
        } else if (arrayOfUsernames.includes(userObject.username)) {
            console.log("That username alerady exists in the database.")
        } else if (arrayOfEmails.includes(userObject.email)) {
            console.log("That email alerady exists in the database.")
        }
        else {
            postUser();
            navigate("/login");
        }
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