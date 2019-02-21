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

  describe('onClose Prop', () => {
    it('is rendering well', () => {
      testSnapshot({ onClose: () => {} });
      testSnapshot({ onClose: () => {}, skin: 'stroked' });
      testSnapshot({ onClose: () => {}, skin: 'inverted' });
      testSnapshot({ onClose: () => {}, skin: 'blue' });
      testSnapshot({ onClose: () => {}, skin: 'success' });
      testSnapshot({ onClose: () => {}, skin: 'warning' });
      testSnapshot({ onClose: () => {}, skin: 'error' });
      testSnapshot({ onClose: () => {}, skin: 'blue-text' });
    });

    it('is called when close button is clicked', () => {
      const onCloseCb = jest.fn();
      const tag = shallow(<Tag closable onClose={onCloseCb} />);
      const button = tag.find('CloseButton');

      button.simulate('click');

      expect(onCloseCb).toHaveBeenCalled();
    });
  });
});
