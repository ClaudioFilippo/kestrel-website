import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentDate = localStorage.getItem("cookieBannerAcceptedAt");
  
    if (consentDate) {
      const oneYear = 1000 * 60 ; // 1 anno in ms
      const now = new Date().getTime();
      const then = new Date(consentDate).getTime();
  
      if (now - then > oneYear) {
        // scaduto → mostra di nuovo il banner
        setVisible(true);
      }
    } else {
      // mai accettato → mostra banner
      setVisible(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem("cookieBannerAccepted", "true");
    localStorage.setItem("cookieBannerAcceptedAt", new Date().toISOString());
    setVisible(false);
  };

  return (
    <div className={`cookiealert ${visible ? "show" : ""}`}>
      <Container>
        <Row className="align-items-center justify-content-md-center">
          <Col md={10}>
            <p className="text-center md:text-left mb-2 mb-md-0">
              Questo sito utilizza unicamente cookie tecnici. Se desideri sapere di più sui cookie e su come gestirli, consulta la{" "}
              <NavLink to="/cookie-policy" className="documents-link">
                COOKIE POLICY
              </NavLink>.
            </p>
          </Col>
          <Col md={2} className="text-center">
            <Button onClick={handleAccept} className="px-4 py-2">
              OK
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
