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
  spaceBetween: 120,
  slidesPerView: 1,
  slidesPerGroup: 1,
  1440: {
    touch: false,
    simulateTouch: false,
    mousewheel: false,
    keyboard: false,
  }
});
