import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    description: 'facebook description of the purpose of this icon',
  },
];

const SocialExampleFacebook = () => <Socials items={socialList} />;

SocialExampleFacebook.code = `
import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    description: 'facebook description of the purpose of this icon',
  },
];

const SocialExampleFacebook = () => (
  <Socials items={socialList} />
)
`;

export default SocialExampleFacebook;
