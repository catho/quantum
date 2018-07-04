import React from 'react';
import renderer from 'react-test-renderer';
import Badge from './Badge';

describe('Badge component', () => {
  describe('Should match snapshot', () => {
    it('with different text props', () => {
      const badges = [
        <Badge text="Default with text prop" />,
        <Badge text="Default with text prop"> Default with children </Badge>,
        <Badge> Default </Badge>,
      ];

      badges.forEach(badge => {
        expect(renderer.create(badge).toJSON()).toMatchSnapshot();
      });
    });

    it('with different skins', () => {
      const badges = [
        <Badge skin="brand1"> Brand1 </Badge>,
        <Badge skin="brand2"> Brand2 </Badge>,
        <Badge skin="primary"> Primary </Badge>,
        <Badge skin="secondary"> Secondary </Badge>,
        <Badge skin="success"> Text </Badge>,
        <Badge skin="action"> Text </Badge>,
        <Badge skin="warning"> Text </Badge>,
        <Badge skin="danger"> Text </Badge>,
        <Badge skin="info"> Text </Badge>,
      ];

      badges.forEach(badge => {
        expect(renderer.create(badge).toJSON()).toMatchSnapshot();
      });
    });
  });
});
