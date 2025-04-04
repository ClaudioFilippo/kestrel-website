import React, { useRef, useState } from 'react';

import { Container, Form, Button, Toast, Row, Stack, Modal} from "react-bootstrap";
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownLong} from '@fortawesome/free-solid-svg-icons';

import MyFooter from '../components/footer/myfooter';

import './contatti.css';


function Contatti() {

  const form = useRef();

  const [showModal,setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const [formValues, setFormValues] = useState({
    mittente: "",
    azienda: "",
    email: "",
    messaggio: "",
    checkbox: false
  });

  const [records, setRecords] = useState([]);

  const sendEmail = (e) => {

      const serviceId = "service_3ukkxjr";
      const templateId = "template_ss6myg9";
      const publicKey = "RI4JxwUcoDQK46rD_"

      e.preventDefault();

      try {
        emailjs.init(publicKey);
        emailjs.sendForm(serviceId, templateId, form.current).then(
          (result) => {
            console.log('SUCCESS...', result.text);
            setShowModal(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        console.log('inviata mail')

        setRecords([...records, formValues]);

        setFormValues({
          mittente: "",
          azienda: "",
          email: "",
          messaggio: "",
          checkbox: false
        });

      } 
      catch (error) {
        console.log(error);
      }

  };


  return (

    <div className='new-font'>

        <div className='background-contatti text-center'>

          <Container>

            <Row className='mb-5'></Row>
            
            <h3 className='mb-5'><strong>Siamo entusiasti di contribuire al tuo prossimo progetto</strong></h3>

            <h5 className='mt-5 mb-5'>Comincia ora a trasformare il tuo modo di lavorare</h5>

            <h5 className='mt-5 mb-5'>Se desideri esplorare le nostre proposte o vuoi valutare come possiamo ottimizzare il tuo business, non esitare a contattarci. Siamo qui per te.</h5>
            
            <Row className='mb-5'></Row>

          </Container>

        </div>

      <Container className='mb-5'> 

        <h4 className='mt-5 text-center '>Contattaci al seguente indirizzo email:</h4>

        <h6 className='mt-3 mb-5 text-center '><FontAwesomeIcon icon={faEnvelope} /> contatti@kestrelintelligence.it</h6>

        <h4 className='mt-5 mb-3 text-center '>O riempi il seguente form:</h4>

        <div className='text-center'><FontAwesomeIcon icon={faDownLong} size='2xl' className='mb-3'/></div>
          

        <Stack gap={2} className="col-md-6 mx-auto stack-style">
          <Form ref={form} onSubmit={sendEmail}>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Nome e cognome *</Form.Label>
              <Form.Control 
                  required 
                  name='mittente' 
                  placeholder="Inserisci nominativo" 
                  value={formValues.mittente}
                  onChange={(e) => setFormValues({ ...formValues, mittente: e.target.value }) }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupCompany">
              <Form.Label>Azienda *</Form.Label>
              <Form.Control 
                  required 
                  name='azienda' 
                  placeholder="Inserisci azienda" 
                  value={formValues.azienda}
                  onChange={(e) => setFormValues({ ...formValues, azienda: e.target.value }) }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupMail">
              <Form.Label>Email *</Form.Label>
              <Form.Control 
                  required 
                  name='email' 
                  type="email" 
                  placeholder="Inserisci email"
                  value={formValues.email}
                  onChange={(e) => setFormValues({ ...formValues, email: e.target.value }) } 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupTextAreaRequest">
              <Form.Label>Richiesta</Form.Label>
              <Form.Control 
                  name='messaggio' 
                  as="textarea"
                  rows={4} 
                  value={formValues.messaggio}
                  onChange={(e) => setFormValues({ ...formValues, messaggio: e.target.value }) }
              />
            </Form.Group>

            <Form.Group className="mb-5" id="formGridCheckbox">
              <Form.Label>Accettazione Privacy *</Form.Label>
              <Form.Check 
                required 
                type="checkbox" 
                checked={formValues.checkbox}
                onChange={(e) => setFormValues({ ...formValues, checkbox: e.target.value }) }           
                label="Acconsento al trattamento dei miei dati personali ai sensi dell'articolo 13 del Regolamento (UE) 2016/679 e alla ricezione di informazioni commerciali. Leggi la normativa." />
            </Form.Group>

            <div className='text-center'>
              <Button className="mb-5" variant="primary" type="submit"> INVIA RICHIESTA </Button>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>* Campi obbligatori</Form.Label>
            </Form.Group>

            

          </Form>

          </Stack>


          <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Messaggio inviato correttamente</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>La ricontatteremo quanto prima. Grazie!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Chiudi
                    </Button>
                  </Modal.Footer>
          </Modal>


      </Container>

      
      <MyFooter></MyFooter>

    </div>

  );
}

export default Contatti;