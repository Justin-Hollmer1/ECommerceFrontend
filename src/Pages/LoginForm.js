import React from "react";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import { FetchURL } from "../FetchLocation";

function LoginForm() {
    let navigate = useNavigate();

    // Declaring state for all the data and errors in the form.
    let [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    let [formErrors, setFormErrors] = useState({});
    let [hitSubmit, setHitSubmit] = useState(false);
    let [userObject, setUserObject] = useState({});
    let [allUsersData, setAllUsersData] = useState([]);

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
    // let allUsersData;
    // let arrayOfUsernames;
    // let onPageLoad = async () => {
    //     await fetch("http://ec2-18-224-4-73.us-east-2.compute.amazonaws.com:8080/users")
    //         .then(resp => resp.json())
    //         .then(data => allUsersData = data);
    //     arrayOfUsernames = allUsersData.map(n => {
    //         return n.username;
    //     })
    // }
    // onPageLoad();


    // This will run once on page load.
    useEffect( () => {
        const doTheThing = async () => {
            await fetch( FetchURL + "/users")
                .then(resp => resp.json())
                .then(data => setAllUsersData(data));
            // let arrayOfUsernames = allUsersData.map(n => {
            //     return n.username;
            // })
        }
        doTheThing();
    }, []);

    // Here are listed all the error conditions.
    // function validate(values) {
    //     let errors = {};
    //     for (let i = 0; i < allUsersData.length; i++) {
    //         if (allUsersData[i].username.toLowerCase() === formData.username.toLowerCase()) {
    //             setUserObject(allUsersData[i]);
    //         }
    //     }
    //     if (userObject.username === undefined) {
    //         errors.username = "That username is not currently in the database.";
    //     }
    //     // Username field can't be blank.
    //     if (!values.username) {
    //         errors.username = "Username field must be filled out.";
    //     }
    //     if (userObject.username !== undefined && userObject.password !== formData.password) {
    //         errors.password = "Incorrect password."
    //     }
    //     console.log()
    //     return errors;
    // }

    useEffect(() => {
        function validate(values) {
            let errors = {};
            for (let i = 0; i < allUsersData.length; i++) {
                if (allUsersData[i].username.toLowerCase() === formData.username.toLowerCase()) {
                    setUserObject(allUsersData[i]);
                }
            }
            if (userObject.username === undefined) {
                errors.username = "That username is not currently in the database.";
            }
            // Username field can't be blank.
            if (!values.username) {
                errors.username = "Username field must be filled out.";
            }
            if (userObject.username !== undefined && userObject.password !== formData.password) {
                errors.password = "Incorrect password."
            }
            console.log()
            return errors;
        }
        setFormErrors(validate(formData));
        if (Object.keys(formErrors).length) {
            setHitSubmit(false)
        }
        else {
            setHitSubmit(true)
        }
    }, [hitSubmit])

    useEffect(() => {
        console.log("Error count: " + Object.keys(formErrors).length)
        console.log("submit status" + hitSubmit)
        if (!Object.keys(formErrors).length && hitSubmit) {
            console.log("Submit now");
            console.log(userObject)
            localStorage.setItem("username", userObject.username);
            localStorage.setItem("userID", userObject.id);
            navigate("/");
        }
        else {
            console.log("There are errors.")
        }
    }, [formErrors])

    // This function is run whenever the form is submitted.
    let clickToLogin = (e) => {
        e.preventDefault();
        // This is where the error handling for the form is done.
        setHitSubmit(true);
    }

    return (
        <div className="login-form">
            <form className="login-form-body" onSubmit={clickToLogin}>
                <h1 id="login-header">Login</h1>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    name="username"
                    placeholder="username here"
                    onChange={updateForm}
                    value={formData.username}
                />
                {formErrors.username !== undefined && <p className={"form-error"}>{formErrors.username}</p>}
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={updateForm}
                    value={formData.password}
                />
                {formErrors.password !== undefined && <p className={"form-error"}>{formErrors.password}</p>}
                <button id="login-form-login-button">Login</button>
            </form>

            <button id="login-form-signup-button" onClick={() => navigate('/register')}>Don't have an account? Sign Up</button>
        </div>
    )
}

export default LoginForm;