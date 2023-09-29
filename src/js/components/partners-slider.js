// import Swiper from 'swiper';
// import { Grid, Pagination } from 'swiper/modules';

const eventSlider = new Swiper('.partners__slider', {
  // modules: [Grid, Pagination],
  speed: 400,
  pagination: {
    el: '.partners__slider-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  slidesPerView: 4,
  spaceBetween: 35,
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    // when window width is >= 480px
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      },
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 35,
      grid: {
        rows: 3,
        fill: 'row'
      },
    }
  }
});
