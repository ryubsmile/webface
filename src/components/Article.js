/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import './Article.css';

const Article = ({ slideIndex }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    easing: true,
    arrows: false,
    dots: false,
    draggable: false,
    swipeToSlide: false,
    adaptiveHeight: true,
  };

  return (
    <article>
      <div className="main-container">
        <Slider ref={slider} {...settings}>
          <Home />
          <Works />
          <About />
          <Contact />
        </Slider>
      </div>
    </article>
  );
}

Article.defaultProps = {
  slideIndex: 0,
};

export default Article;