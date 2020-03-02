import React from 'react';
import renderer from 'react-test-renderer';
import GoogleIcon from './GoogleIcon';

describe('GoogleIcon component', () => {
  it('Should match the snapshot', () => {
    expect(
      renderer.create(<GoogleIcon title="test" />).toJSON(),
    ).toMatchSnapshot();
  });

  it('when size prop is set to 120', () => {
    expect(
      renderer.create(<GoogleIcon title="test" size="120" />).toJSON(),
    ).toMatchSnapshot();
  });
});
