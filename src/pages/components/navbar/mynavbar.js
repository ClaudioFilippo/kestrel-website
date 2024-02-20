import React from 'react';
import { NavLink } from "react-router-dom"

import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../../../images/logo.jpg"

import './mynavbar.css'

function MyNavbar() {
  return (
       
        <Navbar collapseOnSelect expand="lg" className="my-navbar new-font-navbar" data-bs-theme="dark" >
            <Container>
            <Navbar.Brand as={NavLink} to='/' className="d-flex align-items-center">
                <img src={logo} width="50rem" alt=""></img>
                <h4 className="display-6 ms-2">ESTREL INTELLIGENCE</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="justify-content-end flex-grow-1 pe-5 gap-3 size-navlink" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link as={NavLink} to='/azienda'><strong>Azienda</strong></Nav.Link>
                    <Nav.Link as={NavLink} to='/contatti'><strong>Contatti</strong></Nav.Link>
                </Nav>
            </Navbar.Collapse>

            </Container>
        </Navbar>

  );
}

export default MyNavbar;

