import Swiper from 'swiper';
import {Navigation, Mousewheel} from 'swiper/modules';
import 'swiper/css';

if(window.innerWidth >= 1440) {
  new Swiper('.adv__swiper', {
    modules: [Navigation, Mousewheel],
    loop: false,
    navigation: {
      nextEl: '.adv__button--next',
      prevEl: '.adv__button--prev',
    },
    spaceBetween: 40,
    slidesPerView: 1,
    slidesPerGroup: 1,
  }
  );
}

