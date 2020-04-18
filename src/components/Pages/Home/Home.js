import React from "react";
import Container from "react-bootstrap/Container";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slideImg1 from "../../../assets/images/slide1.jpg";
import slideImg2 from "../../../assets/images/slide2.jpg";
import slideImg3 from "../../../assets/images/slide3.jpg";
import slideImg4 from "../../../assets/images/slide4.jpg";
import slideImg5 from "../../../assets/images/slide5.jpg";
import slideImg6 from "../../../assets/images/slide6.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft className={className} style={{ ...style }} onClick={onClick} />
  );
}

const Home = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container fluid className="p-0">
      <Slider {...settings}>
        <div>
          <div
            style={{ backgroundImage: `url(${slideImg1})` }}
            className="inner-slide-item"
          >
            <div className="slick-content">
              <div>
                Welcome to this react website demostration. I am happy to see
                you. Please check all pages and let me know if you find any
                issues.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${slideImg2})` }}
            className="inner-slide-item"
          >
            <div className="slick-content">
              <div>
                Welcome to this react website demostration. I am happy to see
                you. Please check all pages and let me know if you find any
                issues.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${slideImg3})` }}
            className="inner-slide-item"
          >
            <div className="slick-content">
              <div>
                Welcome to this react website demostration. I am happy to see
                you. Please check all pages and let me know if you find any
                issues.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${slideImg4})` }}
            className="inner-slide-item"
          >
            <div className="slick-content">
              <div>
                Welcome to this react website demostration. I am happy to see
                you. Please check all pages and let me know if you find any
                issues.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${slideImg5})` }}
            className="inner-slide-item"
          >
            <div className="slick-content">
              <div>
                Welcome to this react website demostration. I am happy to see
                you. Please check all pages and let me know if you find any
                issues.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: `url(${slideImg6})` }}
            className="inner-slide-item"
          >
            <div className="slick-content">
              <div>
                Welcome to this react website demostration. I am happy to see
                you. Please check all pages and let me know if you find any
                issues.
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Container>
  );
};
export default Home;
