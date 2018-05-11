import React from 'react';
import Logo from './Logo';
import LogoB2C from '../../static/logoB2c.svg';
import LogoB2B from '../../static/logoB2b.svg';
import LogoEducacao from '../../static/logoEducacao.svg';

const types = {
  B2B: props => (<Logo src={LogoB2B} {...props} />),
  B2C: props => (<Logo src={LogoB2C} {...props} />),
  Educacao: props => (<Logo src={LogoEducacao} {...props} />),
};

types.B2B.displayName = 'Logo.B2B';
types.B2C.displayName = 'Logo.B2C';
types.Educacao.displayName = 'Logo.Educacao';

export default types;
