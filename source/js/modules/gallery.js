import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';

new Swiper('.gallery__swiper', {
  modules: [Navigation, Mousewheel],
  loop: false,
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },
  slidesPerView: 2,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
    }
  }
});
