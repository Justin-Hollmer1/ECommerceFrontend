import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";
import RegisterForm from "./Register";
import ViewCart from "./ViewCart";
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/viewcart" element={<ViewCart />} />
            </Routes>
        </Router>
    );
}

export default App;
