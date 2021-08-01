const slideSpeed = 300; // slide speed
const sidePadding = 130;

window.onload = () => {
  slideWrap = document.querySelector('.slide-wrap');
  slideList = document.querySelector('.slide-list');
  slideContents = document.querySelectorAll('.slide-content');
  slideLen = slideContents.length;
  slideBox = document.querySelector('.slide-box');
  headerButtons = document.querySelector('header').querySelectorAll('button')
  curSlide = slideContents[0];
  updateHeight();
  setEventListeners();
}

const updateHeight = () => { slideBox.style.height = curSlide.clientHeight; }

// sets the buttons working
const setEventListeners = () => {
  for(let i = 0; i < slideLen; i++){
    headerButtons[i].addEventListener('click', () => {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translateX(-" + (document.querySelector('.main-container').clientWidth * i) + "px)";
      curSlide = slideContents[i];
      activate(i);
      updateHeight();
    });
  }

  const activate = (index) => {
    for(let i = 0; i < slideLen; i++){ headerButtons[i].children[0].className = (index === i)? "nav-item active" : "nav-item inactive"; }
  };
};

