import React from 'react';
import renderer from 'react-test-renderer';
import SocialButton from './SocialButton';

describe('SocialButton component', () => {
  it('Should match the snapshot', () => {
    expect(
      renderer.create(<SocialButton provider="google" title="test" />).toJSON(),
    ).toMatchSnapshot();
  });

  it('when provider prop is set to facebook', () => {
    expect(
      renderer
        .create(<SocialButton provider="facebook" title="test" />)
        .toJSON(),
    ).toMatchSnapshot();
  });
});
