// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation,Pagination} from 'swiper/modules';
import 'swiper/css';

new Swiper('.hero__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'main-slider__bullet',
    bulletActiveClass: 'main-slider__bullet--active',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className){
      return '<button class="' + className + '" aria-label="Перейти к слайду ' + (index + 1) + '"></button>';
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});
