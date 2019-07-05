import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Badge from './Badge';
import { theme } from '../shared';
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
  });

  describe('Match correct styles', () => {
    const BadgeComponent = mount(<Badge number={10} />);

    it("should have correct colors when skin prop isn't defined", () => {
      expect(BadgeComponent.find('StyledBadge')).toHaveStyleRule(
        'background-color',
        theme.colors.neutral[100],
      );

      expect(BadgeComponent.find('StyledBadge')).toHaveStyleRule(
        'color',
        theme.colors.neutral[700],
      );
    });

    it("Should have spacing around when Badge don't have children", () => {
      expect(BadgeComponent.find('BadgeWrapper')).toHaveStyleRule(
        'margin-left',
        '8px',
      );
      expect(BadgeComponent.find('BadgeWrapper')).toHaveStyleRule(
        'margin-right',
        '8px',
      );
    });

    it('Should match colors when skin prop is defined', () => {
      const BadgeWithSkin = mount(<Badge number={10} skin="success" />);

      expect(BadgeWithSkin.find('StyledBadge')).toHaveStyleRule(
        'background-color',
        theme.colors.success[100],
      );
      expect(BadgeWithSkin.find('StyledBadge')).toHaveStyleRule(
        'color',
        theme.colors.success[900],
      );
    });
  });

  describe('Positioning when have children', () => {
    it('should be placed at top-right corner', () => {
      const BadgeComponent = mount(
        <Badge number={10}>
          <Button />
        </Badge>,
      );
      expect(BadgeComponent.find('BadgeWrapper')).toHaveStyleRule(
        'position',
        'relative',
      );
      expect(BadgeComponent.find('StyledBadge')).toHaveStyleRule(
        'position',
        'absolute',
      );
      expect(BadgeComponent.find('StyledBadge')).toHaveStyleRule(
        'top',
        '-10px',
      );
      expect(BadgeComponent.find('StyledBadge')).toHaveStyleRule(
        'right',
        '-10px',
      );
    });
  });
});
