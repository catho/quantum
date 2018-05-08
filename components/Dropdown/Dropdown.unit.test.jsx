import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';
import { Label } from '../shared';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Dropdown />).toJSON()).toMatchSnapshot();
  });

  it('with an error message should match the snapshot', () => {
    expect(renderer.create(<Dropdown error="Error message" />).toJSON()).toMatchSnapshot();
  });

  describe('with items', () => {
    const dropdown = (
      <Dropdown
        items={[
          { key: 'fooKey', value: 'foo' },
          { key: 'barKey', value: 'bar' },
          { key: 'bazKey', value: 'baz' },
        ]}
      />
    );

    it('should match the snapshot', () => {
      expect(renderer.create(dropdown).toJSON()).toMatchSnapshot();
    });
  });

  describe('with a label', () => {
    const dropdown = <Dropdown label="Text label" id="dropdown" />;

    it('should match the snapshot', () => {
      expect(renderer.create(dropdown).toJSON()).toMatchSnapshot();
    });

    it('should match label "htmlFor" label param with "id" dropdown param', () => {
      const wrapper = shallow(dropdown);
      const select = wrapper.find('#dropdown');
      const label = wrapper.find(Label);

      expect(label.prop('htmlFor')).toEqual(select.prop('id'));
    });
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();

    const items = [{
      key: 'fooKey',
      value: 'foo',
    }, {
      key: 'barKey',
      value: 'bar',
    }];

    const dropdown = (
      <Dropdown
        onChange={mockFn}
        id="dropdown"
        items={items}
      />
    );

    const wrapper = shallow(dropdown);

    it('should init value with an empty label', () => {
      expect(wrapper.state('value')).toEqual('');
    });

    it('should call the callback and set a new value', () => {
      const [selectedItem] = items;
      const { key: value } = selectedItem;
      const valueObj = { value };
      const mockEvent = { target: valueObj };

      wrapper.find('#dropdown').simulate('change', mockEvent);

      expect(wrapper.state('value')).toEqual(value);
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith(mockEvent, valueObj);
    });
  });
});
