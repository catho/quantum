const validate = {
  CPF: value => String(value).length !== 11 && 'Deu milho no CPF',
};

export default validate;
