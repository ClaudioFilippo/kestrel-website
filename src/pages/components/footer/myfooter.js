import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './myfooter.css'

function MyFooter() {

    return(

        <div className='text-dimension footer-css'>
            <Container>  
                <Row className='mt-4'>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Kestrel Intelligence Srl</h4>
                        <p>P.IVA: 0123456789</p>
                        <br/>
                        <h6 strong>Sede Legale</h6>
                        <FontAwesomeIcon icon={faLocationDot} /> Piazza Seminario, 6, Cuneo, 12100, Italy
                    </Col>
                    <Col md={4} className='mt-3 mb-4'>
                        <h4>Contatti</h4>
                        <br/>
                        <p>Email</p>
                        <FontAwesomeIcon icon={faEnvelope} /> info@kestrelintelligence.com
                    </Col>
                    <Col md={3} className='mt-3 mb-4'>
                        <h4>Social</h4>
                        <a href="/"><FontAwesomeIcon icon={faLinkedin} size="2x" className='documents-link'/></a>
                    </Col>
                </Row>

                
                <Row>
                    <Col className='text-center'>
                        <p><a href="/" className='documents-link'>PRIVACY POLICY</a> - <a href="/" className='documents-link'>COOKIE POLICY</a></p>
                    </Col> 
                </Row>
                

            </Container>
        </div>


    )

}

export default MyFooter;


