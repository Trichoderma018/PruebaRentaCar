import React from "react";
import carData from '../data/carData.js';
import CarItem from '../componets/UI/CarItem.jsx';
import { Container, Col, Row } from "reactstrap";
import '../styles/section-cars.css'
import TuneIcon from '@mui/icons-material/Tune';

const Cars = () => {
    return (
        <section>
            <div className="section_filter mb-4">
                <Container>
                    <Row>
                        <h1 className="section_title mb-5"> Elige tu Vehiculo</h1>
                        <Col lg='3'>
                            <div className="section_filter-left">
                                <span><TuneIcon /></span>
                                <span className="header_top_help">
                                    Filtros
                                </span>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="header_top_righ d-flex align-items-center justify-content-end gap-3">
                                <span className="header_top_help">
                                    Transmision
                                </span>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="header_top_righ d-flex align-items-center justify-content-end gap-3">
                                <span className="header_top_help">
                                    Pasajeros
                                </span>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="header_top_righ d-flex align-items-center justify-content-end gap-3">
                                <span className="header_top_help">
                                    Filtros
                                </span>
                            </div>
                        </Col>
                        
                        <Col lg='2'>
                            <div className="header_top_righ d-flex align-items-center justify-content-end gap-3">
                                <span className="header_top_help">
                                    Filtros
                                </span>
                            </div>
                        </Col>

                        <Col lg='12'>
                            <div className="footer_bottom1">
                                <p className="section_description d-flex aling-items-center justify-content-center gap-1 pt-4">
                                </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            < Container >
                <Row>
                    <Col lg='12' className="text-center mb-5 ">
                        <h6 className="section_subtitle ">Nuestros Autos</h6>
                        <h2 className="section_title">El Mejor precio Aqui</h2>

                    </Col>
                    {
                        carData.slice(0, 6).map(item => (
                            <CarItem item={item} key={item.id} />
                        ))}
                </Row>
            </Container >
        </section>
    );
};

export default Cars;