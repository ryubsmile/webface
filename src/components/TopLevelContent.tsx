import React, { useState } from 'react';
import NavBar from './NavBar';
import Article from './Article';

//-> article list start
import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';
//<- article list end

// add article to this object if adding one.
const pageList: Array<React.ReactComponentElement<any>> = [
  <Home />,
  <Works />,
  <About />,
  <Contact />,
];

const TopLevelContent: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

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