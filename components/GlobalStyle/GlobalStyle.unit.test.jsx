import React from 'react';
import { render, screen } from '@testing-library/react';

import GlobalStyle from './GlobalStyle';

describe('Global Style', () => {
  it('should apply global style on h1 element', () => {
    render(
      <>
        <GlobalStyle />
        <h1>Hello!</h1>
      </>,
    );

    expect(screen.getByRole('heading')).toHaveStyle({
      margin: 0,
      'font-weight': 'normal',
      'font-size': '36px',
      'letter-spacing': '0.25px',
    });
  });
});
