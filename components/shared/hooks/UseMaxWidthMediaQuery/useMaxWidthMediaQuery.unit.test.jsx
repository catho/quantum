import React from 'react';
import { render, screen } from '@testing-library/react';
import matchMediaMock from '../../helpers';

import ExampleMediaQuery from './Example';

const MOBILE_TEXT = 'Less than 768';
const DESKTOP_TEXT = 'More than 768';

describe('useMaxWidthMediaQuery', () => {
  it('should be bigger than 768px', () => {
    render(<ExampleMediaQuery />);

    const heading = screen.getByRole('heading');

    expect(heading.textContent).toBe(DESKTOP_TEXT);
  });

  it('should be smaller than 768px', () => {
    matchMediaMock(true);
    render(<ExampleMediaQuery />);

    const heading = screen.getByRole('heading');

    expect(heading.textContent).toBe(MOBILE_TEXT);
  });
});
