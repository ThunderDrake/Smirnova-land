import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const eventSlider = new Swiper('.events__slider', {
  modules: [Navigation, Pagination],
  speed: 400,
  navigation: {
    nextEl: '.events__slider-button--next',
    prevEl: '.events__slider-button--prev',
  },
  pagination: {
    el: '.events__slider-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    769: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1025: {
      spaceBetween: 35,
      slidesPerView: 3,
    }
  }
});
