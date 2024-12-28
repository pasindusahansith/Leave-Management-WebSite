import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/login.css"
import logo from "../image/logo.png";

function LoginPage(){
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // You can add authentication logic here
        navigate('/DashBoard'); // Redirect to dashboard
    };
    return (
        <div className="login-container">
            <div className="triangle triangle-left"></div>
            <div className="triangle triangle-leftdown"></div>
            <div className="triangle triangle-right"></div>
            <div className="triangle triangle-rightup"></div>
            <div className="login-box">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input type="email" placeholder="email" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            <a href="/" className="forgot-password">Forgot Password?</a>
        </div>
    </div>
    );
};

export default LoginPage;