import React from 'react';
import Helmet from '../componets/Helmet/HElmet.jsx';
import HeroSlider from "../componets/UI/HeroSlider";
import AboutSection from "../componets/UI/AboutSection.jsx"
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
            <div className="find_cars-left">
              <h2>Alquiler de Carros en todo Costa Rica</h2>
              <h6>Descubre miles de destinos en todo el pais con nuestra comodida con los ultimos modelos de vehiculos.</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* ===== About Section ===== */}
    <AboutSection/>

  </Helmet>
};

export default Home