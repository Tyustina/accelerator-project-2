import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
let gallerySwiper;

if (window.innerWidth < 1440 && !gallerySwiper) {

  gallerySwiper = new Swiper('.gallery__swiper', {
    modules: [Navigation, Mousewheel],
    loop: true,
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
} else if (window.innerWidth >= 1440 && gallerySwiper) {
  gallerySwiper.destroy(true, true);
  gallerySwiper = undefined;
}
