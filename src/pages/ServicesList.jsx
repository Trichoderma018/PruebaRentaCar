import React, { useState, useEffect } from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardText, Button, Container } from 'reactstrap';
import CheckIcon from '@mui/icons-material/Check';
import { fetchServicesList } from '../data/servicesData';
import StarIcon from '@mui/icons-material/Star';
import HeaderNavigation from '../componets/UI/HeaderNavigation.jsx';


const ServicesList = () => {
  const packs = [
    {
      title: 'Protección Básica',
      items: [
        'Seguro contra accidentes'
      ],
      price: 'Incluido',
      level: 1
    },
    {
      title: 'Protección Intermedia',
      items: [
        'Seguro contra accidentes',
        'Protección de llantas y cristales',
        'Protección para pérdida de llaves'
      ],
      price: '$150/día',
      level: 2
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
      price: '$200/día',
      level: 3
    }
  ];

  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchServicesList(); // Llama a la función para obtener datos
        setServices(data); // Configura los datos obtenidos
      } catch (error) {
        setError('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Ejecutar solo una vez al montar el componente

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (services.length === 0) {
    return <h2>No se encontraron servicios.</h2>;
  }

  const getStarColor = (level) => {
    switch (level) {
      case 3:
        return '#FFD700';
      case 2:
        return '#C0C0C0';
      case 1:
        return '#CD7F32';
      default:
        return '#000';
    }
  };

  const renderStars = (level) => {
    let stars = [];
    for (let i = 0; i < level; i++) {
      stars.push(<StarIcon key={i} style={{ color: getStarColor(level), fontSize: '1.5em' }} />);
    }
    return stars;
  };

  return (
    <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Col lg='12'>
        <HeaderNavigation />
      </Col>
      <div className="text-center" style={{ padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 className="display-4">Nuestros Paquetes de Protección</h1>
        <h6 className="lead">
          Contamos con diferentes tipos de servicios en paquetes de protección que se adaptan a lo que necesite.
          Elija el que mejor se ajuste a sus requerimientos y viaje con la tranquilidad que ofrece nuestra cobertura.
        </h6>
      </div>
      <Row>
        {packs.map((pack, index) => (
          <Col sm="4" key={index} className="d-flex">
            <Card style={{
              width: '100%',
              height: '600px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
              className="hoverable-card">
              <CardBody className="d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <CardTitle tag="h5" style={{ fontWeight: 'bold', color: '#004080', marginRight: '10px' }}>
                    {pack.title}
                  </CardTitle>
                  <div className="d-flex align-items-center">
                    {renderStars(pack.level)}
                  </div>
                </div>
                <hr style={{ margin: '10px 0' }} />
                <div style={{ flex: '1', marginBottom: '10px' }}>
                  {pack.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="d-flex align-items-center mb-3">
                      <CheckIcon color='success' style={{ marginRight: '8px' }} />
                      {item}
                    </div>
                  ))}
                </div>
                <CardText style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#f9a826' }}>
                  {pack.price}
                </CardText>
                <Button color="primary" className="mt-auto" style={{ backgroundColor: '#004080', border: 'none' }}>
                  Seleccionar
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4" style={{ padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '10px', marginBottom: '20px' }}>
        <h1 className="display-4">Nuestros Servicios Extras</h1>
        <h6 className="lead">
          Contamos con diferentes tipos de servicios que se adaptan a lo que necesite.
          Elija el que mejor se ajuste a sus requerimientos y viaje con la tranquilidad que ofrece nuestra cobertura.
        </h6>
      </div>
      <Row>
        {services.map((service) => (
          <Col sm='3' key={service.id_servicio_extra} className="d-flex">
            <Card
              style={{
                width: '100%',
                height: '250px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}
              className="hoverable-card"
            >
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5" style={{ fontWeight: 'bold', color: '#f9a826' }}>
                  {service.nombre}
                </CardTitle>
                <div style={{ flex: '1', marginBottom: '10px' }}>
                  {service.descripcion}
                </div>
                <CardText style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>
                  ${service.precio}
                </CardText>
                <Button
                  color="primary"
                  className="mt-auto"
                  style={{ backgroundColor: '#1E3E70', border: 'none' }}
                >
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