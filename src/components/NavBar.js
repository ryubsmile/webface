import React from 'react';
import './NavBar.css';

const activate = (index) => {
  const header = document.querySelector('header');
  const buttonList = header.querySelectorAll('button');

  for(let i = 0; i < buttonList.length; i++){
    buttonList[i].children[0].className = (index === i)? "nav-item active" : "nav-item inactive";
  }

};

const NavBar = ({ onClick }) => {
  return (
    <header className="nav">
      <div className="nav-container">
        <div className="nav-item logo">
            <button onClick={() => {onClick(0); activate(0)}} id="logo-color-change">
                <img className="nav-item active" src="images/fire-red.png" alt="OOPS!" width="20px;" />
            </button>
        </div>
        <div className="nav-item links">
            <button onClick={() => {onClick(1); activate(1)}} ><span className="nav-item inactive">WORKS</span></button>
            <button onClick={() => {onClick(2); activate(2)}} ><span className="nav-item inactive">ABOUT</span></button>
            <button onClick={() => {onClick(3); activate(3)}} ><span className="nav-item inactive">CONTACT</span></button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;