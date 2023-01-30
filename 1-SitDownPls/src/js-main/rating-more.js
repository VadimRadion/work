const buttonMore = document.querySelector('.rating__button')
const ratingLength = document.querySelectorAll('.rating__item').length
let items = 8

buttonMore.addEventListener('click', ratingList)

function ratingList() {
  items += 4;
  const array = Array.from(document.querySelector('.rating__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length === ratingLength) {
    buttonMore.style.display = 'none'
  }
}
