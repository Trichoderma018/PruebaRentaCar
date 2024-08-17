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
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.
                            Eligendi rerum nisi cum adipisci, dicta neque a corrupti.
                            Obcaecati, inventore ad? Consectetur amet sequi suscipit
                            laborum debitis repellendus enim harum consequuntur!
                        </p>
                        <div className="about_section-item d-flex aling-items-center">
                            <p className="section_description d-flex aling-items-center gap-2">
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.
                        
                            </p>

                            <p className="section_description d-flex aling-items-center gap-2">
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.
                            
                            </p>
                        </div>

                        <div className="about_section-item d-flex aling-items-center">
                            <p className="section_description d-flex aling-items-center gap-2">
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.
                         
                            </p>

                            <p className="section_description d-flex aling-items-center gap-2">
                            Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit.
                          
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