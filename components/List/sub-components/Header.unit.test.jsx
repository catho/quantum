import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('<Header />', () => {
  it('Should match the snapshot', () => {
    const wrapper = mount(<Header>Header</Header>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
