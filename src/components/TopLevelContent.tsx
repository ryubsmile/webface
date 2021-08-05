import React, { useState, ReactElement } from 'react';
import NavBar from './NavBar';
import Article from './Article';

//-> article list start
import Home from './Home';
import Works from './Works';
import About from './About';
import Contact from './Contact';
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
  const url: string = props.url.toLowerCase().slice(1);

  let urlDesiredSlideIndex: number = pageList.length;
  while(urlDesiredSlideIndex-- > 0){
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