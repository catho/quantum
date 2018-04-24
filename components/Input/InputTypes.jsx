import React from 'react';
import Input from './Input';
import masks from './masks';

const types = {
  CEP: props => (<Input mask={masks.cep} {...props} />),
  CNPJ: props => (<Input mask={masks.cnpj} {...props} />),
  CPF: (props) => {
    console.log('-----------');
    console.log(props);

    // return <Input mask={masks.cpf} {...props} />;
    return <p>Socorro</p>;
  },
  Date: props => (<Input mask={masks.date} {...props} />),
  Phone: props => (<Input mask={masks.phone} {...props} />),
};

types.CEP.displayName = 'Input.CEP';
types.CNPJ.displayName = 'Input.CNPJ';
types.CPF.displayName = 'Input.CPF';
types.Date.displayName = 'Input.Date';
types.Phone.displayName = 'Input.Phone';

export default types;
