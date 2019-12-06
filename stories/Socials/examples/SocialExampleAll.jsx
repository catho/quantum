import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    description: 'facebook description of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'http://twitter.com',
    description: 'twitter description of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'http://youtube.com',
    description: 'youtube description of the purpose of this icon',
  },
];

const SocialExampleAll = () => <Socials items={socialList} />;

SocialExampleAll.code = `
import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    description: 'facebook description of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'http://twitter.com',
    description: 'twitter description of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'http://youtube.com',
    description: 'youtube description of the purpose of this icon',
  },
];

const SocialExampleAll = () => (
  <Socials items={socialList} />
)
`;

export default SocialExampleAll;
