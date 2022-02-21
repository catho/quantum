import { render } from '@testing-library/react';

import Badge from './Badge';
import Button from '../Button';

describe('<Badge />', () => {
  describe('Should match snapshot', () => {
    it('With number', () => {
      const { container } = render(<Badge number={10} />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with children', () => {
      const { container } = render(
        <Badge number={10}>
          <Button />
        </Badge>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with skin', () => {
      const { container } = render(<Badge number={10} skin="success" />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('with skin inverted', () => {
      const { container } = render(<Badge number={10} inverted />);

      expect(container.firstChild).toMatchSnapshot();
    });

    it('it should contain dot style', () => {
      const { container } = render(<Badge dot />);

      const spanDot = container.querySelector('span');
      expect(spanDot).toHaveStyle({
        right: '-2px',
        top: '0',
        height: '12px',
        width: '12px',
        'min-width': '12px',
      });
    });

    it('it should contain +99 in the value when number is bigger than 99', () => {
      const { container } = render(<Badge number={100} />);

      const spanDot = container.querySelector('span');

      expect(spanDot.getAttribute('value')).toEqual('99+');
    });
  });
});
