const slideSpeed = 300; // slide speed

window.onload = () => {
  slideWrap = document.querySelector('.slide-wrap');
  slideList = document.querySelector('.slide-list');
  slideContents = document.querySelectorAll('.slide-content');
  slideLen = slideContents.length;
  slideBox = document.querySelector('.slide-box');
  headerButtons = document.querySelector('header').querySelectorAll('button')
  curSlide = slideContents[0];
  updateWidth();
  updateHeight();
  setEventListeners();
}

window.onresize = () => { updateWidth(); }

// gets width everytime it's changed. should be called everytime the client size changes.
const updateWidth = () => { 
  // the width every element refers to
  slideWidth = document.querySelector('.main-container').clientWidth;

  for(let i = 0; i < slideLen; i++){ slideContents[i].style.width = slideWidth; }
  slideWrap.style.width = slideWidth;
  slideList.style.width = slideWidth * slideLen + "px";
}

const updateHeight = () => { slideBox.style.height = curSlide.clientHeight; }

// sets the buttons working
const setEventListeners = () => {
  for(let i = 0; i < headerButtons.length; i++){
    headerButtons[i].addEventListener('click', () => {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translateX(-" + (slideWidth * i) + "px)";
      curSlide = slideContents[i];
      activate(i);
      updateHeight();
    });
  }

  const activate = (index) => {
    for(let i = 0; i < headerButtons.length; i++){ headerButtons[i].children[0].className = (index === i)? "nav-item active" : "nav-item inactive"; }
  };
};

