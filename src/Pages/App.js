import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";
import RegisterForm from "./Register";
function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </Router>
    );
}

export default App;
