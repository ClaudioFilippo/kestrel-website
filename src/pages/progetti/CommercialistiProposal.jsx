import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";

import slide1 from "../../documents/progetti/commercialisti_2025/1.jpg";
import slide2 from "../../documents/progetti/commercialisti_2025/2.jpg";
import slide3 from "../../documents/progetti/commercialisti_2025/3.jpg";
import slide4 from "../../documents/progetti/commercialisti_2025/4.jpg";
import slide5 from "../../documents/progetti/commercialisti_2025/5.jpg";
import slide6 from "../../documents/progetti/commercialisti_2025/6.jpg";
import slide7 from "../../documents/progetti/commercialisti_2025/7.jpg";
import slide8 from "../../documents/progetti/commercialisti_2025/8.jpg";
import slide9 from "../../documents/progetti/commercialisti_2025/9.jpg";
import slide10 from "../../documents/progetti/commercialisti_2025/10.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10];

const CommercialistiProposal = () => {
  return (
    <Container
      style={{ maxWidth: "900px", textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
    >
      {/* Card con testo introduttivo */}
      <Card
        className="mb-5 shadow-sm"
        style={{ padding: "2rem", background: "rgba(255,255,255,0.95)", borderRadius: "15px" }}
      >
        <h2 className="mb-4">#1 – Collaborazione per Studi Professionali</h2>
        <p
          className="mb-0"
          style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}
        >
          Questa proposta mira a semplificare e rendere più efficiente la gestione degli studi
          professionali, migliorando la qualità delle operazioni quotidiane, riducendo errori e tempi
          di lavoro, e offrendo ai vostri clienti servizi più rapidi e affidabili. L’obiettivo è creare
          valore concreto, sostenibile e immediatamente misurabile per il vostro business.
        </p>
      </Card>

      {/* Carousel con frecce personalizzate e visibili */}
      <Carousel fade interval={5000} className="custom-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 rounded"
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{
                height: "auto",
                maxHeight: "650px",
                objectFit: "contain",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CommercialistiProposal;
