
const trimString = str => (str ? str.replace(/(\.)?(_)?(-)?/g, '') : '');

const validate = {
  CPF: (value) => {
    // if (String(trimString(value)).length !== 11) {
    //   return 'Deu milho no CPF';
    // }

    // return '';
  },
  CEP: (value) => {
    // if (String(trimString(value)).length !== 8) {
    //   return 'Deu milho no CEP';
    // }

    // return '';
  },
  MIN: ({ value, trimmed = trimString(value), min }) => {
    if (!!min && String(trimmed).length < min) {
      return `Minimo de ${min} caracteres requerido`;
    }
    return '';
  },
  MAX: ({ value, trimmed = trimString(value), max }) => {
    if (!!max && String(trimmed).length > max) {
      return `Maximo de ${max} caracteres excedido`;
    }
    return '';
  },
};

export default validate;
