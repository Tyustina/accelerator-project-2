import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';

new Swiper('.reviews__swiper', {
  modules: [Navigation, Mousewheel],
  loop: false,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  spaceBetween: 30,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  speed: 600,
  breakpoints: {
    1440: {
      spaceBetween: 120,
      touch: false,
      simulateTouch: false,
      mousewheel: false,
      keyboard: false,
    }
  }
});
