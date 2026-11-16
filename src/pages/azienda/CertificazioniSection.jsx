import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faMedal, faMapMarkerAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import AWSLogoSAA from "../../images/aws-certified-solutions-architect-associate.png";
import AWSLogoMLA from "../../images/aws-certified-machine-learning-engineer-associate.png";

function CertificazioniSection() {
  return (
    <Row className="mt-5 justify-content-center">
      <Col md={10} lg={8}>
        <Card className="card-style text-center py-5 px-4 border-0 shadow-lg">
          <Card.Body>
            <div className="mb-3">
              <FontAwesomeIcon icon={faCertificate} size="2x" className="icon-analytics mb-2" />
              <Card.Title className="fw-bold fs-3">Affidabilità e riconoscimenti</Card.Title>
            </div>

            <Card.Text className="text-muted mb-4">
              In <strong>Kestrel Intelligence</strong> crediamo che la competenza si dimostri con i fatti.  
            </Card.Text>

            <Card.Text className="text-muted mb-4">
              <FontAwesomeIcon icon={faMedal} className="icon-analytics me-2" />
              Siamo <strong>professionisti certificati AWS Solutions Architect</strong> e <strong>AWS Machine Learning Engineer</strong>,
              a garanzia di qualità tecnica e capacità di progettare architetture cloud scalabili e sicure e soluzioni di
              machine learning pronte per la produzione.
            </Card.Text>

            <Card.Text className="text-muted mb-4">
              <FontAwesomeIcon icon={faUserTie} className="icon-analytics me-2" />
              All’interno del nostro team operano anche <strong>ingegneri iscritti all’Ordine professionale</strong>, 
              a testimonianza di serietà, metodo e rispetto degli standard tecnici ed etici del settore.
            </Card.Text>

            <Card.Text className="text-muted mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-analytics me-2" />
              Operiamo principalmente in <strong>Piemonte</strong>, tra <strong>Cuneo</strong> e <strong>Torino</strong>, 
              collaborando con realtà del territorio che condividono la nostra visione di innovazione e qualità.  
              Crediamo nel valore della <strong>prossimità e del dialogo diretto</strong>, fondamentali per costruire soluzioni su misura.
            </Card.Text>

            <div className="aws-logo-container mt-4 d-flex flex-wrap justify-content-center align-items-center gap-4">
              <Image
                src={AWSLogoSAA}
                alt="AWS Certified Solutions Architect – Associate"
                className="aws-logo"
                loading="lazy"
              />
              <Image
                src={AWSLogoMLA}
                alt="AWS Certified Machine Learning Engineer – Associate"
                className="aws-logo"
                loading="lazy"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CertificazioniSection;
