import React from 'react';
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet";
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
              <Card.Title><strong>Assistenza AI</strong></Card.Title>
              <Card.Text>
              Offriamo servizi di assistenza sull'intelligenza artificiale che aiutano le organizzazioni, indipendentemente dalle dimensioni o dal settore, 
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

    </div>

  );
}


function ComeLavoriamo() {

  return (

    <div>
      <Row className='align-items-center justify-content-md-center'>
        <Col md={7}>
          <Accordion>
            <Accordion.Item eventKey="0" className='mt-3'>
              <Accordion.Header>1. Raccolta e analisi preliminare dei dati</Accordion.Header>
              <Accordion.Body>
                Per prendere decisioni strategiche basate sui dati, è fondamentale partire dalle giuste fonti. Analizziamo e selezioniamo 
                con cura i dati più rilevanti, attingendo da database aziendali, ricerche di mercato e insight web, per creare una base solida su cui costruire il successo. 
                Una volta raccolti, i dati vengono organizzati in modo strutturato, garantendo precisione, coerenza e affidabilità.
                Nessun dettaglio viene lasciato al caso: ogni informazione viene validata per assicurare un'analisi chiara e priva di errori.
                Infine, attraverso un’analisi esplorativa approfondita, trasformiamo i numeri in conoscenza. Identifichiamo trend, 
                pattern nascosti e possibili anomalie, offrendo una visione chiara e dettagliata che permette di anticipare opportunità e affrontare eventuali criticità con sicurezza.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='mt-3'>
              <Accordion.Header>2. Definizione degli obiettivi e pianificazione dell'analisi</Accordion.Header>
              <Accordion.Body>
                Per trasformare i dati in risultati concreti, è essenziale definire obiettivi chiari e misurabili. Che si tratti di comprendere meglio il comportamento degli utenti, 
                ottimizzare le strategie di marketing o migliorare l’efficienza operativa, ogni azione deve essere guidata da una visione strategica e orientata al successo.  
                Poniamo le domande giuste per ottenere risposte significative: quali sono le tendenze emergenti? Quali strategie stanno funzionando? Dove possiamo migliorare? Definiamo metriche 
                di performance (KPI) precise, che ci permettono di monitorare ogni progresso con dati affidabili.  
                Infine, selezioniamo gli strumenti e le metodologie di analisi più efficaci, garantendo un approccio su misura che consenta di estrarre il massimo valore dai dati e trasformarli 
                in decisioni vincenti.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='mt-3'>
              <Accordion.Header>3. Elaborazione e interpretazione dei dati</Accordion.Header>
              <Accordion.Body>
              I dati grezzi da soli non bastano: per diventare una risorsa strategica, devono essere raffinati e ottimizzati. Attraverso un’attenta pulizia e trasformazione, 
              eliminiamo le incongruenze e strutturiamo le informazioni per garantire un'analisi precisa e affidabile.
              Utilizziamo le migliori tecniche di analisi statistica e data mining per far emergere valore dai numeri. Ogni dato viene esplorato con metodo, alla ricerca di pattern,
              correlazioni e insight nascosti che possono fare la differenza.
              Ma il vero potere dei dati sta nella loro interpretazione: traduciamo i risultati in strategie concrete, collegandoli agli obiettivi aziendali per guidare decisioni 
              informate e trasformare le informazioni in vantaggio competitivo.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='mt-3'>
              <Accordion.Header>4. Implementazione, visualizzazione e monitoraggio dei risultati</Accordion.Header>
              <Accordion.Body>
              I dati raccontano storie straordinarie, ma per essere davvero efficaci devono essere comunicati nel modo giusto. Grazie a dashboard interattive, report dettagliati e 
              infografiche accattivanti, trasformiamo numeri e statistiche in insight chiari e immediatamente fruibili.  
              Non ci fermiamo all’analisi: traduciamo i risultati in azioni concrete, integrandoli nel sito web e nelle strategie aziendali. Monitoriamo costantemente le performance, assicurandoci 
              che ogni decisione sia supportata da dati aggiornati e sempre rilevanti.  
              Il successo è un percorso in continua evoluzione. Per questo valutiamo periodicamente l’efficacia delle scelte fatte, adattando strategie e ottimizzando le prestazioni in base ai feedback, 
              per garantire risultati sempre più performanti.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Col>

        <Col xs={{ span: 8, offset: 2}} sm={{ span: 8, offset: 2}} md={{ span: 3, offset: 1 }} className='mt-5'>
          <Image src={ImmagineCicloLavoro} fluid></Image>
        </Col>
      </Row>
      
    </div>

  );


}



function HomePage() {
  return (

      <div className='new-font'>

        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Kestrel Intelligence offre soluzioni avanzate di intelligenza artificiale e analisi dei dati per ottimizzare il tuo business. Scopri i nostri servizi su misura."
          />
        </Helmet>

        <div className='background-home'>
          <Container>
            <Row className='align-items-center'>
              <Col className='mt-4 mb-5 text-center' md={6}>
                <h1><strong> Potenziate la vostra attività</strong></h1>
                <p className=" spacer-header"> Kestrel Intelligence è una realtà innovativa che offre consulenza specializzata in AI e analisi dei dati, proponendo soluzioni avanzate per ottimizzare e trasformare il vostro business. 
                                                Ci impegniamo costantemente a fornire soluzioni su misura, perfettamente in linea con le vostre esigenze specifiche. 
                                                In Kestrel non siamo solo un consulente, ma il partner strategico per il successo della vostra azienda.</p>
                                  
                <Button as={NavLink} to='/contatti' size="lg" variant="light" className="shimmer-button position-relative overflow-hidden">
                  <span className="shimmer-effect"></span>
                  <span className="button-text"><strong>Contattaci</strong></span>
                </Button>

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