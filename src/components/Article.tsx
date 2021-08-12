/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * ANYTHING ON THIS SCRIPT DOES NOT AFFECT HEADER.
 */

import React, { useState, useRef, useEffect } from 'react';
import './Article.css';

const sidePadding: number = 150; // pass as prop later on for responsive design
const slideSpeed: number = 300;

/* 4 or above => initial load animation X
   3 or below => initial load animation O */
let isInitialLoad: number = 4; 

interface TypeProps {
  pageList: React.ReactComponentElement<any>[];
  slideIndex: number;
}

const Article: React.FC<TypeProps> = (props) => {
  const [pageList, slideIndex] = [props.pageList, props.slideIndex]; //receive props
  const mainContainer = useRef<HTMLElement>(null); // setup reference to VDOM

  const [widths, setWidths] = useState({
    containerWidth: 0,
    slideWidth: 0,
  });
  
  /* update and render width on 
  1. first render
  2. every time resize event happens : width changes.*/
  const updateWidths = (): void => {
    if(mainContainer.current) {
      setWidths({
        containerWidth: mainContainer.current.clientWidth,
        slideWidth: mainContainer.current.clientWidth - sidePadding * 2,
      });
    }
  };

  //on component update || mount
  useEffect(() => {
    updateWidths(); 
    window.addEventListener('resize', updateWidths);
    return () => { // when component unmounts.
      window.removeEventListener('resize', updateWidths);
    }
  },[]); // bind an empty array to prevent infinite rendering

  const updateCss = (width: number, slideIndex: number) => {
    const css = {
      width: width + "px",
      transition: "",
      transform: "",
    };

    // for first page load, skip this.
    if(slideIndex >= 0){
      // skip animation if it's the first time loading this document, e.g. access via direct url.
      if(isInitialLoad-- >= 0){
        css.transition = "0ms";
      }else{
        css.transition = slideSpeed + "ms";
      }

      css.transform = `translateX(-${(widths.containerWidth * slideIndex)}px)`;
    }

    return css;
  };

  // craete slides in the slides var
  let slides: JSX.Element[] = pageList.map((item: React.ReactComponentElement<any>, index: number)=>{
    return (
      <div className="slide-content" key={index} style={updateCss(widths.slideWidth, -1)}>
        {item}
      </div>
    );
  });

  return (
    <article className="main-container" ref={mainContainer}>
      <div className="slide-wrap" style={updateCss(widths.containerWidth, -1)}>
        <div className="slide-box">
          <div className="slide-list" style={updateCss(widths.containerWidth * slides.length, slideIndex)}>
            {slides}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;