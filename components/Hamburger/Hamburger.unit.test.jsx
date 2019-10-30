import React from 'react';
import renderer from 'react-test-renderer';

import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  describe('Should match snapshot with props:', () => {
    it('default', () => {
      expect(renderer.create(<Hamburger />).toJSON()).toMatchSnapshot();
    });

    it('showNotification', () => {
      expect(renderer.create(<Hamburger showNotification />)).toMatchSnapshot();
    });

    it('isOpened', () => {
      expect(renderer.create(<Hamburger isOpened />)).toMatchSnapshot();
    });

    it('showNotification and isOpened', () => {
      expect(
        renderer.create(<Hamburger showNotification isOpened />),
      ).toMatchSnapshot();
    });

    it('inverted', () => {
      expect(renderer.create(<Hamburger inverted />)).toMatchSnapshot();
    });

    it('inverted and showNotification', () => {
      expect(
        renderer.create(<Hamburger inverted showNotification />),
      ).toMatchSnapshot();
    });

    it('inverted and isOpened', () => {
      expect(
        renderer.create(<Hamburger inverted isOpened />),
      ).toMatchSnapshot();
    });

    it('inverted, showNotification and isOpened', () => {
      expect(
        renderer.create(<Hamburger inverted showNotification isOpened />),
      ).toMatchSnapshot();
    });
  });
});
