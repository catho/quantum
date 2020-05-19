import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './Badge';
import Button from '../Button';

describe('<Badge />', () => {
  describe('Should match snapshot', () => {
    it('With number', () => {
      expect(renderer.create(<Badge number={10} />).toJSON()).toMatchSnapshot();
    });

    it('with children', () => {
      expect(
        renderer
          .create(
            <Badge number={10}>
              <Button />
            </Badge>,
          )
          .toJSON(),
      ).toMatchSnapshot();
    });

    it('with skin', () => {
      expect(
        renderer.create(<Badge number={10} skin="success" />).toJSON(),
      ).toMatchSnapshot();
    });
  });
});
