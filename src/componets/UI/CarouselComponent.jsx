import React from 'react';
import Slider from 'react-slick';
import '../../styles/carousel-component.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import oficCartago from '../../../public/all-images/image-general/ofic-cartago.jpg';
import oficAljuela from '../../../public/all-images/image-general/ofic-alajuela.png';
import oficSanJose from '../../../public/all-images/image-general/ofic-sanjose.jpg';


const TweetEmbed = ({ imageSrc, title, descripcion }) => {
  return (
    <div className="tweet-embed-container">
      <div className="single-tweet">
        <img src={imageSrc} alt="" />
      </div>
      <div className="embed-tweet-right">
        <h1>{title}</h1>
        <h6>{descripcion}</h6>
      </div>
    </div>
  );
};

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="carousel">
      <Slider {...settings} className='carousel_component'>
        <div>
          <TweetEmbed
            imageSrc={oficCartago}
            title="Oficina de cartago"
            descripcion="Nuestra oficina en Cartago es el punto de partida ideal para explorar 
              la región central de Costa Rica. Ofrecemos un servicio de atención 
              al cliente excepcional y una amplia gama de vehículos para satisfacer 
              todas tus necesidades de transporte."
          />
        </div>
        <div>
          <TweetEmbed
            imageSrc={oficAljuela}
            title="Oficina de Alajuela"
            descripcion="Ubicada en el corazón de Alajuela, nuestra oficina 
              proporciona fácil acceso a los destinos
              turísticos cercanos y al Aeropuerto Internacional Juan Santamaría. 
              Disfruta de un proceso de alquiler sin complicaciones y una atención personalizada."
          />
        </div>
        <div>
          <TweetEmbed
            imageSrc={oficSanJose}
            title="Oficina de San Jose"
            descripcion="En nuestra oficina de San José, ofrecemos una experiencia de alquiler 
            conveniente para quienes viajan a la capital. Con un equipo amable y profesional, 
            estamos listos para ayudarte a encontrar el vehículo perfecto para tu viaje por la ciudad 
            y más allá."
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;

