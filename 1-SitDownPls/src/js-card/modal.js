let picture = document.querySelector('.card__images-one')
let block = document.querySelector('.card__block-swiper')
let button = document.querySelector('.card__button-swiper')
let bodyOpen = document.querySelector('.body-fon')

picture.addEventListener('click', () => {
  block.classList.add('card__block-swiper--active')
  document.body.classList.add('stop-scroll');
  bodyOpen.classList.add('body-fon--active');
})
button.addEventListener('click', () => {
  block.classList.remove('card__block-swiper--active')
  document.body.classList.remove('stop-scroll');
  bodyOpen.classList.remove('body-fon--active');
})
