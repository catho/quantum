import React from 'react';
import Input from './Input';
import masks from '../shared/masks';

const types = {
  CEP: props => (<Input mask={masks.cep} {...props} />),
  CNPJ: props => (<Input mask={masks.cnpj} {...props} />),
  CPF: props => (<Input mask={masks.cpf} {...props} />),
  Date: props => (<Input mask={masks.date} {...props} />),
  Phone: props => (<Input mask={masks.phone} {...props} />),
  Password: props => (<Input type="password" password {...props} />),
};

types.CEP.displayName = 'Input.CEP';
types.CNPJ.displayName = 'Input.CNPJ';
types.CPF.displayName = 'Input.CPF';
types.Date.displayName = 'Input.Date';
types.Phone.displayName = 'Input.Phone';

export default types;
