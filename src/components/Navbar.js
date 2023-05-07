import React from 'react';
import '../styles/navbar.css'
import logo from '../images/airbnblogo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt='' className="nav--logo"/>
        </nav>
    )
}