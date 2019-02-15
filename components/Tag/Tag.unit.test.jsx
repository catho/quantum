import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Tag from './Tag';
import Colors from '../Colors';

const testSnapshot = props => {
  const propsList = Array.isArray(props) ? props : [props];

  propsList.forEach(p => {
    expect(renderer.create(<Tag {...p} />).toJSON()).toMatchSnapshot();
  });
};

describe('<Tag />', () => {
  it('without props', () => testSnapshot());
  it('with only text prop / children', () =>
    testSnapshot([{ text: 'example' }, { children: 'example' }]));
  it('with bold prop', () => testSnapshot({ bold: true }));

  describe('Skins', () => {
    it('stroked', () => testSnapshot({ skin: 'stroked' }));
    it('inverted', () => testSnapshot({ skin: 'inverted' }));
    it('blue', () => testSnapshot({ skin: 'blue' }));
    it('success', () => testSnapshot({ skin: 'success' }));
    it('warning', () => testSnapshot({ skin: 'warning' }));
    it('error', () => testSnapshot({ skin: 'error' }));
    it('blue-text', () => testSnapshot({ skin: 'blue-text' }));
    it('default', () => {
      testSnapshot({ skin: 'default' });

      const tag = renderer.create(<Tag />).toJSON();
      expect(tag).toHaveStyleRule('background-color', Colors.BLACK[100]);
    });
  });

  describe('Sizes', () => {
    it('small', () => testSnapshot({ size: 'small' }));
    it('medium', () => testSnapshot({ size: 'medium' }));
    it('large', () => testSnapshot({ size: 'large' }));
  });

  describe('Closable', () => {
    it('is rendering well', () => {
      testSnapshot({ closable: true });
      testSnapshot({ closable: true, skin: 'stroked' });
      testSnapshot({ closable: true, skin: 'inverted' });
      testSnapshot({ closable: true, skin: 'blue' });
      testSnapshot({ closable: true, skin: 'success' });
      testSnapshot({ closable: true, skin: 'warning' });
      testSnapshot({ closable: true, skin: 'error' });
      testSnapshot({ closable: true, skin: 'blue-text' });
    });

    it('is calling "onClose" prop when close button is clicked', () => {
      const onCloseCb = jest.fn();
      const tag = shallow(<Tag closable onClose={onCloseCb} />);
      const button = tag.find('CloseButton');

      button.simulate('click');

      expect(onCloseCb).toHaveBeenCalled();
    });
  });
});
