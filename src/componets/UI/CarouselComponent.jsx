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
              descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat impedit, 
                magnam iusto totam dignissimos sint possimus maxime fuga, 
                assumenda cumque sit perspiciatis nemo repellat hic omnis provident modi eum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat impedit, 
                magnam iusto totam dignissimos sint possimus maxime fuga, 
                assumenda cumque sit perspiciatis nemo repellat hic omnis provident modi eum!"
            />
          </div>
          <div>
            <TweetEmbed
              imageSrc={oficAljuela}
              title="Oficina de Alajuela"
              descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat impedit, 
              magnam iusto totam dignissimos sint possimus maxime fuga, 
              assumenda cumque sit perspiciatis nemo repellat hic omnis provident modi eum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat impedit, 
              magnam iusto totam dignissimos sint possimus maxime fuga, 
              assumenda cumque sit perspiciatis nemo repellat hic omnis provident modi eum!"
            />
          </div>
          <div>
            <TweetEmbed
              imageSrc={oficSanJose}
              title="Oficina de San Jose"
              descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat impedit, 
              magnam iusto totam dignissimos sint possimus maxime fuga, 
              assumenda cumque sit perspiciatis nemo repellat hic omnis provident modi eum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat impedit, 
              magnam iusto totam dignissimos sint possimus maxime fuga, 
              assumenda cumque sit perspiciatis nemo repellat hic omnis provident modi eum!"
            />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default CarouselComponent;
  
