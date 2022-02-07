import React from 'react';
import { render } from '@testing-library/react';
import CircularLoader from './CircularLoader';

describe('CircularLoader component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const { container } = render(<CircularLoader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
