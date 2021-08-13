import React, { ReactElement } from 'react';
import './NavBar.css';
import { TypeArticleProps } from './PagesTemplate';

interface TypeProps {
  defaultURL: string;
  pageList: React.ReactElement<TypeArticleProps>[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const NavBar: React.FC<TypeProps> = (props): ReactElement => {
  const [      defaultURL,       pageList,       slideIndex,       setSlideIndex] 
      = [props.defaultURL, props.pageList, props.slideIndex, props.setSlideIndex];

  // function called when each nav button is clicked => fnc from parent toplevelcontent.js
  function updateSlide(selectedSlideIndex: number): void { 
    setSlideIndex(selectedSlideIndex); // update state 
    updateHeight(selectedSlideIndex); // update height to match slide height

    // update url via History API & document title
    const pageName: string = pageList[selectedSlideIndex]?.props.name;
    if(selectedSlideIndex === 0){
      updateURL(defaultURL + "/");
      updateDocTitle("WebFace");
    }else{
      updateURL("#/" + pageName.toLowerCase()); // lowercase
      updateDocTitle("WebFace • " + pageName.charAt(0).toUpperCase() + pageName.slice(1));
    }
  }

  // update height for the first page. Deals with DOM, so use window.onload
  window.onload = () => { updateSlide(slideIndex); }; 

  // update buttons and apply states
  let buttons = [];
  for(let i = 0; i < pageList.length; i++){
    if(i === 0) { // only for the home page
      buttons[i] = <button key={i} id="logo-color-change" onClick={updateSlide.bind(null, i)}>
                     <img className={(i === slideIndex)? "nav-item active": "nav-item inactive"} 
                          src="images/fire-red.png" 
                          alt="OOPS! REFRESH!" />
                   </button>
    }else{
      buttons[i] = <button key={i} onClick={updateSlide.bind(null, i)}>
                     <span className={(i === slideIndex)? "nav-item active": "nav-item inactive"}>
                       {pageList[i].props.name.toUpperCase()}
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

// update height according to the selected slide
function updateHeight(indexToGetHeight: number): void{
  const slideBox = document.querySelector('.slide-box') as HTMLElement;
  const selectedSlide: Element = document.querySelectorAll('.slide-content')[indexToGetHeight];
  slideBox.style.height = selectedSlide.clientHeight + "px"; 
}

function updateURL(text: string){ window.history.replaceState(null, "", text); }

function updateDocTitle(text: string){ document.title = text; }