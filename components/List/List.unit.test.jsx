import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
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
    const wrapper = mount(<List />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should match the divided list snapshot', () => {
    const wrapper = mount(<List divided items={items} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should match the bullet list snapshot', () => {
    const wrapper = mount(<List ordered items={items} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render six Item components', () => {
    const wrapper = mount(<List items={items} />);

    expect(wrapper.find(Item)).toHaveLength(6);
  });

  it('render unordered list as a default one', () => {
    const wrapper = mount(<List />);

    expect(wrapper.find('UnorderedList')).toBeTruthy();
  });

  it('render ordered list', () => {
    const wrapper = mount(<List ordered />);

    expect(wrapper.find('OrderedList')).toBeTruthy();
  });
});
