/**
 * Applies routing to pageContent.js
 * to show body content according to the link. 
 * 
 * THIS IS AN ARTICLE COMPONENT.
 * DOES NOT AFFECT HEADER.
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageContent from './PageContent';

const Article = () => (
  <article>
    <div className="main-container">
      <BrowserRouter>
        <PageContent />
      </BrowserRouter>
    </div>
  </article>
);

export default Article;