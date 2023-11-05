import React from "react";
import { navData } from '../lib/navData';
import "./navbar_module.css"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


function BasicNavbar() {
    return (
        <div className="navBar">
            <button className="menuBtn">
                K-FI
            </button>
            {navData.map(item => {
                return <NavLink key={item.id} className="sideitem" to={item.link}>
                    {item.icon}
                    <span className="linkText">{item.text}</span>
                </NavLink>
            })}
        </div>
        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="/">K-FI</Navbar.Brand>
        //         <Nav className="me-auto">
        //             <Nav.Link href="/">Landing</Nav.Link>
        //             <Nav.Link href="/compare">Compare</Nav.Link>
        //             <Nav.Link href="/time">Time</Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>
    )
}

export default BasicNavbar;