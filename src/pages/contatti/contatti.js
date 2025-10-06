import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Form, Button, Spinner, Row, Stack, Modal } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownLong } from "@fortawesome/free-solid-svg-icons";

import MyFooter from "../components/footer/myfooter";
import "./contatti.css";

function Contatti() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShowModal(false);

  const [verificationCode, setVerificationCode] = useState("");
  const [userCodeInput, setUserCodeInput] = useState("");

  useEffect(() => {
    setVerificationCode(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  const [formValues, setFormValues] = useState({
    mittente: "",
    azienda: "",
    email: "",
    messaggio: "",
    checkbox: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (userCodeInput !== verificationCode) {
      alert("Codice di verifica errato. Riprova.");
      setVerificationCode(Math.floor(1000 + Math.random() * 9000).toString());
      setIsLoading(false);
      return;
    }

    try {
      emailjs.init("RI4JxwUcoDQK46rD_");
      emailjs
        .sendForm("service_3ddz1jw", "template_ss6myg9", form.current)
        .then(() => {
          setShowModal(true);
          setIsLoading(false);
        })
        .catch(() => {
          alert("Errore nell'invio del form. Riprova più tardi.");
          setIsLoading(false);
        });

      setFormValues({
        mittente: "",
        azienda: "",
        email: "",
        messaggio: "",
        checkbox: false,
      });
      setUserCodeInput("");
      setVerificationCode(Math.floor(1000 + Math.random() * 9000).toString());
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="new-font">
      <Helmet>
        <title>Kestrel Intelligence | Contatti</title>
        <meta
          name="description"
          content="Contatta Kestrel Intelligence: consulenza in AI, automazione e analisi dati per imprese. Parliamo del tuo progetto."
        />
      </Helmet>

      {/* Intro */}
      <div className="background-section text-center py-5">
        <Container>
          <Row className="justify-content-center">
            <h1 className="fw-bold mb-4">
              Contatta <span className="highlighted-white">KESTREL INTELLIGENCE</span>
            </h1>
            <h3 className="mb-3">
              Siamo pronti ad accompagnarti nel tuo percorso di innovazione
            </h3>
            <p className="mb-3" style={{ maxWidth: "1000px" }}>
              Desideri scoprire come <strong>intelligenza artificiale</strong>, <strong>automazione</strong> e <strong>analisi dei dati</strong> possano far crescere la tua impresa?
              Insieme possiamo creare <strong>soluzioni su misura</strong>, pensate per portare risultati reali e duraturi.      
            </p>
          </Row>
        </Container>
      </div>

      {/* Contact form */}
      <Container className="my-5">
        <h4 className="text-center mb-3">Puoi scriverci a:</h4>
        <h5 className="text-center mb-5">
          <FontAwesomeIcon icon={faEnvelope} /> contatti@kestrelintelligence.it
        </h5>

        <hr className="contact-divider my-5" />

        <div className="text-center mt-5 mb-4">
          <h4 className="form-title-decorated">In alternativa, compila il modulo</h4>
        </div>

        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faDownLong} size="2xl" className="text-muted" />
        </div>

        <Stack gap={2} className="col-md-6 mx-auto stack-style">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Nome e cognome *</Form.Label>
              <Form.Control
                required
                name="mittente"
                placeholder="Inserisci il tuo nome e cognome"
                value={formValues.mittente}
                onChange={(e) => setFormValues({ ...formValues, mittente: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupCompany">
              <Form.Label>Azienda *</Form.Label>
              <Form.Control
                required
                name="azienda"
                placeholder="Inserisci il nome dell’azienda"
                value={formValues.azienda}
                onChange={(e) => setFormValues({ ...formValues, azienda: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupMail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Inserisci la tua email"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGroupTextAreaRequest">
              <Form.Label>Richiesta</Form.Label>
              <Form.Control
                name="messaggio"
                as="textarea"
                rows={4}
                placeholder="Scrivi qui la tua richiesta..."
                value={formValues.messaggio}
                onChange={(e) => setFormValues({ ...formValues, messaggio: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGroupCode">
              <Form.Label>Codice di verifica *</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  required
                  type="text"
                  placeholder="Inserisci il codice"
                  value={userCodeInput}
                  onChange={(e) => setUserCodeInput(e.target.value)}
                  className="me-3"
                  style={{ maxWidth: "220px" }}
                />
                <span className="fw-bold fs-5">{verificationCode}</span>
              </div>
            </Form.Group>

            <Form.Group className="mb-5" id="formGridCheckbox">
              <Form.Check
                required
                type="checkbox"
                checked={formValues.checkbox}
                onChange={(e) => setFormValues({ ...formValues, checkbox: e.target.checked })}
                label="Acconsento al trattamento dei miei dati personali ai sensi dell’art. 13 del Reg. (UE) 2016/679 (GDPR)."
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" disabled={isLoading} className="classic-submit-button">
                {isLoading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" className="me-2" />
                    Invio in corso...
                  </>
                ) : (
                  <strong>Invia richiesta</strong>
                )}
              </Button>
            </div>

            <Form.Text className="text-muted mt-3 d-block text-center">* Campi obbligatori</Form.Text>
          </Form>
        </Stack>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Messaggio inviato correttamente</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ti ricontatteremo al più presto. Grazie per averci scritto!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <MyFooter />
    </div>
  );
}

export default Contatti;
