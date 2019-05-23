import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
    it('success', () => testSnapshot({ skin: 'success' }));
    it('warning', () => testSnapshot({ skin: 'warning' }));
    it('error', () => testSnapshot({ skin: 'error' }));
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
      testSnapshot({ onClose: () => {}, skin: 'success' });
      testSnapshot({ onClose: () => {}, skin: 'warning' });
      testSnapshot({ onClose: () => {}, skin: 'error' });
    });

    it('is called when close button is clicked', () => {
      const onCloseMock = jest.fn();
      const tag = shallow(<Tag closable onClose={onCloseMock} />);
      const button = tag.find('CloseButton');

      button.simulate('click');

      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
