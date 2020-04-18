import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import HomeSlider from "./Slider/Slider";
import card1 from "../../../assets/images/img_avatar1.png";
const Home = (props) => {
  return (
    <>
      <HomeSlider></HomeSlider>
      <Container className="mt-5 mb-3">
        <h2 className="heading">Our Team</h2>
        <Row>
          <Col md={4}>
            <div className="card">
              <img className="card-img-top" src={card1} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <button className="btn btn-dark">See Profile</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <img className="card-img-top" src={card1} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <button className="btn btn-dark">See Profile</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card">
              <img className="card-img-top" src={card1} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <button className="btn btn-dark">See Profile</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
