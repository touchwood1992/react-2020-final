import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SliderItem from "./SliderItem/SliderItem";
import SliderImages from "./SliderImages";

const HomeSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 3000,
  };

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
      <FaArrowLeft
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  const [state, setState] = useState([]);

  useEffect(() => {
    setState([...SliderImages]);
  }, []);

  return (
    <Container fluid className="p-0">
      <Slider {...settings}>
        {state.map((i) => (
          <SliderItem key={i.img} img={i.img} content={i.content}></SliderItem>
        ))}
      </Slider>
    </Container>
  );
};
export default HomeSlider;
