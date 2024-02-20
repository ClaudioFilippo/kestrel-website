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
              <h1>CHI SIAMO</h1>
            </Col>
        </Row>
      </Container>
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
                <h3>Le persone del team:</h3>
            </Col>
          </Row>
        </Container>



        <PeopleCard></PeopleCard>

      </div>


  );
}

export default Azienda;