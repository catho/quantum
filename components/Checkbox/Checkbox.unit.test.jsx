import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const mockFn = jest.fn();

  beforeEach(mockFn.mockClear);

  it('should match the snapshot', () => {
    expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<Checkbox error="error message" />).toJSON(),
    ).toMatchSnapshot();
    expect(renderer.create(<Checkbox checked />).toJSON()).toMatchSnapshot();
    expect(renderer.create(<Checkbox disabled />).toJSON()).toMatchSnapshot();
  });

  it('should pass onChange prop to checkbox component', () => {
    const wrapper = mount(<Checkbox onChange={mockFn} />);
    const checkbox = wrapper.find('HiddenInput');
    expect(wrapper.prop('onChange')).toEqual(checkbox.prop('onChange'));
  });

  it('should pass onChange prop to checkbox component', () => {
    const wrapper = mount(<Checkbox checked />);
    const checkbox = wrapper.find('HiddenInput');
    expect(checkbox.prop('checked')).toEqual(true);
  });

  it('should apply id prop', () => {
    const wrapper = mount(<Checkbox onChange={mockFn} id="test" />);

    const label = wrapper.find('CheckboxLabel');
    const checkbox = wrapper.find('HiddenInput');
    const htmlFor = label.prop('htmlFor');

    expect(htmlFor).not.toBeUndefined();
    expect(htmlFor).toEqual(checkbox.prop('id'));
  });
});
