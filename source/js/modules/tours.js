// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

new Swiper('.tours__swiper', {
  modules: [Navigation, Mousewheel],
  loop: false,
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },
  spaceBetween: 18,
  slidesPerView: 1,
  slidesPerGroup: 1,
  updateOnWindowResize: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      touch: false,
      simulateTouch: false,
      mousewheel: false,
      keyboard: false,
    }
  }
});
