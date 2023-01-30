let burger = document.querySelector('.burger')
let menu = document.querySelector('.header__nav')
let menulinks = document.querySelector('.header__center-reference')
let menuLinks = menu.querySelectorAll('.header__center-item');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active')
  menu.classList.toggle('header__nav--active')
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

