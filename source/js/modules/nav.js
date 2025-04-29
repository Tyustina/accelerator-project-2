const bodyPage = document.querySelector('.page-body');
const bodyOverlay = document.querySelector('.overlay');
const navContainer = document.querySelector('.nav');
const navButton = document.querySelector('.nav__button');
const navItems = navContainer.querySelectorAll('.nav__link');

navButton.addEventListener('click', () => {
  if (navContainer.classList.contains('nav--opened')) {
    closeMenu();
    hideOverlay();
  } else {
    openMenu();
    showOverlay();
  }
});
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    closeMenu();
    hideOverlay();
  });
});

function closeMenu() {
  navContainer.classList.remove('nav--opened');
  navContainer.classList.add('nav--closed');
  navButton.classList.remove('nav__button--opened');
  navButton.classList.add('nav__button--closed');
}

function openMenu() {
  navContainer.classList.remove('nav--closed');
  navContainer.classList.add('nav--opened');
  navButton.classList.remove('nav__button--closed');
  navButton.classList.add('nav__button--opened');
}

function showOverlay() {
  bodyOverlay.style.display = 'block';
  bodyOverlay.style.opacity = '1';
  bodyPage.style.overflow = 'hidden';
}

function hideOverlay() {
  bodyOverlay.style.display = 'none';
  bodyOverlay.style.opacity = '0';
  bodyPage.style.overflow = 'visible';
}
