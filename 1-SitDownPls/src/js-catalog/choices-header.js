const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: true,
  allowHTML: true,
});
const select = document.querySelector('#select-form');
const choices2 = new Choices(select, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: true,
  allowHTML: true,
});
