import React from 'react';
import renderer from 'react-test-renderer';
import PageButton from './PageButton';

describe('<PageButton />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(
        renderer.create(<PageButton>{50}</PageButton>).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with active prop', () => {
      expect(
        renderer.create(<PageButton active>{10}</PageButton>).toJSON(),
      ).toMatchSnapshot();
    });
  });
});
