import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    title: 'facebook title of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'http://twitter.com',
    title: 'twitter title of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'http://youtube.com',
    title: 'youtube title of the purpose of this icon',
  },
];

const SocialExampleChangingSize = () => (
  <Socials items={socialList} size="24" />
);

SocialExampleChangingSize.code = `
import React from 'react';
import Socials from '../../../components/Socials';

const socialList = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    title: 'facebook title of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'http://twitter.com',
    title: 'twitter title of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'http://youtube.com',
    title: 'youtube title of the purpose of this icon',
  },
];

const SocialExampleChangingSize = () => (
  <Socials items={socialList} size="24" />
)
`;

export default SocialExampleChangingSize;
