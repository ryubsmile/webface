import React, { useState, ReactElement } from 'react';
import NavBar from './NavBar';
import Article from './Article';

//-> article list start
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import { TypeArticleProps } from './PagesTemplate';

// add article to this object if adding one.
const pageList: React.ReactElement<TypeArticleProps>[] = [
  <Home name="Home"/>,
  <Works name="Works"/>,
  <About name="About"/>,
  <Contact name="Contact"/>,
];
//<- article list end

interface TypeProps {
  defaultURL: string;
  entireURL: string;
}

const TopLevelContent: React.FC<TypeProps> = (props): ReactElement => {
  const [defaultURL, entireURL] = [props.defaultURL, props.entireURL];
  let url = entireURL.replace(defaultURL, ""); // parse url, e.g. webface/works => /works

  // finds out the matching index for the url. If none, revert to 0.
  let urlDesiredSlideIndex: number = pageList.length;
  while(--urlDesiredSlideIndex > 0){
    const lowerCasePageName = pageList[urlDesiredSlideIndex].props.name.toLowerCase();
    if(url.includes(lowerCasePageName)){ break; }
  }

  const [slideIndex, setSlideIndex] = useState<number>(urlDesiredSlideIndex || 0);
  return(
    <>
      <NavBar defaultURL={defaultURL} 
              pageList={pageList} 
              slideIndex={slideIndex} 
              setSlideIndex={setSlideIndex} />
      <Article pageList={pageList} 
               slideIndex={slideIndex} />
    </>
  );
};

export default TopLevelContent;