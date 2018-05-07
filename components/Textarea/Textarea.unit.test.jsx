import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Textarea from './Textarea';
import { Label } from '../shared';

describe('Radio component', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Textarea />).toJSON()).toMatchSnapshot();
  });

  it('with an error message should match the snapshot', () => {
    expect(renderer.create(<Textarea error="Error message" />).toJSON()).toMatchSnapshot();
  });

  describe('with a label', () => {
    const id = 'textarea';
    const textarea = <Textarea label="Text label" id={id} />;

    it('should match the snapshot', () => {
      expect(renderer.create(textarea).toJSON()).toMatchSnapshot();
    });

    it('should match label "htmlFor" label param with "id" textarea param', () => {
      const wrapper = shallow(textarea);
      const element = wrapper.find(`#${id}`);
      const label = wrapper.find(Label);

      expect(label.prop('htmlFor')).toEqual(element.prop('id'));
    });
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();
    const maxLength = 100;
    const id = 'textarea';

    const textarea = (
      <Textarea
        onChange={mockFn}
        id={id}
        maxLength={maxLength}
      />
    );

    const wrapper = shallow(textarea);

    beforeEach(() => {
      mockFn.mockClear();
    });

    it('should match chars left state', () => {
      expect(wrapper.state('charsLeft')).toEqual(maxLength);
    });

    it('should call the callback, set a new value and chars left', () => {
      const value = 'test';
      const valueObj = { value };
      const mockEvent = { target: valueObj };

      wrapper.find(`#${id}`).simulate('change', mockEvent);

      expect(wrapper.state('value')).toEqual(value);
      expect(wrapper.state('charsLeft')).toEqual(maxLength - value.length);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, valueObj);
    });
  });
});
