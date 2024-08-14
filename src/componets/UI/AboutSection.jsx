import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import '../../styles/about-section.css'

const AboutSection = () => {
  return  <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about_section-content">
                        <h4 className="section_subtitle">About Us</h4> 
                        <h2 className="section_title">Welcom to Rent a Car</h2>
                        <p className="section_description">Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Eligendi rerum nisi cum adipisci, dicta neque a corrupti. 
                        Obcaecati, inventore ad? Consectetur amet sequi suscipit 
                        laborum debitis repellendus enim harum consequuntur!
                        </p>

                    </div>
                </Col>
            </Row>
        </Container>
  </section>
}

export default AboutSection