import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import '../Styles/carousel.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="banner-page">
            <div className="home-content">
                <h1>
                    Top fashion shop to buy and sell merchandise online
                </h1>
                <br />
                <p>Register yourself now and get a coupon worth 50% on any sale item</p>
                <button>GET STARTED</button>
            </div>

      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container">
        <Carousel.Item className="carousel-items">
          <img
            className="slides"
            src={require('../Images/trouser-ecomm.jpg').default}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-items">
          <img
            className="slides"
            src={require('../Images/T-shirt-ecomm.jpg').default}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-items">
          <img
            className="slides"
            src={require('../Images/shoes-ecomm.jpg').default}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default ControlledCarousel;