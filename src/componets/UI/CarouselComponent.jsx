import React from 'react';
import Slider from 'react-slick';
import '../../styles/carousel-component.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import oficCartago from '../../../public/all-images/image-general/ofic-cartago.jpg';
import oficAljuela from '../../../public/all-images/image-general/ofic-alajuela.png';
import oficSanJose from '../../../public/all-images/image-general/ofic-sanjose.jpg';

const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
    };

    return (
        <div className="carousel">
        <Slider {...settings}>
            <div className="slide">
                <div className="image-container">
                    <img src={oficCartago} alt="Oficina Cartago" />
                </div>
                <div className="text-container">
                    <p>Texto para Oficina Cartago</p>
                </div>
            </div>
            <div className="slide">
                <div className="image-container">
                    <img src={oficAljuela} alt="Oficina Alajuela" />
                </div>
                <div className="text-container">
                    <p>Texto para Oficina Alajuela</p>
                </div>
            </div>
            <div className="slide">
                <div className="image-container">
                    <img src={oficSanJose} alt="Oficina San José" />
                </div>
                <div className="text-container">
                    <p>Texto para Oficina San José</p>
                </div>
            </div>
        </Slider>
    </div>
    );
};

export default CarouselComponent;
