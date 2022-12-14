import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";
import RegisterForm from "./Register";
import ViewCart from "./ViewCart";
import Checkout from "./Checkout";
import PreviousOrders from "../Components/PreviousOrders";
function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/viewcart" element={<ViewCart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/previous-orders" element={<PreviousOrders />} />
            </Routes>
        </Router>
    );
}

export default App;
