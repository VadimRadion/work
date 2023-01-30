let swiper = new Swiper(".mySwiper", {
  spaceBetween: 78,
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  freeMode: true,
  watchSlidesProgress: true,
  loop: false,
  navigation: {
    nextEl: ".card-button-next",
    prevEl: ".card-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    1022: {
      slidesPerView: 'auto',


    },
    1026: {
      slidesPerView: 3,
      slidesPerGroup: 3,


    },
    1250: {
      slidesPerView: 'auto',
      slidesPerGroup: 4,
    },
  }

});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 110,

  thumbs: {
    swiper: swiper,
  },
});

const swiperProducts = new Swiper('.products__swiper', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 32,
  loop: false,
  navigation: {
    prevEl: ".products-button-prev",
    nextEl: ".products-button-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,


    },
    768: {

      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,


    },
    1250: {
      slidesPerView: 4,
      slidesPerGroup: 4,



    },
  }
});
