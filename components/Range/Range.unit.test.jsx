import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Range from './Range';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Range />).toJSON()).toMatchSnapshot();
  });

  it('should have value set in the state', () => {
    const value = 50;
    const wrapper = shallow(<Range value={value} />);

    expect(wrapper.state('value')).toEqual(value);
  });

  it('with an error message should match the snapshot', () => {
    expect(renderer.create(<Range error="Error message" />).toJSON()).toMatchSnapshot();
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Range onChange={mockFn} />);
    const range = wrapper.childAt(0);
    const value = 30;
    const valueOb = { value };

    it('should initialize with default value', () => {
      expect(wrapper.state('value')).toEqual(0);
    });

    it('should call the callback and set a new value', () => {
      range.simulate('change', { target: valueOb });

      expect(wrapper.state('value')).toEqual(value);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith(valueOb);
    });
  });

  describe('with a label', () => {
    const range = <Range label="Text label" id="range-with-label" />;

    it('should match the snapshot', () => {
      expect(renderer.create(range).toJSON()).toMatchSnapshot();
    });

    it('should match label "htmlFor" label param with "id" range param', () => {
      const wrapper = shallow(range);
      const label = wrapper.childAt(0);
      const styledInput = wrapper.childAt(1);

      expect(label.prop('htmlFor')).toEqual(styledInput.prop('id'));
    });
  });
});
