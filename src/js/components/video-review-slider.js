import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const reviewSlider = new Swiper('.video-reviews__slider', {
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
});
