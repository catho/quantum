import React from 'react';
import Input from './Input';

const MASKS = {
  cep: '99999-999',
  cnpj: '99.999.999/9999-99',
  cpf: '999.999.999-99',
  date: '99/99/9999',
  phone: (value) => {
    const numbers = value.match(/\d/g);
    const numberLength = numbers ? numbers.join('').length : 0;

    return numberLength > 10 ? '(99) 99999-9999' : '(99) 9999-9999';
  },
};

const types = {
  CEP: props => (<Input mask={MASKS.cep} {...props} />),
  CNPJ: props => (<Input mask={MASKS.cnpj} {...props} />),
  CPF: props => (<Input mask={MASKS.cpf} {...props} />),
  Date: props => (<Input mask={MASKS.date} {...props} />),
  Phone: props => (<Input mask={MASKS.phone} {...props} />),
  Password: props => (<Input type="password" {...props} />),
};

types.CEP.displayName = 'Input.CEP';
types.CNPJ.displayName = 'Input.CNPJ';
types.CPF.displayName = 'Input.CPF';
types.Date.displayName = 'Input.Date';
types.Phone.displayName = 'Input.Phone';

export default types;
