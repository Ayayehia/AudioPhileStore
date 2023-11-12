import React from "react";
// import "./Navigation.css";
import "../assets/Css/Navigation.css"
import { Link } from "react-router-dom";

export default function Nagivation() {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="navigation container">
                <a className="navbar-brand" href="#">
                    <img src="./assets/shared/desktop/logo.svg" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <i className="fas fa-caret-down" style={{ color: "white" }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="listOfLinks" className="navbar-nav">
                        <Link to="/" className="navLinks">HOME</Link>
                        <Link to="/headphones" className="navLinks">HEADPHONES</Link>
                        <Link to="/speakers" className="navLinks">SPEAKERS</Link>
                        <Link to="/earphones" className="navLinks">EARPHONES</Link>
                    </div>
                </div>
            </div>
        </nav>



    )
}