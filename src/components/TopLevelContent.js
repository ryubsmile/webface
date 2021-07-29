import React, { useState } from 'react';
import NavBar from './NavBar';
import Article from './Article';

const TopLevelContent = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return(
    <>
      <NavBar onClick={setSlideIndex} />
      <Article slideIndex={slideIndex} />
    </>
  );
};

export default TopLevelContent;