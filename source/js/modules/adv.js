import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
const advSwiperWrapper = document.querySelector('.adv__list');
const advSlides = advSwiperWrapper.querySelectorAll('.adv__item');
let advSwiper;
function createSwiper() {
  advSlides.forEach((advSlide) => {
    const duplicateSlide = advSlide.cloneNode(true);
    advSwiperWrapper.appendChild(duplicateSlide);
  });
  advSwiper = new Swiper('.adv__swiper', {
    modules: [Navigation, Mousewheel],
    loop: true,
    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    },
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    loopadditionalslides: 1,
    speed: 800,
  });
}

function destroySwiper() {
  if (advSwiper) {
    advSwiper.destroy(true, true);
    advSwiper = undefined;

    const duplicatedSlides = advSwiperWrapper.querySelectorAll('.adv__item:not(:first-child)');
    duplicatedSlides.forEach((slide) => {
      advSwiperWrapper.removeChild(slide);
    });
  }
}

function initSwiper() {
  if (window.innerWidth >= 1440 && !advSwiper) {
    createSwiper();
  } else if (window.innerWidth < 1440 && advSwiper) {
    destroySwiper();
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
window.addEventListener('resize', initSwiper);
