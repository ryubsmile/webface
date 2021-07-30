/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React from 'react';
import './Article.css';

const Article = ( {pageList} ) => {
  let slides = [];
  for(let i = 0; i < pageList.length; i ++){ slides[i] = <div className="slide-content" key={i}>{pageList[i]}</div> }

  return (
    <article className="main-container">
      <div className="slide-wrap">
        <div className="slide-box">
          <div className="slide-list">
            {slides}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;