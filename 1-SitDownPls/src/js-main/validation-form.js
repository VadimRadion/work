var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+ 7 (999) 999 99 99");
im.mask(selector);
im.mask(selector)

new JustValidate('.feedback__form', {

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
    email: 'Недопустимый формат',

  }
  ,

});
