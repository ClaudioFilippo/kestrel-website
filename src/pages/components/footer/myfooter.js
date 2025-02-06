import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import logo from "../../../images/logo.jpeg";

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
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@kestrelintelligence.com </p>
                    </Col>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Seguici sui Social</h4>
                        <div className='mt-2 mb-2 widget-separator'/>
                        <a href="/"><FontAwesomeIcon icon={faLinkedin} size="3x" className='documents-link'/></a>
                    </Col>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Azienda</h4>
                        <div className='mt-2 mb-2 widget-separator'/>
                        <h6>Sede Operativa</h6>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Via Paperino, 8, Cuneo, 12100, Italy</p>
                        <h6>Sede Legale</h6>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Piazza Pippo, 6, Cuneo, 12100, Italy</p>
                    </Col>
                </Row>

                <Row className='mt-2'></Row>

                
                <Row>
                    <Col className='text-center'>
                        <p>Copyright - P.IVA: 0123456789</p>
                    </Col> 
                </Row>

                <Row>
                    <Col className='text-center'>
                        <p><a href="/" className='documents-link'>PRIVACY POLICY</a> - <a href="/" className='documents-link'>COOKIE POLICY</a></p>
                    </Col> 
                </Row>
                
                <Row className='mt-2'></Row>

            </Container>
        </div>
    )

}

export default MyFooter;


