import React from 'react';
import { NavLink } from "react-router-dom"

import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../../../images/logo.jpg"

import './mynavbar.css'

function MyNavbar() {
  return (
       
        <Navbar collapseOnSelect expand="lg" className="my-navbar" bg='red' data-bs-theme="dark" >
            <Container>
            <Navbar.Brand as={NavLink} to='/' className="d-flex align-items-center">
                <img src={logo} width="45rem" alt=""></img>
                <h4 className="display-5 ms-2">ESTREL INTELLIGENCE</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="justify-content-end flex-grow-1 pe-2 gap-3" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link as={NavLink} to='/chi-siamo'>Chi Siamo</Nav.Link>
                    <Nav.Link as={NavLink} to='/contatti'>Contatti</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            </Container>
        </Navbar>

  );
}

export default MyNavbar;

