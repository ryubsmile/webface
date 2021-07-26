import React from 'react';

const NavBar = () => {
  return (
    <header className="nav">
      <div className="nav-container">
        <div className="nav-item logo">
            <a href="/" id="logo-color-change">
                <img src="images/fire-red.png" alt="OOPS!" width="20px;" />
            </a>
        </div>
        <div className="nav-item links">
            <a href="/works"><span className="nav-item inactive">WORKS</span></a>
            <a href="/about"><span className="nav-item inactive">ABOUT</span></a>
            <a href="/contact"><span className="nav-item inactive">CONTACT</span></a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;