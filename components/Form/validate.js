
const trimString = str => (str ? str.replace(/\D+/g, '') : '');

const msg = {
  REQUIRED: 'Campo obrigatório',
  CPF: 'Deu milho no CEP',
  MIN: min => `Minimo de ${min} caracteres requerido`,
  MAX: max => `Maximo de ${max} caracteres excedido`,
};

const validate = {
  CPF: (value) => {
    const val = trimString(value);
    const errorMsg = 'Deu milho no CPF';

    if (!val ||
      val.length !== 11 ||
      val === '00000000000' ||
      val === '11111111111' ||
      val === '22222222222' ||
      val === '33333333333' ||
      val === '44444444444' ||
      val === '55555555555' ||
      val === '66666666666' ||
      val === '77777777777' ||
      val === '88888888888' ||
      val === '99999999999') {
      return errorMsg;
    }

    // Valida 1o digito
    let sum = 0;

    for (let i = 0; i < 9; i += 1) {
      sum += Number(val.charAt(i)) * (10 - i);
    }

    let rev = 11 - (sum % 11);

    if (rev === 10 || rev === 11) {
      rev = 0;
    }

    if (rev !== Number(val.charAt(9))) {
      return errorMsg;
    }

    // Valida 2o digito
    sum = 0;
    for (let i = 0; i < 10; i += 1 ) {
      sum += Number(val.charAt(i)) * (11 - i);
    }

    rev = 11 - (sum % 11);

    if (rev === 10 || rev === 11) {
      rev = 0;
    }

    if (rev !== Number(val.charAt(10))) {
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

};

export default validate;
