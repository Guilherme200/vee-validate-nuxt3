import {defineRule, configure} from 'vee-validate';
import * as Rules from '@vee-validate/rules';
import {localize, setLocale} from '@vee-validate/i18n'
import pt_BR from '@vee-validate/i18n/dist/locale/pt_BR.json';

export default defineNuxtPlugin(() => {
  for (const [ruleName, rule] of Object.entries(Rules)) {
    if (ruleName && rule) {
      defineRule(ruleName, rule);
    }
  }

  defineRule('strongPassword', value => {
    if (!value || !value.length) {
      return true;
    }
    if (!/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,22}$/.test(value)) {
      return 'Insira uma senha forte';
    }
    return true;
  });
});

localize({pt_BR});

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true,
  generateMessage: localize('pt_BR', {
    names: {
      'form.accountCustomer.email': 'email',
      'form.accountCustomer.phone': 'telefone',
      'form.accountCustomer.cellphone': 'celular',
      'form.accountCustomer.internalCode': 'código interno',
      'form.accountCustomer.externalCode': 'código externo',
    },
  }),
});

setLocale('pt_BR')