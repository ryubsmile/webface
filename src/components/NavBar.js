import React from 'react';
import './NavBar.css';

const NavBar = ( {pageList} ) => {
  let buttons = [];
  buttons[0] = (
    <button id="logo-color-change">
      <img className="nav-item active" src="images/fire-red.png" alt="OOPS!" width="20px;" />
    </button>
  );

  for(let i = 1; i < pageList.length; i++){
    buttons[i] = <button key={i}><span className="nav-item inactive">{pageList[i].type.name.toUpperCase()}</span></button>
  }

  return (
    <header className="nav">
      <div className="nav-container">
        <div className="nav-item logo">
          <button id="logo-color-change">
            <img className="nav-item active" src="images/fire-red.png" alt="OOPS!" width="20px;" />
          </button>
        </div>
        <div className="nav-item links">
            {/* <button><span className="nav-item inactive">WORKS</span></button>
            <button><span className="nav-item inactive">ABOUT</span></button>
            <button><span className="nav-item inactive">CONTACT</span></button> */}
            {buttons.slice(1)}
        </div>
      </div>
    </header>
  );
};

export default NavBar;