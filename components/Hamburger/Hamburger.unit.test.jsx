import React from 'react';
import { render } from '@testing-library/react';

import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  describe('Should match snapshot with props:', () => {
    it('default', () => {
      const { container } = render(<Hamburger />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('showNotification', () => {
      const { container } = render(<Hamburger showNotification />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('isOpened', () => {
      const { container } = render(<Hamburger isOpened />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('showNotification and isOpened', () => {
      const { container } = render(<Hamburger showNotification isOpened />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('inverted', () => {
      const { container } = render(<Hamburger inverted />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('inverted and showNotification', () => {
      const { container } = render(<Hamburger inverted showNotification />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('inverted and isOpened', () => {
      const { container } = render(<Hamburger inverted isOpened />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('inverted, showNotification and isOpened', () => {
      const { container } = render(
        <Hamburger inverted showNotification isOpened />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
