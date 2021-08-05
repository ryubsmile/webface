/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React, { useState, useRef, useEffect, ReactElement } from 'react';
import './Article.css';

const sidePadding: number = 130; // pass as prop later on for responsive design
const slideSpeed: number = 300;

interface TypeProps {
  pageList: React.ReactComponentElement<any>[];
  slideIndex: number;
}

const Article: React.FC<TypeProps> = (props): ReactElement => {
  const [pageList, slideIndex] = [props.pageList, props.slideIndex]; //receive props
  const mainContainer = useRef<HTMLElement>(null);

  const [widths, setWidths] = useState({
    containerWidth: 0,
    slideWidth: 0,
  });
  
  /*update and render width on 
  1. first render
  2. every time resize event happens : width changes.
  */
  const updateWidths = (): void => {
    if(mainContainer.current){
      setWidths({
        containerWidth: mainContainer.current.clientWidth,
        slideWidth: mainContainer.current.clientWidth - sidePadding * 2,
      });
    }
  };

  //on component update / mount
  useEffect(() => {
    updateWidths(); 
    window.addEventListener('resize', updateWidths);
    // when component unmounts.
    return () => {
      window.removeEventListener('resize', updateWidths);
    }
  },[]); // bind an empty array to remove infinite rendering

  const updateCss = (width: number, slideIndex: number) => {
    const css = {
      width: width + "px",
      transition: "",
      transform: "",
    };

    // for first page load, skip this.
    if(slideIndex >= 0){
      css.transition = slideSpeed + "ms";
      css.transform = "translateX(-" 
                    + (widths.containerWidth * slideIndex) 
                    + "px)";
    }

    return css;
  };

  // craete slides in the slides var
  let slides = [];
  for(let i = 0; i < pageList.length; i ++){ 
    slides[i] = <div className="slide-content" 
                     key={i} 
                     style={updateCss(widths.slideWidth, -1)}
                >
                  {pageList[i]}
                </div> 
  }
  
  return (
    <article className="main-container" ref={mainContainer}>
      <div className="slide-wrap" 
      style={updateCss(widths.containerWidth, -1)}
      >
        <div className="slide-box">
          <div className="slide-list"
               style={updateCss(widths.containerWidth * slides.length, slideIndex)}
          >
            {slides}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;