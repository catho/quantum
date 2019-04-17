import React from 'react';
import renderer from 'react-test-renderer';
import Dots from './Dots';

describe('<Dots />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Dots />).toJSON()).toMatchSnapshot();
    });
  });
});
