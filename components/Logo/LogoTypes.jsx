import React from 'react';
import Logo from './Logo';
import LogoB2C from '../../static/logoB2c.svg';
import LogoB2B from '../../static/logoB2b.svg';
import LogoCourse from '../../static/logoEducacao.svg';
import LogoGoogle from '../../static/logoGoogle.svg';
import LogoFacebook from '../../static/logoFacebook.svg';

const types = {
  B2B: props => (<Logo src={LogoB2B} {...props} />),
  B2C: props => (<Logo src={LogoB2C} {...props} />),
  Course: props => (<Logo src={LogoCourse} {...props} />),
  Facebook: props => (<Logo src={LogoFacebook} {...props} />),
  Google: props => (<Logo src={LogoGoogle} {...props} />),
};

types.B2B.displayName = 'Logo.B2B';
types.B2C.displayName = 'Logo.B2C';
types.Course.displayName = 'Logo.Course';

export default types;
