import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import Choices from 'choices.js';

const validateForms = (selector, rules, url, nonce, action, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);
    formData.append('action', action);
    formData.append('nonce', nonce);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            form.querySelector('.form__button').insertAdjacentHTML('afterend', `<p class="form-success">Спасибо за заявку! Мы скоро с вами свяжемся</p>`)
          }
          console.log('Отправлено');
        } else {
          form.querySelector('.form__button').insertAdjacentHTML('afterend', `<p class="just-validate-error-label">Что-то пошло не так!</p>`)
        }
      }
    }

    xhr.open('POST', url, true);
    xhr.send(formData);

    ev.target.reset();
  })

};

const callbackFormRules = [
  {
    ruleSelector: '.callback-form__input--select',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Выберите время'
      }
    ]
  },
  {
    ruleSelector: '.callback-form__input--tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const eventFormRules = [
  {
    ruleSelector: '.event-callback__input--select',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Выберите событие'
      }
    ]
  },
  {
    ruleSelector: '.event-callback__input--name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя'
      }
    ]
  },
  {
    ruleSelector: '.event-callback__input--phone',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const afterForm = () => {
  modal.close();

  modal.open('thanks');

  setTimeout(()=>{
    modal.close();
  }, 7000)
};

validateForms('[data-form="callback"]', callbackFormRules, form_object.url, form_object.nonce, 'form_action', afterForm)
validateForms('[data-form="eventCallback"]', eventFormRules, form_object.url, form_object.nonce, 'form_action', afterForm)

const select = document.querySelector('.callback-form__input--select');
const choices = new Choices(select, {
  searchEnabled: false,
});

const eventCallbackSelect = document.querySelector('.event-callback__input--select');
const eventChoices = new Choices(eventCallbackSelect, {
  searchEnabled: false,
});
