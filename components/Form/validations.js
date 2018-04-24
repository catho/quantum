import moment from 'moment';

const removeNonDigit = str => (str ? str.replace(/\D+/g, '') : '');

const msg = {
  REQUIRED: 'Campo obrigatório',
  CPF: 'CPF inválido',
  CEP: 'CEP inválido',
  DATE: 'Deu milho na data',
  EMAIL: 'E-mail inválido',
  MIN: min => `Minimo de ${min} caracteres`,
  MAX: max => `Maximo de ${max} caracteres`,
};

class Validations {
  static Required({ value }) { return value ? '' : msg.REQUIRED; }

  static CPF({ value }, cpf = removeNonDigit(value)) {
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
  }
  static CEP({ value }) {
    const filtered = String(removeNonDigit(value));

    return filtered.length !== 8 ? msg.CEP : '';
  }
  static Date({ value }) {
    const date = moment(value, 'DD/MM/YYYY');
    return date.isValid() ? '' : msg.DATE;
  }
  static MinLength({ value = '', minLength }) {
    if (!!minLength && String(value).length < minLength) {
      return msg.MIN(minLength);
    }
    return '';
  }
  static MaxLength({ value = '', maxLength }) {
    if (!!maxLength && String(value).length > maxLength) {
      return msg.MAX(maxLength);
    }
    return '';
  }
  static Email({ value }) {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) ? '' : msg.EMAIL;
  }
}

export default Validations;
