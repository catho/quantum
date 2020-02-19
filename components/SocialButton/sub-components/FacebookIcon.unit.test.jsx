import React from 'react';
import renderer from 'react-test-renderer';
import FacebookIcon from './FacebookIcon';

describe('FacebookIcon component', () => {
  it('Should match the snapshot', () => {
    expect(
      renderer.create(<FacebookIcon title="test" />).toJSON(),
    ).toMatchSnapshot();
  });

  it('when size prop is set to 120', () => {
    expect(
      renderer.create(<FacebookIcon title="test" size={120} />).toJSON(),
    ).toMatchSnapshot();
  });
});
