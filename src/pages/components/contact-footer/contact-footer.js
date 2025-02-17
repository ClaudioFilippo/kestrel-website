import React from 'react';
import { NavLink } from "react-router-dom"

import { Container, Row, Col, Button } from "react-bootstrap";


import './contact-footer.css'

function MyContactFooter() {

    return(

        <div className='contact-footer-css'>

            <Row className='mt-5'></Row>
            <Row className='mt-5'></Row>

            <Container>
                <Row>
                    <Col className='text-center'>
                        <h4 className='mb-3'>Hai un progetto da realizzare?</h4>
                        <Button as={NavLink} to='/contatti' size="lg" variant="light" className="shimmer-button position-relative overflow-hidden">
                            <span className="shimmer-effect"></span>
                            <span className="button-text"><strong>Contattaci</strong></span>
                        </Button>
                    </Col>

                </Row>
            </Container>

            <Row className='mt-5'></Row>
        </div>

    );

}

export default MyContactFooter;