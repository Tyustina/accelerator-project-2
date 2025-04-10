const navContainer = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');

navButton.addEventListener('click', () =>{
  if(navContainer.classList.contains('nav--opened')) {
    navContainer.classList.remove('nav--opened');
    navContainer.classList.add('nav--closed');
    navButton.classList.remove('nav__button--opened');
    navButton.classList.add('nav__button--closed');
  }else {
    navContainer.classList.remove('nav--closed');
    navContainer.classList.add('nav--opened');
    navButton.classList.remove('nav__button--closed');
    navButton.classList.add('nav__button--opened');
  }
});
