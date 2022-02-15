import React from 'react';
import { render } from '@testing-library/react';
import FacebookIcon from './FacebookIcon';

describe('FacebookIcon component', () => {
  it('Should match the snapshot', () => {
    expect(
      render(<FacebookIcon title="test" />).asFragment(),
    ).toMatchSnapshot();
  });

  it('when size prop is set to 120', () => {
    expect(
      render(<FacebookIcon title="test" size="120" />).asFragment(),
    ).toMatchSnapshot();
  });
});
