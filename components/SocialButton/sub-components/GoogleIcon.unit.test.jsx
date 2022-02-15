import React from 'react';
import { render } from '@testing-library/react';
import GoogleIcon from './GoogleIcon';

describe('GoogleIcon component', () => {
  it('Should match the snapshot', () => {
    expect(render(<GoogleIcon title="test" />).asFragment()).toMatchSnapshot();
  });

  it('when size prop is set to 120', () => {
    expect(
      render(<GoogleIcon title="test" size="120" />).asFragment(),
    ).toMatchSnapshot();
  });
});
