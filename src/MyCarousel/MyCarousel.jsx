import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel interval={2000} keyboard={false} pauseonhover={"true"}>
        <Carousel.Item>
          <img
            style={{ height: "450px" }}
            className="d-block w-100"
            src={`assets/eclipse.jpg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "450px" }}
            className="d-block w-100"
            src={`assets/milky-way.jpg`}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "450px" }}
            className="d-block w-100"
            src={`assets/wormhole.png`}
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
}

export default MyCarousel;
