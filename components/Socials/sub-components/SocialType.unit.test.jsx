import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialType from './SocialType';

describe('<SocialType />', () => {
  it('should match snapshots', () => {
    const SOCIALTYPES = [
      <SocialType
        type="facebook"
        url="http://facebook.com"
        description="facebook description"
      />,
      <SocialType
        type="twitter"
        url="http://twitter.com"
        description="twitter description"
      />,
      <SocialType
        type="youtube"
        url="http://youtube.com"
        description="youtube description"
      />,
    ];

    SOCIALTYPES.forEach(socialType => {
      const SocialTypeComponent = mount(socialType);
      expect(toJson(SocialTypeComponent)).toMatchSnapshot();
      SocialTypeComponent.unmount();
    });
  });
});
