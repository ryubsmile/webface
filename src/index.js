/** 
 * Main, and topmost javascript file that shows all the components according to order.
 * 
 * If a component is somehow not connected to this script, 
 * it will not show up on the webpage no matter what.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Article from './components/Article';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Article />
  </React.StrictMode>,
  document.getElementById('root')
);

// root where Root.js file is interpreted.