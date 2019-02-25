import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const mockFn = jest.fn();

  beforeEach(mockFn.mockClear);

  it('should match the snapshot', () => {
    expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<Checkbox error="error message" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Checkbox error="error message" checked />).toJSON(),
    ).toMatchSnapshot();
    expect(renderer.create(<Checkbox checked />).toJSON()).toMatchSnapshot();
    expect(renderer.create(<Checkbox disabled />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<Checkbox label="Some text" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Checkbox checked disabled />).toJSON(),
    ).toMatchSnapshot();
  });

  it('should pass onChange prop to checkbox component', () => {
    const wrapper = mount(<Checkbox onChange={mockFn} />);
    const checkbox = wrapper.find('HiddenCheckbox');
    expect(wrapper.prop('onChange')).toEqual(checkbox.prop('onChange'));
  });

  it('should pass checked prop to checkbox component', () => {
    const wrapper = shallow(<Checkbox checked />);
    const checkbox = wrapper.find('HiddenCheckbox');
    expect(checkbox.prop('checked')).toEqual(true);
  });

  it('should apply id prop', () => {
    const wrapper = shallow(<Checkbox id="test" />);

    const label = wrapper.find('CheckboxLabel');
    const checkbox = wrapper.find('HiddenCheckbox');
    const htmlFor = label.prop('htmlFor');

    expect(htmlFor).not.toBeUndefined();
    expect(htmlFor).toEqual(checkbox.prop('id'));
  });

  it('should apply label prop', () => {
    const wrapper = mount(<Checkbox label="test" />);
    const labelText = wrapper.find('CheckboxLabel').text();

    expect(labelText).not.toBeUndefined();
    expect(labelText).toEqual(wrapper.prop('label'));
  });
});
