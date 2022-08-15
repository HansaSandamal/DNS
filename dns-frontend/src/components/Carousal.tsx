import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../assests/images/cover5.jpg';
import img2 from '../assests/images/cover2.jpg';
import img3 from '../assests/images/cover4.jpg';

const Carousal:React.FC=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          height={"400px"}
          alt="First slide"
        />
        <Carousel.Caption className="text-dark">
          <h3>Welcome</h3>
          <p>We offer same-day shipping for most in-stock orders placed by 12pm</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={"400px"}
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          height={"400px"}
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
  );
}

export default Carousal;