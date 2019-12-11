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
        title="facebook title"
      />,
      <SocialType
        type="twitter"
        url="http://twitter.com"
        title="twitter title"
      />,
      <SocialType
        type="youtube"
        url="http://youtube.com"
        title="youtube title"
      />,
    ];

    SOCIALTYPES.forEach(socialType => {
      const SocialTypeComponent = mount(socialType);
      expect(toJson(SocialTypeComponent)).toMatchSnapshot();
      SocialTypeComponent.unmount();
    });
  });
});
