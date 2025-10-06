import React from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import HomePageWallpaper from "../../images/homepage.jpg";
import ServicesSection from "./ServicesSection";
import WorkflowSection from "./WorkflowSection";
import MyContactFooter from '../components/contact-footer/contact-footer';
import MyFooter from '../components/footer/myfooter';

import './home.css';


function HomePage() {
  return (
    <div className="new-font">
      <Helmet>
        <title>Kestrel Intelligence | Consulenza AI, Dati e Automazione</title>
        <meta
          name="description"
          content="Kestrel Intelligence offre consulenza specializzata in intelligenza artificiale, analisi dei dati e automazione. Trasformiamo i dati in valore e vantaggio competitivo."
        />
        <meta
          name="keywords"
          content="AI, intelligenza artificiale, analisi dati, automazione, consulenza, Kestrel Intelligence"
        />
      </Helmet>

      <section className="background-section text-light py-5">
        <Container>
          <Row className="align-items-center">
            {/* Testo */}
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold mb-5">
                Diamo valore ai <span className="highlighted-white">tuoi dati</span> per costruire innovazione.
              </h1>
              <p className="mb-4" style={{ lineHeight: "1.8" }}>
                <strong>Kestrel Intelligence</strong> è una realtà specializzata in 
                <strong> intelligenza artificiale</strong>, <strong>analisi dei dati</strong> e 
                <strong> automazione dei processi</strong>.               
              </p>
              <p className="mb-4" style={{ lineHeight: "1.8" }}>
                Aiutiamo imprese, studi professionali e organizzazioni a ottimizzare le proprie operazioni, 
                prendere decisioni più consapevoli e trasformare i dati in valore concreto.
              </p>
              <p className="mb-4" style={{ lineHeight: "1.8" }}>
                Non siamo solo consulenti tecnologici, ma <strong>partner strategici</strong> nel percorso di 
                <strong> innovazione</strong> e <strong>crescita</strong>.
              </p>
              <Button as={NavLink} to="/contatti" size="lg" variant="light" className="shimmer-button position-relative overflow-hidden mt-3">
                <span className="shimmer-effect"></span>
                <span className="button-text"><strong>Contattaci</strong></span>
              </Button>
            </Col>

            {/* Immagine */}
            <Col md={6} className="text-center">
              <Image
                src={HomePageWallpaper}
                alt="Kestrel Intelligence AI"
                fluid
                roundedCircle
                loading="lazy"
                className="shadow-lg"
                style={{ maxWidth: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>


      <Container>
        <ServicesSection />
        <WorkflowSection />
      </Container>

      <MyContactFooter />
      <MyFooter />
    </div>
  );
}

export default HomePage;
