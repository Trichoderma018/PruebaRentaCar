import React from 'react';
import Helmet from '../componets/Helmet/HElmet.jsx';
import HeroSlider from "../componets/UI/HeroSlider";

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
          <Col lg='4' md='4'>
            <div className="find_cars-left">
              <h2>Encuentra el mejor carro aqui</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    {/* ===== About Section ===== */}

  </Helmet>
};

export default Home