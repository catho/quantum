import React from 'react';
import renderer from 'react-test-renderer';
import Page from './Page';

describe('<Page />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      expect(renderer.create(<Page>{50}</Page>).toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with active prop', () => {
      expect(
        renderer.create(<Page active>{10}</Page>).toJSON(),
      ).toMatchSnapshot();
    });
  });
});
