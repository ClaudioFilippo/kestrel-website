import React from 'react';
import { NavLink } from "react-router-dom"

import {Image, Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';

import HomePageWallpaper from "../../images/wallpaper-1.jpg"
import ImmagineCicloLavoro from "../../images/funzionamento-profiter-step-2048x1701.png"

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
              <Card.Title><strong>Analisi dello sport</strong></Card.Title>
              <Card.Text>
              Forniamo servizi completi di analisi sportiva che sfruttano la potenza dell'intelligenza artificiale per aiutare le organizzazioni sportive a ottimizzare le prestazioni, 
              migliorare il coinvolgimento dei fan e favorire la crescita dei ricavi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md={6}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Data Insights</strong></Card.Title>
              <Card.Text>
              Forniamo servizi di data insight che aiutano le organizzazioni a sbloccare il pieno potenziale dei loro dati, fornendo approfondimenti praticabili 
              che favoriscono la crescita e migliorano le prestazioni.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>

  );
}


function ComeLavoriamo() {

  return (

    <div>
      <Row className='align-items-center'>
        <Col md={6}>
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

        <Col md={6}>
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
                  <h1><strong> Potenziate la vostra attività sportiva</strong></h1>
                  <p className=" spacer-header"> Kestrel Intelligence è una startup che fornisce servizi di consulenza AI e analisi dei dati. Siamo specializzati nel settore dello sport, offrendo soluzioni all'avanguardia che trasformano la vostra attività. Lavoriamo instancabilmente per fornirvi soluzioni personalizzate che si adattino alle vostre esigenze specifiche. In Kestrel non siamo solo un fornitore di servizi, ma il vostro partner di successo.</p>
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