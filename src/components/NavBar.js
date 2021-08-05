import React from 'react';
import './NavBar.css';

const NavBar = props => {
  // receive props
  const [pageList, slideIndex] = [props.pageList, props.slideIndex];

  // function called when each nav button is clicked => fnc from parent toplevelcontent.js
  const setSlideIndex = selectedIndex => { 
    props.setSlideIndex(selectedIndex);
    updateHeight(selectedIndex);
    // change url
    window.history.replaceState(null,null, //
      (selectedIndex === 0)? "/": pageList[selectedIndex].type.name.toLowerCase());
  };

  // update height according to the selected slide
  const updateHeight = indexToGetHeight => {
    const slideBox = document.querySelector('.slide-box');
    const selectedSlide = document.querySelectorAll('.slide-content')[indexToGetHeight];
    slideBox.style.height = selectedSlide.clientHeight;
  }
  window.onload = () => { updateHeight(0); };

  // update buttons and apply states
  let buttons = [];
  for(let i = 0; i < pageList.length; i++){
    if(i === 0){ // only for the home page
      buttons[i] = <button key={i} id="logo-color-change" onClick={setSlideIndex.bind(null, i)}>
                     <img className={(i === slideIndex)? "nav-item active": "nav-item inactive"} 
                          src="images/fire-red.png" 
                          alt="OOPS! REFRESH!" 
                          width="20px;" />
                   </button>
      continue;
    }
    
    buttons[i] = <button key={i} onClick={setSlideIndex.bind(null, i)}>
                   <span className={(i === slideIndex)? "nav-item active": "nav-item inactive"}>
                     {pageList[i].type.name.toUpperCase()}
                   </span>
                 </button>
  }

  return (
    <header className="nav">
      <div className="nav-container">
        <div className="nav-item logo">
          {buttons[0]}
        </div>
        <div className="nav-item links">
          {buttons.slice(1)}
        </div>
      </div>
    </header>
  );
};

export default NavBar;