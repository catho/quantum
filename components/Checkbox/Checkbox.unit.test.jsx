import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const mockFn = jest.fn();

  beforeEach(mockFn.mockClear);

  it('should match the snapshot', () => {
    expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot();
  });

  describe('onChange prop', () => {
    it('should call the callback', () => {
      const wrapper = shallow(<Checkbox onChange={mockFn} />);
      const checkbox = wrapper.find('HiddenInput');
      const mockEvent = { target: { checked: true } };

      checkbox.simulate('change', mockEvent);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, { checked: true });
    });

    it('should call the callback when checked is set', () => {
      const wrapper = shallow(<Checkbox onChange={mockFn} checked />);
      const checkbox = wrapper.find('HiddenInput');
      const mockEvent = { target: { checked: false } };

      checkbox.simulate('change', mockEvent);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, { checked: false });
    });

    it('should not call the callback when disabled prop is set', () => {
      const wrapper = shallow(<Checkbox onChange={mockFn} disabled />);
      const checkbox = wrapper.find('HiddenInput');
      const mockEvent = { target: { checked: true } };

      checkbox.simulate('change', mockEvent);

      expect(mockFn).not.toHaveBeenCalled();
    });
  });

  describe('checked prop', () => {
    it('should not change checkbox state, when checked prop is set', () => {
      const mounted = mount(<Checkbox checked />);
      const checkbox = mounted.find('HiddenInput');
      const checkboxNode = checkbox.getDOMNode();

      expect(checkboxNode.checked).toEqual(true);

      checkbox.simulate('change', { target: { checked: false } });

      expect(checkboxNode.checked).toEqual(true);
    });

    it('should change checkbox state, when checked prop is not set', () => {
      const wrapper = mount(<Checkbox />);
      const checkbox = wrapper.find('HiddenInput');
      const checkboxNode = checkbox.getDOMNode();

      expect(checkboxNode.checked).toEqual(false);

      checkbox.simulate('change', { target: { checked: true } });

      expect(checkboxNode.checked).toEqual(true);
    });
  });

  describe('label', () => {
    it('should generate a randomic id', () => {
      const wrapper = shallow(<Checkbox onChange={mockFn} />);

      const label = wrapper.find('CheckboxLabel');
      const checkbox = wrapper.find('HiddenInput');
      const htmlFor = label.prop('htmlFor');

      expect(htmlFor).not.toBeUndefined();
      expect(htmlFor).toEqual(checkbox.prop('id'));
    });

    it('should apply id prop', () => {
      const wrapper = shallow(<Checkbox onChange={mockFn} id="test" />);

      const label = wrapper.find('CheckboxLabel');
      const checkbox = wrapper.find('HiddenInput');
      const htmlFor = label.prop('htmlFor');

      expect(htmlFor).not.toBeUndefined();
      expect(htmlFor).toEqual(checkbox.prop('id'));
    });
  });
});
