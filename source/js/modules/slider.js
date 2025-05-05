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
    type: 'bullets',
    clickable: true,
    bulletActiveClass: 'main-slider__bullet--active',
    renderBullet: function (index, className) {
      return `<button class="${className} main-slider__bullet" tabindex="0"></button>`;
    },
  },
  on: {
    slideChange: function () {
      this.slides.forEach((slide, index) => {
        const isActive = index === this.activeIndex;
        slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
          .forEach((el) => {
            el.tabIndex = isActive ? 0 : -1;
          });
      });
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});
