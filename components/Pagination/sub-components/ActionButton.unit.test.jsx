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
  });
});
