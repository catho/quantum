import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Toggle />).toJSON()).toMatchSnapshot();
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();
    const mockEvent = { foo: 'bar' };

    beforeEach(mockFn.mockClear);

    it('should call the callback and toggle checked state', () => {
      const wrapper = shallow(<Toggle onChange={mockFn} id="toggle" />);
      const toggle = wrapper.find('#toggle');
      const checked = toggle.prop('checked');

      toggle.simulate('change', mockEvent);

      expect(wrapper.state('checked')).toEqual(!checked);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, { checked: !checked });
    });

    it('should not call the callback when disabled prop is set', () => {
      const wrapper = shallow(
        <Toggle onChange={mockFn} id="toggle" disabled />,
      );
      const toggle = wrapper.find('#toggle');
      const checked = toggle.prop('checked');

      toggle.simulate('change', mockEvent);

      expect(wrapper.state('checked')).toEqual(checked);
      expect(mockFn).not.toHaveBeenCalled();
    });
  });
});
