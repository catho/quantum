import React from 'react';
import { render } from '@testing-library/react';
import PageButton from './PageButton';

describe('<PageButton />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(
        render(<PageButton>{50}</PageButton>).asFragment(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with active prop', () => {
      expect(
        render(<PageButton active>{10}</PageButton>).asFragment(),
      ).toMatchSnapshot();
    });
  });
});
