import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ProgettiWallpaper() {
  return (
    <div className="background-section text-center py-5">
      <Container>
        <Row className="align-items-center justify-content-md-center">
          <Col md="auto" className="mb-5">
            <h1 className="fw-bold mb-4">
              Progetti e Proposte di <span className="highlighted-white">Collaborazione</span>
            </h1>
            <h3 className="mt-3 mb-4 text-light-subtle">
              Innovazione, dati e automazione al servizio delle aziende
            </h3>
            <p className="mx-auto mb-3" style={{ maxWidth: "800px" }}>
              In <strong>Kestrel Intelligence</strong> raccogliamo proposte di collaborazione
              in diversi settori, combinando <strong>l'intelligenza artificiale</strong>, 
              <strong> l'analisi dati</strong> e <strong>l'automazione dei processi</strong> per creare valore reale.
            </p>
            <p className="mx-auto" style={{ maxWidth: "800px", fontStyle: "italic" }}>
              Scorri le proposte qui sotto per scoprire i dettagli di ciascun progetto e come possiamo collaborare.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProgettiWallpaper;
