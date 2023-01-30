// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('nav__link-item');

burger.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// poisk
let searchOpenbtn = document.querySelector('.header__button');
let searchBox = document.querySelector('.header__form-search');
let searchClosebtn = document.querySelector('.header__btn-second');

searchOpenbtn.addEventListener('click', () => {
  searchBox.classList.add('header__form-search--active')
})
searchClosebtn.addEventListener('click', () => {
  searchBox.classList.remove('header__form-search--active');
})

// tab
let tabsBtn = document.querySelectorAll('.work__btn');
let tabsItem = document.querySelectorAll('.work__block');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('work__btn--active') });
    e.currentTarget.classList.add('work__btn--active');
    tabsItem.forEach(function (element) { element.classList.remove('work__block--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__block--active');
  });
});
// swiper
const block = document.querySelector(".hero__block")
const swiper = new Swiper('.swiper', {
  speed: 500,
  a11y: {
  paginationBulletMessage:'Перейти к слайду {{index}}'},
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

  }
});

// Accordionp
new Accordion('.accordion');
