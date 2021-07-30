/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React from 'react';
import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import './Article.css';

const pageList = [
  <Home />,
  <Works />,
  <About />,
  <Contact />,
];

const Article = () => {

  let slides = [];

  for(let i = 0; i < pageList.length; i ++){
    slides[i] = <div className="slide-content" key={i}>{pageList[i]}</div>
  }

  return (
    <article className="main-container">
      <div className="slide-wrap">
        <div className="slide-box">
          <div className="slide-list">
            {slides}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;