import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faDatabase, faCogs, faChartLine } from "@fortawesome/free-solid-svg-icons";
import ImmagineCicloLavoro from "../../images/kestrel-funzionamento.png";

import "./home.css";

function WorkflowSection() {
  const steps = [
    {
      icon: faComments,
      title: "1. Analisi delle esigenze e del contesto",
      text: "Ogni progetto nasce dall’ascolto. Analizziamo obiettivi e processi per capire dove dati e intelligenza artificiale possono generare vero valore.",
    },
    {
      icon: faDatabase,
      title: "2. Raccolta e modellazione dei dati",
      text: "Raccogliamo e strutturiamo i dati garantendo qualità, coerenza e sicurezza. Creiamo così la base per analisi, automazioni e modelli predittivi affidabili.",
    },
    {
      icon: faCogs,
      title: "3. Sviluppo e integrazione delle soluzioni",
      text: "Progettiamo soluzioni su misura — automazioni, dashboard e modelli di AI — integrate nei flussi aziendali per migliorare efficienza e ridurre la complessità.",
    },
    {
      icon: faChartLine,
      title: "4. Monitoraggio e miglioramento continuo",
      text: "Monitoriamo le performance e ottimizziamo costantemente. Le soluzioni evolvono insieme all’organizzazione, restando sempre allineate ai nuovi obiettivi.",
    },
  ];

  return (
    <section className="workflow-section my-5">
      <Container>
        <h2 className="text-center mb-4 font-link">
          <strong>Come lavoriamo</strong>
        </h2>
        <p className="text-center text-muted mb-5">
          Un approccio strutturato e collaborativo che unisce <strong>dati</strong>, <strong>intelligenza artificiale</strong> e <strong>automazione</strong> per guidare l’innovazione e generare risultati concreti.
        </p>

        <Row className="align-items-center justify-content-center">
          <Col md={8}>
            <div className="timeline">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="timeline-icon">
                    <FontAwesomeIcon icon={step.icon} size="lg" />
                  </div>
                  <div className="timeline-content">
                    <h5><strong>{step.title}</strong></h5>
                    <p>{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>

          <Col md={4} className="text-center mt-5 mt-md-0">
            <motion.img
              src={ImmagineCicloLavoro}
              alt="Ciclo di lavoro Kestrel Intelligence"
              className="img-fluid rounded-3 shadow-sm"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WorkflowSection;
