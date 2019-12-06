import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Socials from './Socials';

const allSocialsList = [
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

describe('<Socials />', () => {
  it('should match snapshots', () => {
    const SOCIALS = [
      <Socials items={allSocialsList} />,
      <Socials items={[allSocialsList[0]]} />,
      <Socials items={allSocialsList} size="24" />,
    ];

    SOCIALS.forEach(social => {
      const SocialComponent = mount(social);
      expect(toJson(SocialComponent)).toMatchSnapshot();
      SocialComponent.unmount();
    });
  });
});
