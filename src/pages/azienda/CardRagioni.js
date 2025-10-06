import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function CardRagioni() {
  const items = [
    {
      title: "Competenza tecnica",
      text: "Il nostro team è composto da professionisti altamente qualificati con esperienza in analisi dati e intelligenza artificiale. Ci aggiorniamo costantemente sulle ultime tecnologie e tendenze del settore."
    },
    {
      title: "Approccio orientato ai risultati",
      text: "Il nostro obiettivo è fornire valore tangibile. Lavoriamo a stretto contatto con i clienti per sviluppare soluzioni su misura che producano risultati concreti e misurabili."
    },
    {
      title: "Innovazione continua",
      text: "Guidati dalla passione per la ricerca e la sperimentazione, cerchiamo costantemente nuovi modi per risolvere problemi complessi e superare le aspettative."
    },
    {
      title: "Impegno verso l'eccellenza",
      text: "La qualità è al centro di tutto ciò che facciamo. Ogni progetto rispetta standard elevati, dalla progettazione alla consegna finale."
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <Row key={index} className="mt-3">
          <Col md={index % 2 === 0 ? 6 : { span: 6, offset: 6 }}>
            <Card className="card-style">
              <Card.Body>
                <Card.Title><strong>{item.title}</strong></Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default CardRagioni;
