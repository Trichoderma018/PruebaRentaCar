import React from 'react';
import Helmet from '../componets/Helmet/HElmet.jsx';
import HeroSlider from "../componets/UI/HeroSlider";
import AboutSection from "../componets/UI/AboutSection.jsx"
import DestinosVacations from '../componets/UI/DestinosVacations.jsx';
import CarouselComponent from '../componets/UI/CarouselComponent.jsx';
import { Container, Row, Col } from "reactstrap";


const Home = () => {
  return <Helmet title='Home'>
    <section className="p-0 hero_slider-section">
      <HeroSlider />

    </section>

    {/* ===== Helmet Section ===== */}
    <div className="hero_from">
      <Container>
        <Row className="from_row">
          <Col lg='12' md='4'>
            <h2>Alquiler de Carros en todo Costa Rica</h2>
            <h6>Descubre miles de destinos en todo el pais con nuestra comodida con los ultimos modelos de vehiculos.
              Contamos con descuentos en estos lugares.</h6>
            <section className="PlacesVacations" >
              <DestinosVacations />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
    {/* ===== Carousel Section ===== */}
    <div>
      <Container>
        <Row>
          <Col>
            <section className='Carousel_section'>
              <CarouselComponent/>
            </section>
          </Col>
        </Row>
      </Container>
    </div>

    {/* ===== About Section ===== */}
    <AboutSection />

  </Helmet>
};

export default Home