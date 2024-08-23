import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import '../../styles/hero-slides.css';


const HeroSlider = () => {

    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false
    };

    return (
        
        <Slider {...settings} className="hero_slider">
            <div className="slider_item slider_item-01 mt0">
                <Container>
                    <div className="slider_content">
                        <h4 className="text-light mb-3"> Renta al Mejor precio</h4>
                        <h1 className="text-light mb-4">Reserva Ahora Con Nuestra Variedad de Autos</h1>
                    </div>
                </Container>
            </div>

            <div className="slider_item slider_item-02 mt0">
                <Container>
                    <div className="slider_content">
                        <h4 className="text-light mb-3"> En Rent Car Service</h4>
                        <h1 className="text-light mb-4">Contamos Con el Mejor Servicio Y Comodidad</h1>
                    </div>
                </Container>
            </div>

            <div className="slider_item slider_item-03 mt0">
                <Container>
                    <div className="slider_content">
                        <h4 className="text-light mb-3"> Contamos Con Distinos Productos</h4>
                        <h1 className="text-light mb-4">Llevate todo Con Nuestros Servicios y Extras</h1>
                    </div>
                </Container>
            </div>
        </Slider>
    );
};

export default HeroSlider;