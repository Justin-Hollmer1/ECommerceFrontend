import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RegisterForm() {

    // Declaring state for all the data and errors in the form.
    let [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    let [formErrors, setFormErrors] = useState({});
    let [hitSubmit, setHitSubmit] = useState(false);

    function updateForm(event) {
        event.preventDefault();
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // On page load, this fetch request gets all data from the user's table in the database and stores it in local memory.
    let allUsersData;
    let arrayOfUsernames;
    let arrayOfEmails;
    let onPageLoad = async () => {
        await fetch("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/users")
            .then(resp => resp.json())
            .then(data => allUsersData = data);
        arrayOfUsernames = allUsersData.map(n => {
            return n.username;
        })
        arrayOfEmails = allUsersData.map(n => {
            return n.email;
        })
    }
    onPageLoad();

    // Here are listed all the error conditions.
    function validate(values) {
        let errors = {};
        // Username field can't be blank.
        if (!values.username) {
            errors.username = "Username field must be filled out.";
        }
        // Checks if that username already exists in the database.
        else if (arrayOfUsernames.includes(values.username)) {
            errors.username = "That username already exists in the database."
        }
        // Email field can't be blank.
        else if (!values.email) {
            errors.email = "Email field must be filled out.";
        }
        // Checks if that email already exists in the database.
        else if (arrayOfEmails.includes(values.email)) {
            errors.email = "That email address already exists in the database."
        }
        // Password has to be more than 4 characters long
        else if (values.password.length < 4) {
            errors.password = "Password must be at least 4 characters in length.";
        }
        // Confirm password field has to match password field.
        else if (values.password !== values.confirm_password) {
            errors.confirm_password = "Passwords do not match.";
        }
        return errors;
    }

    useEffect(() => {
        if (!Object.keys(formErrors).length && hitSubmit) {
            console.log("Submit now")
            // Storing all the data from when the form is submitted in this object.
            let userObject = {
                "username": formData.username,
                "email": formData.email,
                "password": formData.password,
                "admin_status": 0
            }

            // Declaring this function to post data to the database, not calling it yet.
            function postUser() {
                fetch("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/save-user", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userObject)
                }).then(resp => resp.json()).then(data => {
                    sessionStorage.setItem("username", data.username)
                    sessionStorage.setItem("userID", data.id)
                });
            }

            // Once some error handling is done it will post the user to the database and redirect to the login page.
            postUser();
            navigate("/login");
        }
        else {
            console.log("There are errors.")
        }
    }, [formErrors])

    // This function is run whenever the form is submitted.
    let clickToRegister = (e) => {
        e.preventDefault();
        // This is where the error handling for the form is done.
        setFormErrors(validate(formData));
        setHitSubmit(true);
    }

    let navigate = useNavigate();
    return (
        <div className="register-form">
            <form className="register-form-body" onSubmit={clickToRegister}>
                <h1 id="register-header">Register</h1>
                <label htmlFor="email">Email: </label>
                <input
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    onChange={updateForm}
                    value={formData.email}
                    type="email"
                />
                {formErrors.email !== undefined && <p className="form-error">{formErrors.email}</p>}
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    name="username"
                    placeholder="username here"
                    onChange={updateForm}
                    value={formData.username}
                    type="text"
                />
                {formErrors.username !== undefined && <p className="form-error">{formErrors.username}</p>}
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={updateForm}
                    value={formData.password}
                    type="password"
                />
                {formErrors.password !== undefined && <p className="form-error">{formErrors.password}</p>}
                <label htmlFor="confirm_password">Confirm Password: </label>
                <input
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Re-Enter password"
                    onChange={updateForm}
                    value={formData.confirm_password}
                    type="password"
                />
                {formErrors.confirm_password !== undefined && <p className="form-error">{formErrors.confirm_password}</p>}
                <button id="register-form-register-button">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;