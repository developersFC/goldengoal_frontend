import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
import './Header.css';
import {Container, Nav, NavDropdown} from 'react-bootstrap';
// bg="dark" variant="dark"
export class Header extends Component {
    render() {
        return (
            <div>

                <nav className="navHeader">
                    <a href="/home/">Home</a>
                    <a href="/favTeam/">Fav Team</a>
                    <a  href="/liveScure/">Live Scure</a>
                    <a href="/compare/">Compare</a>
                    <a href="/login/">LogIn</a>
                </nav>
            </div>
        )
    }
}

export default Header
