import React from "react";
import logo from "./airbnb.png"
import './App.css';

export default function Navbar() {
    return(
        <nav>
            <img src={logo} alt="Logo" className="nav--logo"/>
        </nav>
        
    )
}