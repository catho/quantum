import React from 'react';
import { render } from '@testing-library/react';

import SocialButton from './SocialButton';

describe('SocialButton component', () => {
  it('Should match the snapshot', () => {
    expect(
      render(<SocialButton provider="google" />).asFragment(),
    ).toMatchSnapshot();
  });

  it('when provider prop is set to facebook', () => {
    expect(
      render(<SocialButton provider="facebook" />).asFragment(),
    ).toMatchSnapshot();
  });
});
