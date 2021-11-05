import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';

const Header = () => {
    return(
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/tickets">Tickets</Link>
                    <Link to="/logout">Logout</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;


