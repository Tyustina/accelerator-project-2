import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';

let advSwiper;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1440 && !advSwiper) {
    advSwiper = new Swiper('.responsive-block', {
      modules: [Navigation, Mousewheel],
      loop: true,
      navigation: {
        nextEl: '.adv__button--next',
        prevEl: '.adv__button--prev',
      },
      spaceBetween: 40,
      slidesPerView: 1,
      slidesPerGroup: 2,
    });
  } else if (screenWidth < 1440 && advSwiper) {
    advSwiper.destroy();
    advSwiper = undefined;
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
window.addEventListener('resize', initSwiper);
