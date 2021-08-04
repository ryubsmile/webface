/** 
 * Main, and topmost javascript file that shows all the components according to order.
 * 
 * If a component is somehow not connected to this script, 
 * it will not show up on the website no matter what.
 */

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, withRouter, useLocation } from 'react-router-dom';
import TopLevelContent from './components/TopLevelContent';

const PageRouter = () => { 
  const pathName = window.location.pathname;
  // window.location.pathname="set";
  return (
    <TopLevelContent url={pathName} />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// root where Root.js file is interpreted.