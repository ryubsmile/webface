import React from 'react';
import NavBar from './NavBar';
import Article from './Article';

import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';

const pageList = [
  <Home />,
  <Works />,
  <About />,
  <Contact />,
];

const TopLevelContent = () => {

  return(
    <>
      <NavBar pageList={pageList} />
      <Article pageList={pageList} />
    </>
  );
};

export default TopLevelContent;