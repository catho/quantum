import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Tag from './Tag';

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

    it('is removed when close button is clicked', () => {
      const tag = shallow(<Tag closable />);
      const button = tag.childAt(0).childAt(1);

      expect(tag.state('hidden')).toBe(false);

      button.simulate('click', {});

      expect(tag.state('hidden')).toBe(true);
      expect(tag.html()).toBeNull();
    });
  });

  describe('Sizes', () => {
    it('small', () => testSnapshot({ size: 'small' }));
    it('medium', () => testSnapshot({ size: 'medium' }));
    it('large', () => testSnapshot({ size: 'large' }));
  });
});
