import moment from 'moment';

const trimString = str => (str ? str.replace(/\D+/g, '') : '');

const msg = {
  REQUIRED: 'Campo obrigatório',
  CPF: 'Deu milho no CEP',
  DATE: 'Deu milho na data',
  EMAIL: 'E-mail inválido',
  MIN: min => `Minimo de ${min} caracteres requerido`,
  MAX: max => `Maximo de ${max} caracteres excedido`,
};

const validate = {
  CPF: (value) => {
    const val = trimString(value);
    const errorMsg = 'Deu milho no CPF';
    const cpfSize = 11;

    if (!val || val.length !== cpfSize) {
      return errorMsg;
    }

    for (let i = 0; i < 10; i += 1) {
      if (val === String(i).repeat(cpfSize)) {
        return errorMsg;
      }
    }

    const validPosition = (position) => {
      let sum = 0;
      let rev;

      for (let i = 0; i < position; i += 1) {
        sum += Number(val.charAt(i)) * ((position + 1) - i);
      }

      rev = cpfSize - (sum % cpfSize);
      rev = (rev === 10 || rev === cpfSize) ? 0 : rev;

      return rev === Number(val.charAt(position));
    };

    if (!validPosition(9) || !validPosition(10)) {
      return errorMsg;
    }

    return '';
  },
  CEP: (value) => {
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
