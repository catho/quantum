import React from 'react';
import { shallow } from 'enzyme';
import List from './List';
import Item from './sub-components/Item';

const items = [
  'Tomato sauce',
  'Mustard',
  'Barbecue sauce',
  'Red-wine vinegar',
  'Salsa',
  'Hot pepper sauce',
];

describe('<List />', () => {
  it('Should match the default snapshot', () => {
    expect(shallow(<List />)).toMatchSnapshot();
  });

  it('Should match the divided list snapshot', () => {
    expect(shallow(<List divided items={items} />)).toMatchSnapshot();
  });

  it('Should match the bullet list snapshot', () => {
    expect(shallow(<List ordered items={items} />)).toMatchSnapshot();
  });

  it('render six Item components', () => {
    const wrapper = shallow(<List items={items} />);

    expect(wrapper.find(Item)).toHaveLength(6);
  });

  it('render unordered list as a default one', () => {
    const wrapper = shallow(<List />);

    expect(wrapper.find('UnorderedList')).toBeTruthy();
  });

  it('render ordered list', () => {
    const wrapper = shallow(<List ordered />);

    expect(wrapper.find('OrderedList')).toBeTruthy();
  });
});
