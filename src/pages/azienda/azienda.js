import React from 'react';
import { Helmet } from "react-helmet";
import { Container, Card, Row, Col} from "react-bootstrap";

import './azienda.css'

import MyFooter from '../components/footer/myfooter';


function AziendaWallpaper() {
  return(
    <div className='background-azienda'>
      <Container>
        <Row className='align-items-center justify-content-md-center'>
            <Col md='auto' className='text-center mt-5 mb-5'>
              <h1><strong>Benvenuti in KESTREL INTELLIGENCE</strong></h1>
              <h3 className='mt-4'>Guidando l'Innovazione attraverso i Dati e l'Intelligenza Artificiale</h3>
              <p className='mt-4 mb-4'>Siamo entusiasti di darvi il benvenuto nel mondo di Kestrel Intelligence, una realtà che guida l'innovazione attraverso l'analisi dei dati e l'intelligenza artificiale.
                 Presso Kestrel Intelligence, ci impegniamo a offrire soluzioni all'avanguardia che trasformano i dati in insight preziosi, permettendo alle aziende di prendere decisioni informate e di anticipare le sfide del futuro.
              </p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

function CardRagioni() {

  return (

    <div>

      <Row className='mt-3'>
        <Col md={6}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Competenza tecnica</strong></Card.Title>
              <Card.Text>
              Il nostro team è composto da professionisti altamente qualificati con esperienza nel campo dell'analisi dei dati e dell'intelligenza artificiale. 
              Siamo appassionati di ciò che facciamo e ci impegniamo costantemente a rimanere aggiornati sulle ultime tecnologie e tendenze del settore
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md={{ span: 6, offset: 6 }}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Approccio orientato ai risultati</strong></Card.Title>
              <Card.Text>
              Il nostro obiettivo principale è fornire valore tangibile ai nostri clienti. 
              Lavoriamo fianco a fianco con loro per capire le loro esigenze specifiche e sviluppare soluzioni su misura che producano risultati misurabili e significativi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>    

      <Row className='mt-3'>
        <Col md={6}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Innovazione continua</strong></Card.Title>
              <Card.Text>
              Siamo guidati dalla passione per l'innovazione e la ricerca di soluzioni creative ai problemi complessi. 
              Non ci accontentiamo mai dello status quo e siamo costantemente alla ricerca di nuovi modi per migliorare e superare le aspettative dei nostri clienti.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md={{ span: 6, offset: 6 }}>
          <Card className='card-style'>
            <Card.Body>
              <Card.Title><strong>Impegno verso l'eccellenza</strong></Card.Title>
              <Card.Text>
              La qualità è al centro di tutto ciò che facciamo. Ci impegniamo per l'eccellenza in ogni fase del nostro lavoro, 
              dall'analisi iniziale alla consegna finale del prodotto, garantendo che ogni soluzione soddisfi gli standard più elevati.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>   

    </div>
  );

}


function Azienda() {
  return (
    
      <div className='new-font'>

        <Helmet>
          <title>Consulenza AI e analisi dei dati per il tuo successo aziendale</title>
          <meta
            name="description"
            content="Benvenuti in Kestrel Intelligence, esperti in consulenza ai e analisi dei dati per ottimizzazione aziendale e soluzioni personalizzate in Piemonte e oltre."
          />
        </Helmet>

        <AziendaWallpaper></AziendaWallpaper>

        <Container>

         <Row className='mt-5 mb-5'>
            <Col className='text-center'>
                <h2><strong>Perché scegliere noi?</strong></h2>
            </Col>
          </Row>

          <CardRagioni></CardRagioni>

          <Row className='mt-5 mb-5'></Row>

        </Container>

        <MyFooter></MyFooter>

      </div>


  );
}

export default Azienda;