/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import './Article.css';

const Article = () => (
  <article>
    <div className="main-container">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  </article>
);

export default Article;