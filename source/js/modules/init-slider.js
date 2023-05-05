import Swiper from '../vendor/swiper';

const initTrainersSlider = () => {
  const trainersSlider = document.querySelector('.trainers__slider');

  if (trainersSlider) {
    (() =>
      new Swiper('.trainers__slider', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.trainers__slider-button-next',
          prevEl: '.trainers__slider-button-prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            initialSlide: 0,
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }
};
export {initTrainersSlider};
