import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from './Link';

const ChildrenExample = 'Unit test';

describe(' Link', () => {
  it('Should match the default snapshot', () => {
    const wrapper = mount(
      <Link href="_blank" rel="noreferrer">
        Link
      </Link>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should match the default snapshot without underline', () => {
    const wrapper = mount(
      <Link href="_blank" rel="noreferrer" skin="dark" underline={false}>
        Link
      </Link>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should match the dark snapshot', () => {
    const wrapper = mount(
      <Link href="_blank" rel="noreferrer" skin="dark">
        Link
      </Link>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should render the children', () => {
    const wrapper = mount(
      <Link href="_blank" rel="noreferrer">
        {ChildrenExample}
      </Link>,
    );
    expect(wrapper.text()).toEqual(ChildrenExample);
  });
});
