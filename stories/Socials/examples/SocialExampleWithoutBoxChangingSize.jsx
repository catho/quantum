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

const SocialExampleWithoutBoxChangingSize = () => (
  <Socials items={socialList} withBox={false} size="24" />
);

SocialExampleWithoutBoxChangingSize.code = `
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

const SocialExampleWithoutBoxChangingSize = () => (
  <Socials items={socialList} />
)
`;

export default SocialExampleWithoutBoxChangingSize;
