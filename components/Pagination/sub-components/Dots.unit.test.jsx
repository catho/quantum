import React from 'react';
import { render } from '@testing-library/react';
import Dots from './Dots';

describe('<Dots />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(render(<Dots />).asFragment()).toMatchSnapshot();
    });
  });
});
