import moment from 'moment';

const removeNonDigit = str => (str ? str.replace(/\D+/g, '') : '');

const msg = {
  REQUIRED: 'Campo obrigatório',
  CPF: 'CPF inválido',
  CEP: 'CEP inválido',
  DATE: 'Data inválida',
  EMAIL: 'E-mail inválido',
  MINLENGTH: min => `Mínimo de ${min} caracteres requerido`,
  MAXLENGTH: max => `Maximo de ${max} caracteres excedido`,
};

export default {
  REQUIRED: ({ value }) => (value ? '' : msg.REQUIRED),
  CPF: ({ value }, cpf = removeNonDigit(value)) => {
    const CPF_SIZE = 11;

    if (!cpf || cpf.length !== CPF_SIZE) {
      return msg.CPF;
    }

    for (let i = 0; i < 10; i += 1) {
      if (cpf === String(i).repeat(CPF_SIZE)) {
        return msg.CPF;
      }
    }

    const validPosition = (position) => {
      let sum = 0;
      let rev;

      for (let i = 0; i < position; i += 1) {
        sum += Number(cpf.charAt(i)) * ((position + 1) - i);
      }

      rev = CPF_SIZE - (sum % CPF_SIZE);
      rev = (rev === 10 || rev === CPF_SIZE) ? 0 : rev;

      return rev === Number(cpf.charAt(position));
    };

    return validPosition(9) && validPosition(10) ? '' : msg.CPF;
  },
  CEP: ({ value }) => {
    const filtered = String(removeNonDigit(value));

    return filtered.length !== 8 ? msg.CEP : '';
  },
  DATE: ({ value }) => {
    const date = moment(value, 'DD/MM/YYYY');
    return date.isValid() ? '' : msg.DATE;
  },
  MINLENGTH: ({ value = '', minLength }) => {
    if (!!minLength && String(value).length < Number(minLength)) {
      return msg.MINLENGTH(minLength);
    }
    return '';
  },
  MAXLENGTH: ({ value, maxLength }) => {
    if (!!maxLength && String(value).length > Number(maxLength)) {
      return msg.MAXLENGTH(maxLength);
    }
    return '';
  },
  EMAIL: ({ value }) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) ? '' : msg.EMAIL;
  },
};
