import { render } from '@testing-library/react';

import SocialType from './SocialType';

describe('<SocialType />', () => {
  it('should match snapshots', () => {
    const SOCIAL_TYPES = [
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

    SOCIAL_TYPES.forEach(socialType => {
      expect(render(socialType).asFragment()).toMatchSnapshot();
    });
  });
});
