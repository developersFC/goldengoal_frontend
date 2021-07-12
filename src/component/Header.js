import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
import './Header.css';
import { Col, Nav, NavDropdown, Image } from 'react-bootstrap';
// bg="dark" variant="dark"


export class Header extends Component {
    render() {
        return (
          <div>
            {/* <nav className="navHeader">
                    <a href="/home/">Home</a>
                    <a href="/favTeam/">Fav Team</a>
                    <a  href="/liveScure/">Live Scure</a>
                    <a href="/compare/">Compare</a>
                    <a href="/login/">LogIn</a>
                </nav> */}

            <Navbar className="navHeader">
                
              <NavDropdown.Item href="#home/3.1">
                <img src="https://i.ibb.co/qDyNRv2/logo.png" alt="home" />
              </NavDropdown.Item>
              <NavDropdown.Item href="#favTeam/3.2">Fav Team</NavDropdown.Item>
              <NavDropdown.Item href="#liveScure/3.3">
                Live Scure
              </NavDropdown.Item>
              <NavDropdown.Item href="#compare/3.4">Compare</NavDropdown.Item>
              <NavDropdown.Item href="#login/3.5" className='login'>LogIn</NavDropdown.Item>
            </Navbar>
            
          </div>
        );
    }
}

export default Header
