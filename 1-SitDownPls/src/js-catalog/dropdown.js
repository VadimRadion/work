let buttonOne = document.querySelector('.catalog__description-1')
let containerOne = document.querySelector('.catalog__list')

buttonOne.addEventListener('click', () => {
  containerOne.classList.toggle('catalog__list--active')
  buttonOne.classList.toggle('catalog__description--active')
})

let buttonTwo = document.querySelector('.catalog__description-2')
let containerTwo = document.querySelector('.wrapper')

buttonTwo.addEventListener('click', () => {
  containerTwo.classList.toggle('wrapper--active')
  buttonTwo.classList.toggle('catalog__description--active')
})

let buttonThree = document.querySelector('.catalog__description-3')
let containerThree = document.querySelector('.catalog__list-price')

buttonThree.addEventListener('click', () => {
  containerThree.classList.toggle('catalog__list-price--active')
  buttonThree.classList.toggle('catalog__description--active')
})
let buttonFour = document.querySelector('.catalog__description-4')
let containerFour = document.querySelector('.catalog__list-color')

buttonFour.addEventListener('click', () => {
  containerFour.classList.toggle('catalog__list-color--active')
  buttonFour.classList.toggle('catalog__description--active')
})

