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

const TopLevelContent = props => {
  const url = props.url.toLowerCase().slice(1);
  
  // find out the index of pageList that corresponds to the url.
  let urlDesiredSlideIndex = pageList.length;
  while(urlDesiredSlideIndex-- > 0){
    if(pageList[urlDesiredSlideIndex].type.name.toLowerCase() === url){ break; }
  }

  const [slideIndex, setSlideIndex] = useState(urlDesiredSlideIndex || 0);
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