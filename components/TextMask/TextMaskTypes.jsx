import React from 'react';
import TextMask from './TextMask';
import masks from '../shared/masks';

const TextMaskTypes = {
  CEP: props => <TextMask mask={masks.cep} {...props} />,
  CNPJ: props => <TextMask mask={masks.cnpj} {...props} />,
  CPF: props => <TextMask mask={masks.cpf} {...props} />,
  Date: props => <TextMask mask={masks.date} {...props} />,
  Phone: props => <TextMask mask={masks.phone} {...props} />,
};

function setDisplayName(name) {
  TextMaskTypes[name].displayName = `TextMask.${name}`;
}

Object.keys(TextMaskTypes).map(setDisplayName);

export default TextMaskTypes;
