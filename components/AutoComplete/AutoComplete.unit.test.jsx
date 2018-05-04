import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AutoComplete from './AutoComplete';

const dataSource = [
  'Brazil',
  'Germany',
  'Mexico',
  'Usa',
];
const value = 'test';
const defaultAutoComplete = (
  <AutoComplete dataSource={dataSource} value={value} />
);

describe('AutoComplete component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(defaultAutoComplete).toJSON()).toMatchSnapshot();
  });

  describe('with an "onChange" callback set', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<AutoComplete onChange={mockFn} />);
    const input = wrapper.childAt(0);
    const mockEvent = { target: { value } };

    it('should call the callback and set a new value', () => {
      input.simulate('change', mockEvent);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe('with a data source', () => {
    const wrapper = shallow(defaultAutoComplete);
    const datalist = wrapper.childAt(1);

    it('should create a datalist element', () => {
      expect(datalist.name()).toBe('datalist');
      expect(datalist.children().length).toEqual(dataSource.length);
    });
  });
});
