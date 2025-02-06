import React from 'react';
import { NavLink } from "react-router-dom"

import {Image, Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';

import HomePageWallpaper from "../../images/homepage.jpg"
import ImmagineCicloLavoro from "../../images/kestrel-funzionamento.png"

import './home.css'


import MyContactFooter from '../components/contact-footer/contact-footer'
import MyFooter from '../components/footer/myfooter';


function ActivitesCard() {

  return (

    <div>
      <Row className='mt-3'>
        <Col md={6}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Consulenza AI</strong></Card.Title>
              <Card.Text>
              Offriamo servizi di consulenza sull'intelligenza artificiale che aiutano le organizzazioni, indipendentemente dalle dimensioni o dal settore, 
              a sfruttare la potenza dell'intelligenza artificiale per migliorare le prestazioni, ridurre i costi e favorire la crescita.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md={{ span: 6, offset: 6 }}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Data Insights</strong></Card.Title>
              <Card.Text>
              Forniamo servizi di data insight che aiutano le organizzazioni a sbloccare il pieno potenziale dei loro dati, fornendo approfondimenti praticabili 
              che favoriscono la crescita, migliorano le prestazioni e ottimizzino i processi aziendali.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md={6}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Analisi del mercato e dei concorrenti</strong></Card.Title>
              <Card.Text>
              Forniamo servizi completi di analisi dati che sfruttano la potenza dell'intelligenza artificiale per comprendere il mercato e monitorare le attività dei concorrenti.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row className='mt-3'>
        <Col md={{ span: 6, offset: 6 }}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Monitoraggio e sicurezza informatica</strong></Card.Title>
              <Card.Text>
              Forniamo servizi per realizzare sistemi di monitoraggio che utilizzano l'analisi dei dati per prevedere guasti, ottimizzare la manutenzione degli impianti e per rilevare e prevenire minacce alla sicurezza informatica.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

    </div>

  );
}


function ComeLavoriamo() {

  return (

    <div>
      <Row className='align-items-center'>
        <Col md={7}>
          <Accordion>
            <Accordion.Item eventKey="0" className='mt-3'>
              <Accordion.Header>1. Studio ed analisi dei big data</Accordion.Header>
              <Accordion.Body>
                Con questa fase ci occupiamo di esplorare, analizzare e interpretare grandi volumi di dati per ottenere informazioni significative e supportare processi decisionali informate
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mt-3'>
              <Accordion.Header>2. Elaborazione di obiettivi su misura</Accordion.Header>
              <Accordion.Body>
                Da inserire
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='mt-3'>
              <Accordion.Header>3. Addestramento e creazione del modello</Accordion.Header>
              <Accordion.Body>
                Da inserire
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='mt-3'>
              <Accordion.Header>4. Installazione e monitoraggio del modello</Accordion.Header>
              <Accordion.Body>
                Da inserire
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Col>

        <Col md={{ span: 3, offset: 1 }}>
          <Image src={ImmagineCicloLavoro} fluid></Image>
        </Col>
      </Row>
      
    </div>

  );


}



function HomePage() {
  return (

      <div className='new-font'>

          <div className='background-home'>
            <Container>
              <Row className='align-items-center'>
                <Col className='mt-4 mb-5 text-center' md={6}>
                  <h1><strong> Potenziate la vostra attività</strong></h1>
                  <p className=" spacer-header"> Kestrel Intelligence è una realtà innovativa che offre consulenza specializzata in AI e analisi dei dati, proponendo soluzioni avanzate per ottimizzare e trasformare il vostro business. Ci impegniamo costantemente a fornire soluzioni su misura, perfettamente in linea con le vostre esigenze specifiche. In Kestrel non siamo solo un consulente, ma il partner strategico per il successo della vostra azienda.</p>
                  <Button as={NavLink} to='/contatti' variant="light" size="lg"><strong>Contattaci</strong></Button>
                </Col>
                <Col md={6}>
                  <Image className='spacer-header' src={HomePageWallpaper} fluid roundedCircle /> 
                </Col>
              </Row>
            </Container>
          </div>

        <Container>

          <Row className='mt-5'>
              <Col md={12}>
                <h2 className="font-link text-center"><strong>Servizi che offriamo</strong></h2>
              </Col>
          </Row>

          <ActivitesCard></ActivitesCard>

          <Row className='mt-5'>
              <Col md={12}>
                <h2 className="font-link text-center"><strong>Come lavoriamo</strong></h2>
              </Col>
          </Row>

          <ComeLavoriamo></ComeLavoriamo>

        </Container>


        <Row className='mt-5'></Row>

        <MyContactFooter></MyContactFooter>

        <MyFooter></MyFooter>

      </div>
   
  );
}

export default HomePage;