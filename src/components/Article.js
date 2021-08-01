/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React, { useState, useRef, useEffect } from 'react';
import './Article.css';

const sidePadding = 130; // pass as prop

const Article = ( {pageList} ) => {
  const mainContainer = useRef();
  
  const [widths, setWidths] = useState(0);
  
  /*update and render width on 
  1. first render
  2. every time resize event happens : width changes.
  */
  const updateWidths = () => {
    setWidths({
      containerWidth: mainContainer.current.clientWidth,
      slideWidth: mainContainer.current.clientWidth - sidePadding * 2,
    });
    console.log('updatedWidth.');
  };

  //on component update
  useEffect(() => {
    updateWidths(); 
    window.addEventListener('resize', updateWidths);
    return () => {
      window.removeEventListener('resize', updateWidths);
    }
  },[]); // remove

  const updateCss = (width) => {
    return{
      width: width + "px",
    }
  };

  // craete slides in the slides var
  let slides = [];
  for(let i = 0; i < pageList.length; i ++){ 
    slides[i] = <div className="slide-content" 
                     key={i} 
                     style={updateCss(widths.slideWidth)}
                >
                  {pageList[i]}
                </div> 
  }
  
  return (
    <article className="main-container" ref={mainContainer}>
      <div className="slide-wrap" 
      style={updateCss(widths.containerWidth)}
      >
        <div className="slide-box">
          <div className="slide-list"
               style={updateCss(widths.containerWidth * slides.length)}
          >
            {slides}
          </div>
        </div>
      </div>
      {/*  for testing */}
      <button onClick={updateWidths}>hello</button>
    </article>
  );
}

export default Article;