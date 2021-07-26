import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';

// ROOT, Main Content Article

function PageContent() {
  return (
    <div className="renderContent">
      <Route exact path="/" component={Home} />
      <Route path="/works" component={Works} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default PageContent;
