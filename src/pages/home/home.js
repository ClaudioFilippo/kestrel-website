import React from 'react';

import {Image, Container, Row, Col, Card } from 'react-bootstrap';

import HomePageWallpaper from "../../images/homepage_wallpaper.jpeg"

import MyFooter from '../components/footer/myfooter';

function FluidExample() {
  return (
    <Row className="justify-content-md-center">
      <Col md={6} xs={12}>
        <Image src={HomePageWallpaper} fluid roundedCircle />
      </Col>      
    </Row>
  );
}

function ActivitesCard() {

  return (

    <Row xs={1} md={2} className="g-4 mt-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}



function HomePage() {
  return (

      <div >
        <Container>
            <Row className='mt-4'>
              <Col md={12}>
                <h2 className="font-link text-center"> Potenzia la vostra attività sportiva</h2>
                <p className="text-center mt-4 mb-4"> Kestrel Intelligence è una startup che fornisce servizi di consulenza AI e analisi dei dati. Siamo specializzati nel settore dello sport, offrendo soluzioni all'avanguardia che trasformano la vostra attività. Lavoriamo instancabilmente per fornirvi soluzioni personalizzate che si adattino alle vostre esigenze specifiche. In Kestrel non siamo solo un fornitore di servizi, ma il vostro partner di successo.</p>
              </Col>
            </Row>

          <FluidExample/>

          <Row className='mt-5'>
              <Col md={12}>
                <h2 className="font-link text-center"> Servizi che offriamo</h2>
              </Col>
          </Row>

          <ActivitesCard></ActivitesCard>

        </Container>

        <MyFooter></MyFooter>

      </div>
   
  );
}

export default HomePage;