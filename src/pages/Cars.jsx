import React from "react";
import carData from '../data/carData.js';
import CarItem from '../componets/UI/CarItem.jsx';
import { Container, Col, Row } from "reactstrap";


const Cars = () => {
    return (
        <section>
            < Container >
                <Row>
                    <Col lg='12' className="text-center mb-5 ">
                        <h6 className="section_subtitle">Come With</h6>
                        <h2 className="section_title">hot offers</h2>

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