import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SubHeader from './SubHeader';

describe('<SubHeader />', () => {
  it('Should match the snapshot', () => {
    const wrapper = mount(<SubHeader>SubHeader</SubHeader>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
