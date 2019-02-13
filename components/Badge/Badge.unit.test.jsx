import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Badge from './Badge';
import Colors from '../Colors';
import Button from '../Button';
import 'jest-styled-components';

describe('Badge component', () => {
  describe('Should match snapshot and correct styles', () => {
    it('With number', () => {
      const BadgeComponent = <Badge number={10} />;

      expect(renderer.create(BadgeComponent).toJSON()).toMatchSnapshot();
      expect(mount(BadgeComponent).find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.BLACK[100],
      );
      expect(mount(BadgeComponent).find('Tag')).toHaveStyleRule(
        'color',
        Colors.BLACK[700],
      );
    });

    it('with different skins', () => {
      const badges = {
        default: mount(<Badge skin="default" number={10} />),
        black: mount(<Badge skin="black" number={10} />),
        blue: mount(<Badge skin="blue" number={10} />),
        white: mount(<Badge skin="white" number={10} />),
        error: mount(<Badge skin="error" number={10} />),
        success: mount(<Badge skin="success" number={10} />),
      };

      expect(badges.default.find('Wrapper')).toHaveStyleRule(
        'margin-left',
        '8px',
      );
      expect(badges.default.find('Wrapper')).toHaveStyleRule(
        'margin-right',
        '8px',
      );

      expect(badges.default.find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.BLACK[100],
      );
      expect(badges.default.find('Tag')).toHaveStyleRule(
        'color',
        Colors.BLACK[700],
      );
      expect(badges.black.find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.BLACK[700],
      );
      expect(badges.black.find('Tag')).toHaveStyleRule('color', Colors.WHITE);
      expect(badges.blue.find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.BLUE[500],
      );
      expect(badges.blue.find('Tag')).toHaveStyleRule('color', Colors.WHITE);
      expect(badges.white.find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.WHITE,
      );
      expect(badges.white.find('Tag')).toHaveStyleRule('color', '#000');
      expect(badges.white.find('Tag')).toHaveStyleRule(
        'mix-blend-mode',
        'lighten',
      );
      expect(badges.error.find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.ERROR[500],
      );
      expect(badges.error.find('Tag')).toHaveStyleRule('color', Colors.WHITE);
      expect(badges.success.find('Tag')).toHaveStyleRule(
        'background-color',
        Colors.SUCCESS[200],
      );
      expect(badges.success.find('Tag')).toHaveStyleRule(
        'color',
        Colors.SUCCESS[900],
      );
    });

    it('with children', () => {
      const BadgeComponent = (
        <Badge number={10}>
          <Button />
        </Badge>
      );

      expect(renderer.create(BadgeComponent).toJSON()).toMatchSnapshot();
      expect(mount(BadgeComponent).find('Wrapper')).toHaveStyleRule(
        'position',
        'relative',
      );
      expect(mount(BadgeComponent).find('Tag')).toHaveStyleRule(
        'position',
        'absolute',
      );
      expect(mount(BadgeComponent).find('Tag')).toHaveStyleRule('top', '-10px');
      expect(mount(BadgeComponent).find('Tag')).toHaveStyleRule(
        'right',
        '-10px',
      );
    });
  });
});
