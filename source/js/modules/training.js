import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

new Swiper('.training__swiper', {
  modules: [Navigation, Mousewheel],
  loop: false,
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
    },
    1440: {
      initialSlide: 0,
      slidesPerView: 4,
      touch: false,
      simulateTouch: false,
      mousewheel: false,
      keyboard: false,
    }
  }
});
