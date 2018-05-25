import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Input value="foo" />).toJSON()).toMatchSnapshot();
  });

  it('with an error message should match the snapshot', () => {
    expect(renderer.create(<Input value="foo" error="Error message" />).toJSON()).toMatchSnapshot();
  });

  describe('with a label', () => {
    const input = <Input label="Text label" id="input-with-label" value="foo" />;

    it('should match the snapshot', () => {
      expect(renderer.create(input).toJSON()).toMatchSnapshot();
    });

    it('should have withValue prop set to true when input have value', () => {
      const wrapper = shallow(input);
      const label = wrapper.childAt(1);

      expect(label.prop('withValue')).toEqual(true);
    });

    it('should have withValue prop set to false when input doesn\'t have value', () => {
      const inputWithoutValue = <Input label="Text label" id="withoutValue" />;
      const wrapper = shallow(inputWithoutValue);
      const label = wrapper.childAt(1);

      expect(label.prop('withValue')).toEqual(false);
    });

    it('should match label "htmlFor" label param with "id" input param', () => {
      const wrapper = shallow(input);
      const styledInput = wrapper.childAt(0);
      const label = wrapper.childAt(1);

      expect(label.prop('htmlFor')).toEqual(styledInput.prop('id'));
    });
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Input onChange={mockFn} id="input" />);
    const value = 'test';
    const valueObj = { value };
    const mockEvent = { target: valueObj };

    it('should call the callback and set a new value', () => {
      wrapper.find('#input').simulate('change', mockEvent);

      expect(wrapper.state('value')).toEqual(value);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, valueObj);
    });
  });

  describe('with password type', () => {
    const wrapper = shallow(<Input type="password" />);

    const icon = () => wrapper.childAt(1);
    const visibilityIcon = () => icon().html().includes('visibility');
    const visibilityOffIcon = () => icon().html().includes('visibility_off');

    it('should has "password", as default input type', () => {
      expect(visibilityIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('password');
    });

    it('should toggle input type, when password icon is clicked', () => {
      icon().simulate('click');

      expect(visibilityOffIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('text');

      icon().simulate('click');

      expect(visibilityIcon()).toBeTruthy();
      expect(wrapper.state('type')).toEqual('password');
    });
  });
});
