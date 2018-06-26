import React from 'react';
import Input from './Input';
import masks from '../shared/masks';

const InputTypes = {
  CEP: props => (<Input mask={masks.cep} {...props} />),
  CNPJ: props => (<Input mask={masks.cnpj} {...props} />),
  CPF: props => (<Input mask={masks.cpf} {...props} />),
  Date: props => (<Input mask={masks.date} {...props} />),
  Phone: props => (<Input mask={masks.phone} {...props} />),
  Password: props => (<Input type="password" {...props} />),
};

InputTypes.CEP.displayName = 'Input.CEP';
InputTypes.CNPJ.displayName = 'Input.CNPJ';
InputTypes.CPF.displayName = 'Input.CPF';
InputTypes.Date.displayName = 'Input.Date';
InputTypes.Phone.displayName = 'Input.Phone';
InputTypes.Password.displayName = 'Input.Password';

export default InputTypes;
