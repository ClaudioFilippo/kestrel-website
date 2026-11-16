import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

import AziendaWallpaper from "./AziendaWallpaper";
import CardRagioni from "./CardRagioni";
import CertificazioniSection from "./CertificazioniSection";
import MyContactFooter from "../components/contact-footer/contact-footer";
import MyFooter from "../components/footer/myfooter";

import "./azienda.css";

function Azienda() {
  return (
    <div className="new-font">
      <Helmet>
        <title>Kestrel Intelligence | Azienda di consulenza AI, dati e automazione</title>
        <meta
          name="description"
          content="Kestrel Intelligence: professionisti certificati AWS e iscritti all’Ordine degli Ingegneri, esperti in AI, analisi dati e automazione. Con sede in Piemonte tra Cuneo e Torino."
        />
        <meta
          name="keywords"
          content="Kestrel Intelligence, consulenza AI, intelligenza artificiale, analisi dati, automazione, AWS Certified, Piemonte, Cuneo, Torino"
        />
      </Helmet>

      <main>
        <AziendaWallpaper />

        {/* SEZIONE RAGIONI */}
        <section id="valori" className="spacer-header fade-in">
          <Container>
            <Row className="text-center mb-4">
              <Col>
                <h2 className="perche-noi-title">
                  <strong>Perché scegliere noi?</strong>
                </h2>
                <p className="section-subtitle">
                  Esperienza, metodo e innovazione al servizio della crescita digitale.
                </p>
              </Col>
            </Row>

            <CardRagioni />
          </Container>
        </section>

        {/* SEZIONE CERTIFICAZIONI */}
        <section id="certificazioni" className="section-spacing fade-in">
          <Container>
            <CertificazioniSection />
          </Container>
        </section>

        <MyContactFooter />
      </main>

      <MyFooter />
    </div>
  );
}

export default Azienda;
