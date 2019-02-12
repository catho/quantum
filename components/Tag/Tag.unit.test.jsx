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

describe('Tag component', () => {
  it('without props', () => testSnapshot());
  it('text prop / children', () =>
    testSnapshot([{ text: 'example' }, { children: 'example' }]));
  it('bold', () => testSnapshot({ bold: true }));
  it('stroked skin', () => testSnapshot({ skin: 'stroked' }));
  it('inverted skin', () => testSnapshot({ skin: 'inverted' }));
  it('blue skin', () => testSnapshot({ skin: 'blue' }));
  it('success skin', () => testSnapshot({ skin: 'success' }));
  it('warning skin', () => testSnapshot({ skin: 'warning' }));
  it('error skin', () => testSnapshot({ skin: 'error' }));
  it('blue-text skin', () => testSnapshot({ skin: 'blue-text' }));

  describe('Closable', () => {
    it('it is rendering well', () => {
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
      const button = tag.childAt(1);

      expect(tag.state('hidden')).toBe(false);

      button.simulate('click', {});

      expect(tag.state('hidden')).toBe(true);
      expect(tag.html()).toBeNull();
    });
  });
});
