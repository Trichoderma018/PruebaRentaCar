import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../../public/all-images/image-home/about-us.jpg'

const AboutSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about_section-content">
                        <h4 className="section_subtitle">About Us</h4>
                        <h2 className="section_title">Welcom to Rent a Car</h2>
                        <p className="section_description">
                            En Renta Car Service, nos enorgullece ofrecerte una experiencia de
                            alquiler de vehículos inigualable. Ya sea que necesites un automóvil
                            para un viaje de negocios, unas vacaciones familiares, o una escapada
                            de fin de semana, estamos aquí para asegurarnos de que encuentres el
                            vehículo perfecto que se adapte a tus necesidades. Con un enfoque en la
                            seguridad, la comodidad y la satisfacción del cliente, nuestro equipo
                            está dedicado a hacer que cada viaje sea tan sencillo y placentero como sea posible.
                        </p>
                        <div className="about_section-item d-flex aling-items-center">
                            <p className="section_description d-flex aling-items-center gap-2">
                                ✓ Flota diversa y moderna para todas tus necesidades de viaje
                            </p>

                            <p className="section_description d-flex aling-items-center gap-2">
                                ✓ Paquetes de protección diseñados para tu tranquilidad.

                            </p>
                        </div>

                        <div className="about_section-item d-flex aling-items-center">
                            <p className="section_description d-flex aling-items-center gap-2">
                                ✓ Servicio al cliente dedicado y siempre disponible.
                            </p>

                            <p className="section_description d-flex aling-items-center gap-2">
                                ✓ Precios competitivos y sin sorpresas.
                            </p>
                        </div>

                    </div>
                </Col>

                <Col lg="6" md="6">
                    <div className="about_img">
                        <img src={aboutImg} alt="" className="w-100 rounded-3" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default AboutSection