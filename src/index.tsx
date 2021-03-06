/**
 * Main, and topmost javascript file that shows all the components according to order.
 *
 * If a component is somehow not connected to this script,
 * it will not show up on the website no matter what.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TopLevelContent from './components/TopLevelContent';
import './index.css';

const PageRouter = () => {
  const defaultURL = '/webface';
  const pathName: string = window.location.pathname + window.location.hash;

  return <TopLevelContent defaultURL={defaultURL} entireURL={pathName} />;
};

ReactDOM.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// root where Root.js file is interpreted.
