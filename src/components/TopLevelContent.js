import React, { useState } from 'react';
import NavBar from './NavBar';
import Article from './Article';

//-> article list start
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
//<- article list end

// add article to this object if adding one.
const pageList = [
  <Home />,
  <Works />,
  <About />,
  <Contact />,
];

const TopLevelContent = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return(
    <>
      <NavBar pageList={pageList} 
              slideIndex={slideIndex} 
              setSlideIndex={setSlideIndex} />
      <Article pageList={pageList} 
               slideIndex={slideIndex} />
    </>
  );
};

export default TopLevelContent;