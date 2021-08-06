import React, { ReactElement } from 'react';
import './NavBar.css';

interface TypeProps {
  pageList: React.ReactComponentElement<any>[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const NavBar: React.FC<TypeProps> = (props): ReactElement => {
  // receive props
  const [pageList, slideIndex, setSlideIndex] = [props.pageList, props.slideIndex, props.setSlideIndex];
  
  // function called when each nav button is clicked => fnc from parent toplevelcontent.js
  function updateSlide(selectedIndex: number): void { 
    setSlideIndex(selectedIndex); // update state 
    updateHeight(selectedIndex); // update height to match slide height

    // update url via History API
    window.history.replaceState(null, "", 
      (selectedIndex === 0)? "/": pageList[selectedIndex].type.name.toLowerCase());
  };
  
  // update height according to the selected slide
  function updateHeight(indexToGetHeight: number): void{
    const slideBox = document.querySelector('.slide-box') as HTMLElement;
    const selectedSlide: Element = document.querySelectorAll('.slide-content')[indexToGetHeight];
    slideBox.style.height = selectedSlide.clientHeight + "px"; 
  }
  // update height for the first page. Deals with DOM, so use window.onload
  window.onload = () => { updateHeight(slideIndex); }; 

  // update buttons and apply states
  let buttons = [];
  for(let i = 0; i < pageList.length; i++){
    if(i === 0) { // only for the home page
      buttons[i] = <button key={i} id="logo-color-change" onClick={updateSlide.bind(null, i)}>
                     <img className={(i === slideIndex)? "nav-item active": "nav-item inactive"} 
                          src="images/fire-red.png" 
                          alt="OOPS! REFRESH!" 
                          width="20px;" />
                   </button>
    } else {
      buttons[i] = <button key={i} onClick={updateSlide.bind(null, i)}>
                     <span className={(i === slideIndex)? "nav-item active": "nav-item inactive"}>
                       {pageList[i].type.name.toUpperCase()}
                     </span>
                   </button>
    }
  }

  return (
    <header className="nav">
      <div className="nav-container">
        <div className="nav-item logo">
          {buttons[0]}
        </div>
        <div className="nav-item links">
          {buttons.slice(1) /* 1 ~ end */} 
        </div>
      </div>
    </header>
  );
};

export default NavBar;