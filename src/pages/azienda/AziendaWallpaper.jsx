import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AziendaWallpaper() {
  return (
<div className="background-section text-center py-5">
  <Container>
    <Row className="align-items-center justify-content-md-center">
      <Col md="auto" className="mb-5">
        <h1 className="fw-bold mb-4">
          Benvenuti in <span className="highlighted-white">KESTREL INTELLIGENCE</span>
        </h1>
        <h3 className="mt-3 mb-4 text-light-subtle">
          Diamo valore ai dati, guidiamo l’innovazione.
        </h3>
        <p className="mx-auto mb-3" style={{ maxWidth: "1000px" }}>
          In <strong>Kestrel Intelligence</strong> crediamo che i dati siano la chiave per un futuro più intelligente e competitivo.
          Offriamo consulenza specializzata in <strong>intelligenza artificiale</strong>, <strong>analisi dei dati</strong> e <strong>automazione dei processi</strong>, aiutando imprese e studi professionali a ottimizzare le proprie operazioni
          e trasformare i dati in valore concreto.
        </p>
        <p className="mx-auto mb-3" style={{ maxWidth: "1000px" }}>
          Non ci limitiamo a fornire soluzioni tecnologiche: diventiamo <strong>partner strategici</strong> nel percorso di <strong>innovazione</strong>, <strong>crescita</strong> e <strong>digitalizzazione</strong> delle aziende che scelgono di lavorare con noi.
        </p>
        <p className="mx-auto" style={{ maxWidth: "1000px" }}>
          La nostra missione è <strong>rendere l’intelligenza artificiale accessibile, affidabile e utile</strong> per chi vuole fare la differenza.
        </p>
      </Col>
    </Row>
  </Container>
</div>

  );
}

export default AziendaWallpaper;
