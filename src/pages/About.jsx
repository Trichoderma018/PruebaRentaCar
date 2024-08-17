import React from "react";
import AboutSection from "../componets/UI/AboutSection.jsx";
import Helmet from "../componets/Helmet/HElmet.jsx";
import imgdriver from '../../public/all-images/image-general/imgdriver.jpg';
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../componets/UI/CommonSection.jsx";
import OurMembers from "../componets/UI/OurMembers.jsx";


const About = () => {
    return <Helmet title="About">
        <CommonSection title='Acerca de Nosotros' />
        <AboutSection />
        <section className="about_page-section">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <div className="about_page-image">
                            <img src={imgdriver} alt="" className="w-100 rounded-3" />
                        </div>
                    </Col>

                    <Col lg='6' md='6' sm='12'>
                        <div className="about_page-content">
                            <h2 className="section_title">Comprometidos con las soluciones de viaje seguro para nuestros clientes</h2>
                            <p className="section_description">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quos eaque perspiciatis totam iste
                                accusantium tempore porro, perferendis quis facere quas excepturi pariatur
                                officiis inventore vitae, expedita voluptatibus quaerat ut? Saepe?
                            </p>

                            <p className="section_description">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Quos eaque perspiciatis totam iste
                                accusantium tempore porro, perferendis quis facere quas excepturi pariatur
                                officiis inventore vitae, expedita voluptatibus quaerat ut? Saepe?
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row >
                    <Col lg='12' className="mb-4 text-center" >
                        <h6 className="section_subtitle">Nuestros Miembros</h6>
                        <h2 className="section_title">Jefes de la Empresa</h2>
                    </Col>
                    <section className= "Ourmembers" >
                        <OurMembers />
                    </section>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default About;