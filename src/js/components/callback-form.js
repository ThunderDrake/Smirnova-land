import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import Choices from 'choices.js';

export const validateForms = (selector, rules, afterSend) => {
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

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
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

validateForms('[data-form="callback"]', callbackFormRules)
validateForms('[data-form="eventCallback"]', eventFormRules)

const select = document.querySelector('.callback-form__input--select');
const choices = new Choices(select, {
  searchEnabled: false,
});

const eventCallbackSelect = document.querySelector('.event-callback__input--select');
const eventChoices = new Choices(eventCallbackSelect, {
  searchEnabled: false,
});
