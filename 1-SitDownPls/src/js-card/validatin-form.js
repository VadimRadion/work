var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+ 7 (999) 999 99 99");
im.mask(selector);
im.mask(selector)

new JustValidate('.card__form', {

  colorWrong: '#FF6972',

  rules: {

    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    tel: {
      required: 'Недопустимый формат',
      function: 'Недопустимый формат',
    },
    name: 'Недопустимый формат',
  },
});




let feedback = document.querySelector('.card__freeback')
let buttonSubmit = document.querySelector('.card__button-submit')
let buttonOpen = document.querySelector('.card__button')
let form = document.querySelector('.card__form')
let feedbackModal = document.querySelector('.card__feedback')
let buttonClose = document.querySelector('.card__form-button')
let buttonFeedbackClose = document.querySelector('.card__feedback-button')

buttonOpen.addEventListener('click', () => {
  form.classList.add('card__form--active')
  document.body.classList.add('stop-scroll');
  bodyOpen.classList.add('body-fon--active');
})
buttonClose.addEventListener('click', () => {
  bodyOpen.classList.remove('body-fon--active');
  form.classList.remove('card__form--active')
  document.body.classList.remove('stop-scroll');
})
buttonSubmit.addEventListener('click', () => {
  feedback.classList.add('card__feedback--active')
  form.classList.remove('card__form--active')
  document.body.classList.add('stop-scroll');
})
buttonFeedbackClose.addEventListener('click', () => {
  feedback.classList.remove('card__feedback--active')
  bodyOpen.classList.remove('body-fon--active');
  document.body.classList.remove('stop-scroll');
})
