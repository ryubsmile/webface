import React from 'react';
import NavBar from './NavBar';
import Article from './Article';

const TopLevelContent = () => {

  return(
    <>
      <NavBar onClick/>
      <Article slideIndex/>
    </>
  );
};

export default TopLevelContent;