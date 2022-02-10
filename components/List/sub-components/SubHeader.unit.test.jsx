import React from 'react';
import { render } from '@testing-library/react';
import SubHeader from './SubHeader';

describe('<SubHeader />', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<SubHeader>SubHeader</SubHeader>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
