let tabsButton1 = document.querySelector('.catalog__btn-1')
let tabsButton2 = document.querySelector('.catalog__btn-2')
let tabsButton3 = document.querySelector('.catalog__btn-3')
let tabsItem = document.querySelectorAll('.catalog__item-rating')

tabsButton2.addEventListener('click', () => {
  tabsButton1.classList.remove('catalog__button--active')
  tabsButton3.classList.remove('catalog__button--active')
  tabsItem.forEach(el => el.classList.add('catalog__item-rating--active'));
  tabsItem.forEach(el => el.classList.remove('catalog__item-rating--activity'));
  gsap.fromTo('.catalog__item-rating--active', { opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "circle" });
  tabsItem.forEach(el => el.classList.add('catalog__item-rating--disabled'));
  tabsButton2.classList.add('catalog__button--active')


})
tabsButton1.addEventListener('click', () => {
  tabsButton2.classList.remove('catalog__button--active')
  tabsButton3.classList.remove('catalog__button--active')
  gsap.fromTo('.catalog__item-rating--active', { opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "circle" });
  tabsItem.forEach(el => el.classList.remove('catalog__item-rating--active'));
  tabsItem.forEach(el => el.classList.remove('catalog__item-rating--disabled'));
  tabsItem.forEach(el => el.classList.remove('catalog__item-rating--activity'));
  tabsButton1.classList.add('catalog__button--active')


})

tabsButton3.addEventListener('click', () => {
  tabsButton2.classList.remove('catalog__button--active')
  tabsButton1.classList.remove('catalog__button--active')
  tabsItem.forEach(el => el.classList.remove('catalog__item-rating--active'));
  tabsItem.forEach(el => el.classList.add('catalog__item-rating--activity'));
  gsap.fromTo('.catalog__item-rating--activity', { opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "circle" });
  tabsItem.forEach(el => el.classList.add('catalog__item-rating--disabled'));
  tabsButton3.classList.add('catalog__button--active')


})

