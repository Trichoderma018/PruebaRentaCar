import React from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardText, Button, Container } from 'reactstrap';
import CheckIcon from '@mui/icons-material/Check';
 
const ServicesList = () => {
  const services = [
    {
      title: 'Protección Básica',
      items: [
        'Seguro contra accidentes'
      ],
      price: 'Incluida'
    },
    {
      title: 'Protección Intermedia',
      items: [
        'Seguro contra accidentes',
        'Protección de llantas y cristales',
        'Protección para pérdida de llaves'
      ],
      price: '$150/día'
    },
    {
      title: 'Protección Completa',
      items: [
        'Seguro contra accidentes',
        'Protección de llantas y cristales',
        'Protección para pérdida de llaves',
        'Protección para viaje internacional',
        'Protección de equipaje',
        'Protección de objetos personales'
      ],
      price: '$200/día'
    }
  ];
 
  return (
    <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
      <div className="text-center" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 className="display-4">Nuestros Paquetes de Protección</h1>
        <p className="lead">
          Contamos con diferentes tipos de servicios en paquetes de protección que se adaptan a lo que necesite.
          Elija el que mejor se ajuste a sus requerimientos y viaje con la tranquilidad que ofrece nuestra cobertura.
        </p>
      </div>
      <Row>
        {services.map((service, index) => (
          <Col sm="4" key={index} className="d-flex">
            <Card style={{
              height: '100%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'transform 0.3s'
            }}
            className="hoverable-card">
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" style={{ fontWeight: 'bold', color: '#1E3E70' }}>
                  {service.title}
                </CardTitle>
                <CardText style={{ flex: '1', marginBottom: '10px' }}>
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="d-flex align-items-center">
                      <CheckIcon color="success" style={{   marginRight: '8px' }} />
                      {item}
                    </div> 
                  ))}
                </CardText>
                <CardText style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>
                  {service.price}
                </CardText>
                <Button color="primary" className="mt-auto" style={{ backgroundColor: '#1E3E70', border: 'none' }}>
                  Seleccionar
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 
export default ServicesList;