import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const reviewSlider = new Swiper('.video-reviews__slider', {
  modules: [Navigation, Pagination],
  speed: 400,
  spaceBetween: 35,
  slidesPerView: 3,
  navigation: {
    nextEl: '.video-reviews__slider-button--next',
    prevEl: '.video-reviews__slider-button--prev',
  },
  pagination: {
    el: '.video-reviews__slider-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
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
