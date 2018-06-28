import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot();
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();
    const mockEvent = { foo: 'bar' };

    beforeEach(mockFn.mockClear);

    it('should call the callback and toggle checked state', () => {
      const wrapper = shallow(<Checkbox onChange={mockFn} id="checkbox" />);
      const checkbox = wrapper.find('#checkbox');
      const checked = checkbox.prop('checked');

      checkbox.simulate('change', mockEvent);

      expect(wrapper.state('checked')).toEqual(!checked);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, { checked: !checked });
    });

    it('should not call the callback when disabled prop is set', () => {
      const wrapper = shallow(
        <Checkbox onChange={mockFn} id="checkbox" disabled />,
      );
      const checkbox = wrapper.find('#checkbox');
      const checked = checkbox.prop('checked');

      checkbox.simulate('change', mockEvent);

      expect(wrapper.state('checked')).toEqual(checked);
      expect(mockFn).not.toHaveBeenCalled();
    });
  });
});
