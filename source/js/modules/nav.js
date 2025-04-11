const bodyPage = document.querySelector('.page-body');
const bodyOverlay = document.querySelector('.page-body__overlay');
const navContainer = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');

navButton.addEventListener('click', () =>{
  if(navContainer.classList.contains('nav--opened')) {
    navContainer.classList.remove('nav--opened');
    navContainer.classList.add('nav--closed');
    navButton.classList.remove('nav__button--opened');
    navButton.classList.add('nav__button--closed');
    bodyOverlay.style.display = 'none';
    bodyOverlay.style.opacity = '0';
    bodyPage.style.overflow = 'visible';
  }else {
    navContainer.classList.remove('nav--closed');
    navContainer.classList.add('nav--opened');
    navButton.classList.remove('nav__button--closed');
    navButton.classList.add('nav__button--opened');
    bodyOverlay.style.display = 'block';
    bodyOverlay.style.opacity = '1';
    bodyPage.style.overflow = 'hidden';
  }
});
