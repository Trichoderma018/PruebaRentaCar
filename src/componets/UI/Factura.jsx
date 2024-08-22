import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../styles/factura.css';

const Factura = () => {
  return (
    <Container className="booking-review">
      <h2 className="title">Review</h2>
      
      <Row className="section">
        <Col>
          <h3 className="section-title">Vehicle</h3>
        </Col>
        <Col className="text-end">
          <div className="price">$1,518.10</div>
        </Col>
      </Row>
      
      <Row className="section align-items-center">
        <Col xs="auto">
          <Image 
            src="https://link-al-auto-imagen" 
            alt="CITROEN C1" 
            fluid 
            className="vehicle-image" 
          />
        </Col>
        <Col>
          <div className="vehicle-name">CITROEN C1</div>
          <div className="vehicle-info">OR SIMILAR MINI</div>
        </Col>
      </Row>
      
      <Row className="section">
        <Col>
          Basic rate (for 33 days)
        </Col>
        <Col className="text-end">
          <div>Included</div>
          <div>$1,518.10</div>
        </Col>
      </Row>

      <Row className="section">
        <Col>
          <h3 className="section-title">Pick up</h3>
          <div>London Heathrow Airport</div>
          <div>2024-09-16 - 09:45</div>
        </Col>
      </Row>

      <Row className="section">
        <Col>
          <h3 className="section-title">Return</h3>
          <div>London Heathrow Airport</div>
          <div>2024-10-19 - 09:45</div>
        </Col>
      </Row>

      <Row className="section">
        <Col>
          <h3 className="section-title">Protections & Extras</h3>
        </Col>
        <Col className="text-end">
          <div className="price">$0.00</div>
        </Col>
      </Row>

      <Row className="section">
        <Col>
          <h3 className="section-title">Basic</h3>
          <div>For 33 day(s)</div>
          <div>Included</div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="section-title">Total</h3>
        </Col>
        <Col className="text-end">
          <div className="total-price">$1,518.10</div>
          <div>To pay at desk in local currency</div>
          <div>£1,132.86</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Factura;