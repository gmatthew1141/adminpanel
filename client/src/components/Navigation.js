import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">Admin Panel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        Customers
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/contests">
                        Contests
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
