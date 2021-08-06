import React, { useState, ReactElement } from 'react';
import NavBar from './NavBar';
import Article from './Article';

//-> article list start
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
//<- article list end

// add article to this object if adding one.
const pageList: React.ReactComponentElement<any>[] = [
  <Home />,
  <Works />,
  <About />,
  <Contact />,
];

interface TypeProps{
  url: string;
}

const TopLevelContent: React.FC<TypeProps> = (props): ReactElement => {
  const url: string = props.url.toLowerCase().slice(1); // parse url to pure string without slash in the front.

  // finds out the matching index for the url. If none, revert to 0.
  let urlDesiredSlideIndex: number = pageList.length;
  while(--urlDesiredSlideIndex > 0){
    if(pageList[urlDesiredSlideIndex].type.name.toLowerCase() === url){ break; }
  }
  
  const [slideIndex, setSlideIndex] = useState<number>(urlDesiredSlideIndex || 0);
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