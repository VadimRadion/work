const swiper = new Swiper('.hero__swiper', {
  speed: 500, loop: true,

  pagination: {
    el: '.swiper-pagination',

    clickable: true,

  }
});
//---------------------------------------------
const swiperSpecial = new Swiper('.special__swiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 3,
  spaceBetween: 32,
  loop: false,
  navigation: {
    prevEl: '.special-button-prev',
    nextEl: '.special-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
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
      slidesPerView: 'auto',
      slidesPerGroup: 3,


    },
  },
});
//-----------------------------------------------
const swiperUsful = new Swiper('.usful__swiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 32,
  loop: false,
  navigation: {
    prevEl: '.usful-button-prev',
    nextEl: '.usful-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
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
      slidesPerGroup: 2,


    },
    1250: {
      slidesPerView: 2,



    },
  }
});
