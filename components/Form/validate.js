
const trimString = str => (str ? str.replace(/(\.)?(_)?(-)?/g, '') : '');

const validate = {
  CPF: (value) => {
    if (String(trimString(value)).length !== 11) {
      return 'Deu milho no CPF';
    }

    return '';
  },
  CEP: (value) => {
    if (String(trimString(value)).length !== 8) {
      return 'Deu milho no CEP';
    }

    return '';
  },
};

export default validate;
