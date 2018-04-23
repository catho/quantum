import moment from 'moment';

const trimString = str => (str ? str.replace(/\D+/g, '') : '');

const msg = {
  REQUIRED: 'Campo obrigatório',
  CPF: 'Deu milho no CEP',
  DATE: 'Deu milho na data',
  MIN: min => `Minimo de ${min} caracteres`,
  MAX: max => `Maximo de ${max} caracteres`,
};

const validate = {
  CPF: ({ value }, trimed = trimString(value)) => {
    const cpfSize = 11;

    if (!trimed || trimed.length !== cpfSize) {
      return msg.CPF;
    }

    for (let i = 0; i < 10; i += 1) {
      if (trimed === String(i).repeat(cpfSize)) {
        return msg.CPF;
      }
    }

    const validPosition = (position) => {
      let sum = 0;
      let rev;

      for (let i = 0; i < position; i += 1) {
        sum += Number(trimed.charAt(i)) * ((position + 1) - i);
      }

      rev = cpfSize - (sum % cpfSize);
      rev = (rev === 10 || rev === cpfSize) ? 0 : rev;

      return rev === Number(trimed.charAt(position));
    };

    return validPosition(9) && validPosition(10) ? '' : msg.CPF;
  },
  CEP: ({ value }) => {
    if (String(trimString(value)).length !== 8) {
      return 'Deu milho no CEP';
    }

    return '';
  },
  DATE: ({ value }) => {
    const date = moment(value, 'DD/MM/YYYY');
    return date.isValid() ? '' : msg.DATE;
  },
  MIN: ({ value, trimmed = trimString(value), min }) => {
    if (!!min && String(trimmed).length < min) {
      return msg.MIN(min);
    }
    return '';
  },
  MAX: ({ value, trimmed = trimString(value), max }) => {
    if (!!max && String(trimmed).length > max) {
      return msg.MAX(max);
    }
    return '';
  },
  REQUIRED: ({ value }) => (!value ? msg.REQUIRED : ''),
  EMAIL: ({ value }) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) ? '' : msg.EMAIL;
  },
};

export default validate;
