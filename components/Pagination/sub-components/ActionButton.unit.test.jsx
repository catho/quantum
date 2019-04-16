import React from 'react';
import renderer from 'react-test-renderer';
import ActionButton from './ActionButton';

describe('<ActionButton />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(
        renderer.create(<ActionButton>Back</ActionButton>).toJSON(),
      ).toMatchSnapshot();
    });

    it('should match snapshot with aria-disabled prop', () => {
      expect(
        renderer
          .create(<ActionButton aria-disabled>Next</ActionButton>)
          .toJSON(),
      ).toMatchSnapshot();
    });
  });
});
