import React from 'react';
import renderer from 'react-test-renderer';
import Page from './Page';

describe('<Page />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Page>{50}</Page>).toJSON()).toMatchSnapshot();
    });
  });
});
