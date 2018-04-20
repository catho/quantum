
const trimString = str => (str ? str.replace(/\D+/g, '') : '');

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
};

export default validate;
