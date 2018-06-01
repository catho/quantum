import React from 'react';
import Logo from './Logo';
import LogoCandidate from '../../static/logoB2c.svg';
import LogoBusiness from '../../static/logoB2b.svg';
import LogoEducation from '../../static/logoEducacao.svg';
import LogoGoogle from '../../static/logoGoogle.svg';
import LogoFacebook from '../../static/logoFacebook.svg';

const LogoTypes = {
  Business: props => (<Logo src={LogoBusiness} alt="Catho Empresas" {...props} />),
  Candidate: props => (<Logo src={LogoCandidate} alt="Catho" {...props} />),
  Education: props => (<Logo src={LogoEducation} alt="Catho Educação" {...props} />),
  Facebook: props => (<Logo src={LogoFacebook} alt="Facebook" {...props} />),
  Google: props => (<Logo src={LogoGoogle} alt="Google" {...props} />),
};

LogoTypes.Business.displayName = 'Logo.Business';
LogoTypes.Candidate.displayName = 'Logo.Candidate';
LogoTypes.Education.displayName = 'Logo.Education';
LogoTypes.Facebook.displayName = 'Logo.Facebook';
LogoTypes.Google.displayName = 'Logo.Google';

export default LogoTypes;
