import React from 'react';
import Logo from './Logo';
import LogoCandidate from '../../static/logoB2c.svg';
import LogoBusiness from '../../static/logoB2b.svg';
import LogoEducation from '../../static/logoEducacao.svg';
import LogoGoogle from '../../static/logoGoogle.svg';
import LogoFacebook from '../../static/logoFacebook.svg';

const types = {
  Business: props => (<Logo src={LogoBusiness} alt="Catho Empresas" {...props} />),
  Candidate: props => (<Logo src={LogoCandidate} alt="Catho" {...props} />),
  Education: props => (<Logo src={LogoEducation} alt="Catho Educação" {...props} />),
  Facebook: props => (<Logo src={LogoFacebook} alt="Facebook" {...props} />),
  Google: props => (<Logo src={LogoGoogle} alt="Google" {...props} />),
};

types.Business.displayName = 'Logo.Business';
types.Candidate.displayName = 'Logo.Candidate';
types.Education.displayName = 'Logo.Education';
types.Facebook.displayName = 'Logo.Facebook';
types.Google.displayName = 'Logo.Google';

export default types;
