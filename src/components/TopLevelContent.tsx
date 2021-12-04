import React, { useState, ReactElement } from 'react';
import NavBar from './navigation-bar/NavBar';
import Article from './articles/Article';

//-> article list start
import Home from './articles/pages/0-Home/Home';
import Works from './articles/pages/1-Works/Works';
import About from './articles/pages/2-About/About';
import Contact from './articles/pages/3-Contact/Contact';
import { TypeArticleProps } from './articles/pages/PagesTemplate';

// add article to this object if adding one.
const pageList: React.ReactElement<TypeArticleProps>[] = [
  <Home name="Home" />,
  <Works name="Works" />,
  <About name="About" />,
  <Contact name="Contact" />,
];
//<- article list end

interface TypeProps {
  defaultURL: string;
  entireURL: string;
}

const TopLevelContent: React.FC<TypeProps> = (props): ReactElement => {
  const [defaultURL, entireURL] = [props.defaultURL, props.entireURL];
  let url = entireURL.replace(defaultURL, ''); // parse url, e.g. webface/works => /works

  // finds out the matching index for the url. If none, revert to 0.
  let urlDesiredSlideIndex: number = pageList.length;
  while (--urlDesiredSlideIndex > 0) {
    const lowerCasePageName =
      pageList[urlDesiredSlideIndex].props.name.toLowerCase();
    if (url.includes(lowerCasePageName)) {
      break;
    }
  }

  const [slideIndex, setSlideIndex] = useState<number>(
    urlDesiredSlideIndex || 0
  );
  return (
    <>
      <NavBar
        defaultURL={defaultURL}
        pageList={pageList}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <Article pageList={pageList} slideIndex={slideIndex} />
    </>
  );
};

export default TopLevelContent;
