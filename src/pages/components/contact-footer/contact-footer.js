import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import './contact-footer.css';

function MyContactFooter() {
  return (
    <div className='contact-footer-css'>

      <Row className='mt-5'></Row>
      <Row className='mt-5'></Row>

      <Container>
        <section className="contact-footer-section text-center my-5 py-5 rounded-4 shadow-sm">
          <Col className='text-center'>
            <h3 className="fw-bold mb-3">Automatizza, analizza, migliora.</h3>
            <p className="contact-footer-text mb-4">
              Scopri come <strong>Kestrel Intelligence</strong> può aiutarti a sfruttare il potenziale di 
              <strong> AI</strong>, <strong>analisi dei dati</strong> e <strong>automazione</strong> per far crescere la tua organizzazione.
            </p>
            <Button 
              as={NavLink} 
              to='/contatti' 
              size="lg" 
              className="shimmer-button position-relative overflow-hidden"
            >
              <span className="shimmer-effect"></span>
              <span className="button-text"><strong>Parla con noi</strong></span>
            </Button>
          </Col>
        </section>
      </Container>

      <Row className='mt-5'></Row>
    </div>
  );
}

export default MyContactFooter;
