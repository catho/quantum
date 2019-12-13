import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    title: 'facebook title of the purpose of this icon',
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
    title: 'facebook title of the purpose of this icon',
  },
];

const SocialExampleFacebook = () => (
  <Socials items={socialList} />
)
`;

export default SocialExampleFacebook;
