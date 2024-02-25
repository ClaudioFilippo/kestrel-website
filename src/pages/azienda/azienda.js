import React from 'react';

import { Container, Card, Row, Col} from "react-bootstrap";

import ManuelloImg from "../../images/manuello.jpg"
import VitielloImg from "../../images/vitiello.jpg"

import './azienda.css'


function AziendaWallpaper() {
  return(
    <div className='background-azienda'>
      <Container>
        <Row className='align-items-center justify-content-md-center'>
            <Col md='auto' className='text-center mt-5 mb-5'>
              <h1><strong>Benvenuti in KESTREL INTELLINGENCE</strong></h1>
              <h3 className='mt-4'>Guidando l'Innovazione attraverso i Dati e l'Intelligenza Artificiale</h3>
              <p className='mt-4 mb-4'>Siamo entusiasti di darvi il benvenuto nel mondo di Kestrel Intelligence, una nuova e dinamica realtà dedicata a guidare l'innovazione attraverso l'analisi dei dati e l'intelligenza artificiale.
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
              Non ci accontentiamo mai del status quo e siamo costantemente alla ricerca di nuovi modi per migliorare e superare le aspettative dei nostri clienti.
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


function PeopleCard() {
  return (
    <div>
      <Container>

        <Row className='justify-content-md-center align-items-center'>

          <Col md='auto' className='text-center'>

            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={ManuelloImg} />
              <Card.Body>
                <Card.Title><strong>Valter Manuello</strong></Card.Title>
                <Card.Text>
                  Co-founder
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md='auto' className='text-center'>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={VitielloImg} />
              <Card.Body>
                <Card.Title><strong>Vitiello Claudio Filippo</strong></Card.Title>
                <Card.Text>
                  Co-founder
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>

        </Row>

      </Container>


    </div>
  );
}




function Azienda() {
  return (
    
      <div className='new-font'>

        <AziendaWallpaper></AziendaWallpaper>

        <Container>

        <Row className='mt-5 mb-5'>
            <Col className='text-center'>
                <h2><strong>Perché scegliere noi?</strong></h2>
            </Col>
          </Row>

          <CardRagioni></CardRagioni>

          <Row className='mt-5 mb-5'>
            <Col className='text-center'>
                <h3>I vertici dell'azienda:</h3>
            </Col>
          </Row>

        </Container>

        <PeopleCard></PeopleCard>

      </div>


  );
}

export default Azienda;