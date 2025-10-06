import React from 'react';
import { NavLink } from "react-router-dom"

import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import logo from "../../../images/logo.png";

import './myfooter.css';

function MyFooter() {

    return(
        <div className='text-dimension footer-css'>
            <Container>

                <Row>
                    <Col className='mt-5'>
                        <h4><img src={logo} width="40rem" alt=""></img> Kestrel Intelligence</h4>
                        <div className='mt-3 widget-separator'></div>
                    </Col>
                </Row>
                
                
                <Row className='mt-4'>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Contattaci</h4>
                        <div className='mt-2 mb-2 widget-separator'/>
                        <h6>Email</h6>
                        <p><FontAwesomeIcon icon={faEnvelope} /> contatti@kestrelintelligence.it </p>
                    </Col>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Seguici sui Social</h4>
                        <div className='mt-2 mb-2 widget-separator'/>
                        <Row>
                            <a href="https://www.linkedin.com/company/kestrel-intelligence-it" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" className='documents-link'/></a>
                        </Row>
                        <Row>
                            <a href="https://www.instagram.com/kestrelintelligence/#" target="_blank"><FontAwesomeIcon icon={faInstagram} size="3x" className='documents-link'/></a>
                        </Row>
                    </Col>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Azienda</h4>
                        <div className='mt-2 mb-2 widget-separator'/>
                        <h6>Sede Legale</h6>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Corso Giovanni Giolitti, 17 - Cuneo (CN), 12100, Italia</p>
                    </Col>
                </Row>

                <Row className='mt-2'></Row>

                
                <Row>
                    <Col className='text-center'>
                        <p>Copyright - Kestrel Intelligence di Vitiello Claudio Filippo - P.IVA: 04154210043</p>
                    </Col> 
                </Row>

                <Row>
                    <Col className='text-center'>
                        <p>
                            <NavLink to='/privacy-policy' className='documents-link'>PRIVACY POLICY</NavLink> 
                            <a> - </a>    
                            <NavLink to="/cookie-policy" className='documents-link'>COOKIE POLICY</NavLink>
                        </p>   
                    </Col> 
                </Row>
                
                <Row className='mt-2'></Row>

            </Container>
        </div>
    )

}

export default MyFooter;


