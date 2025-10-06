import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChartLine, faGears } from '@fortawesome/free-solid-svg-icons';

import './home.css';

function ServicesSection() {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faBrain} size="lg" className="me-2 icon-analytics" />,
      title: "Assistenza AI",
      text: "Aiutiamo le aziende a sfruttare la potenza dell’intelligenza artificiale per ottimizzare processi, ridurre i costi e aumentare la produttività.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} size="lg" className="me-2 icon-analytics" />,
      title: "Data Insights",
      text: "Sblocchiamo il potenziale dei dati aziendali, fornendo insight chiari e azionabili che guidano decisioni strategiche e crescita sostenibile.",
    },
    {
      icon: <FontAwesomeIcon icon={faGears} size="lg" className="me-2 icon-analytics" />,
      title: "Automazione dei flussi di lavoro",
      text: "Progettiamo soluzioni di automazione intelligente che semplificano i processi, riducono le attività ripetitive e liberano tempo per ciò che genera vero valore.",
    },
  ];

  return (
    <section className="my-5">
      <h2 className="font-link text-center mb-4"><strong>Servizi che offriamo</strong></h2>
      <Row className="justify-content-center">
        {services.map((s, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="card-style h-100 text-center p-3">
              <Card.Body>
                <Card.Title>{s.icon}<strong>{s.title}</strong></Card.Title>
                <Card.Text className="mt-3">{s.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default ServicesSection;
