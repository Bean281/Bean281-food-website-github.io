import { Carousel } from "react-bootstrap";
import React from "react";
import "./Slider.scss";

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src="https://img.freepik.com/premium-photo/french-bread-dark-background-shallow-depth-field_890887-5584.jpg" alt="" />
          <Carousel.Caption>
            <h3>Freshly baked everyday</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src="https://img.freepik.com/premium-photo/bread-plate-with-dark-background_265515-6514.jpg" alt="" />
          <Carousel.Caption>
            <h3>Better service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/177/879/large_2x/beautiful-fresh-baked-bread-with-wheat-grains-on-a-dark-concrete-background-free-photo.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Better flavour</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
