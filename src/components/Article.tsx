/**
 * THIS IS AN ARTICLE COMPONENT.
 * ANYTHING ON THIS SCRIPT DOES NOT AFFECT HEADER.
 */

import React, { useState, useEffect } from 'react';
import './Article.css';
import { TypeArticleProps } from './PagesTemplate';

let customSidePadding: number = 150; // pass as prop later on for responsive design
const slideSpeed: number = 300; // milliseconds
let isInitialLoad: number = 1; 

interface TypeProps {
  pageList: React.ReactElement<TypeArticleProps>[];
  slideIndex: number;
}

const Article: React.FC<TypeProps> = (props) => {
  const [pageList, slideIndex] = [props.pageList, props.slideIndex]; //receive props

  const [widths, setWidths] = useState({
    containerWidth: 0,
    slideWidth: 0,
  });

  const [slideHeight, setHeight] = useState(0);

  //on component update || mount
  useEffect(() => {
    const updateSlide = () => { updateWidths(setWidths); updateHeight(setHeight, slideIndex); }
    updateSlide();
    window.addEventListener('resize', () => { updateSlide(); });
    return () => { // when component unmounts.
      window.removeEventListener('resize', () => { updateSlide(); });
    }
  },[slideIndex]); // bind an empty array to prevent infinite rendering

  function updateCss(width: number, slideIndex: number){
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
  let slides: JSX.Element[] = pageList.map((item: React.ReactElement<TypeArticleProps>, index: number)=>{
    return (
      <div className="slide-content" key={index} style={updateCss(widths.slideWidth, -1)}>
        {item}
      </div>
    );
  });

  return (
    <article className="main-container">
      <div className="slide-wrap" style={updateCss(widths.containerWidth, -1)}>
        <div className="slide-box" style={{height: slideHeight}}>
          <div className="slide-list" style={updateCss(widths.containerWidth * slides.length + 20, slideIndex)}>
            {slides}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;

/* update and render width on every time resize event happens : width changes.*/
function updateWidths(setWidths: React.Dispatch<any>): void {
  const clientWidth = document.body.clientWidth;
  const sidePaddingResponsive = (clientWidth > 900)? customSidePadding : clientWidth * 0.1;
  setWidths({
    containerWidth: clientWidth,
    slideWidth: clientWidth - sidePaddingResponsive * 2,
  });
};

function updateHeight(setHeight: React.Dispatch<any>, slideIndex: number): void {
  const selectedSlide: Element = document.querySelectorAll('.slide-content')[slideIndex];
  setHeight(selectedSlide.clientHeight);
}