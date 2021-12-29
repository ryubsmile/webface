/**
 * THIS IS AN ARTICLE COMPONENT.
 * ANYTHING ON THIS SCRIPT DOES NOT AFFECT HEADER.
 */

import React, { useState, useEffect } from 'react';
import './Article.css';
import PropType from './pages/PagesTemplate';

let customSidePadding: number = 150; // pass as prop later on for responsive design
const slideSpeed: number = 300; // milliseconds
let isInitialLoad: number = 1;

interface TypeProps {
  pageList: React.ReactElement<PropType>[];
  slideIndex: number;
}

export default function Article(props: TypeProps) {
  const [pageList, slideIndex] = [props.pageList, props.slideIndex]; //receive props
  //set up hooks
  const [slideHeight, setHeight] = useState(0);
  const [widths, setWidths] = useState({
    slideWidth: 0,
    containerWidth: 0,
  });

  //on component mount || update
  useEffect(() => {
    const updateSlide = () => {
      updateWidths(setWidths);
      updateHeight(setHeight, slideIndex);
    };
    updateSlide();
    window.addEventListener('resize', () => {
      updateSlide();
    });
    return () => {
      // when component unmounts.
      window.removeEventListener('resize', () => {
        updateSlide();
      });
    };
  }, [slideIndex]);

  function updateCss(width: number, slideIndex: number) {
    const css = {
      width: width + 'px',
      transition: '',
      transform: '',
    };

    // for first page load, skip the animation.
    if (slideIndex >= 0) {
      // skip animation if it's the first time loading this document, e.g. access via direct url.
      css.transition = isInitialLoad-- >= 0 ? '0ms' : slideSpeed + 'ms';
      css.transform = `translateX(-${widths.containerWidth * slideIndex}px)`;
    }

    return css;
  }

  // create slides in the slides var
  let slides: JSX.Element[] = pageList.map(
    (item: React.ReactElement<PropType>, index: number) => {
      return (
        <div
          className="slide-content"
          key={index}
          style={updateCss(widths.slideWidth, -1)}
        >
          {item}
        </div>
      );
    }
  );

  return (
    <article className="main-container">
      <div className="slide-wrap" style={updateCss(widths.containerWidth, -1)}>
        <div className="slide-box" style={{ height: slideHeight }}>
          <div
            className="slide-list"
            style={updateCss(
              widths.containerWidth * slides.length + 20,
              slideIndex
            )}
          >
            {slides}
          </div>
        </div>
      </div>
    </article>
  );
}

/* update and render width on every time resize event happens : width changes.*/
function updateWidths(setWidths: React.Dispatch<any>): void {
  const clientWidth = document.body.clientWidth;
  //@media(max-width: 900px) 10vw
  const sidePaddingResponsive =
    clientWidth > 900 ? customSidePadding : clientWidth * 0.1;
  setWidths({
    containerWidth: clientWidth,
    slideWidth: clientWidth - sidePaddingResponsive * 2,
  });
}

function updateHeight(
  setHeight: React.Dispatch<any>,
  slideIndex: number
): void {
  const selectedSlide: Element =
    document.querySelectorAll('.slide-content')[slideIndex];
  setHeight(selectedSlide.clientHeight);
}
