import React from "react";
import logo from "../images/logo-transparent.png";

function Menu() {
    return (
        <>
        <nav>
            <div className="logo">
            <a href="/home"><img alt='bellingmo webdesign logo' src={logo}></img></a>
            </div>
            <label>
            <input type="checkbox" className="hamburger-menu" />
                <div className="toggle">
                <span className="top-line common"></span>
                <span className="middle-line common"></span>
                <span className="bottom-line common"></span>
                </div>
            <ul className="navigation">
            <a href="/digitalproducts" className="link"><h5 className="hover">DIGITAL PRODUCTS & SERVICES</h5></a>
            <br></br>
            <a href="/about" className="link"><h5 className="hover">BELLINGMO WEBDESIGN</h5></a>
            </ul>
            </label>
        </nav>
        </>
    )
}

export default Menu; 