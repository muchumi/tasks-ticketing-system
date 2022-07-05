import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../../../../assets/images/logo.png';

const Header = () => {

    const navigate = useNavigate();

    const logOut = () => {
        navigate.push("/");
    };

    return(
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="">
                        <Nav.Link onClick={logOut}>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;


