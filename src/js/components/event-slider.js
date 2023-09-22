import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const eventSlider = new Swiper('.events__slider', {
  speed: 400,
  spaceBetween: 35,
  slidesPerView: 3,
  navigation: {
    nextEl: '.events__slider-button--next',
    prevEl: '.events__slider-button--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
});
