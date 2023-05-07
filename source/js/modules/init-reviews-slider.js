import Swiper from '../vendor/swiper';

const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('.reviews__slider');

  if (reviewsSlider) {
    (() =>
      new Swiper('.reviews__slider', {
        direction: 'horizontal',
        slidesPerView: '1',
        autoHeight: true,
        spaceBetween: 32,
        navigation: {
          nextEl: '.reviews__slider-button-next',
          prevEl: '.reviews__slider-button-prev',
        },
        breakpoints: {
          768: {
            spaceBetween: 57,
          },
        },
      }))();
  }
};
export {initReviewsSlider};
