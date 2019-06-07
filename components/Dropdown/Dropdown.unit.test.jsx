import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    const withItems = (
      <Dropdown
        items={[
          { value: 'fooKey', label: 'foo' },
          { value: 'barKey', label: 'bar' },
          { value: 'bazKey', label: 'baz' },
        ]}
      />
    );

    const withSelectedItem = (
      <Dropdown
        items={[
          { value: 'fooKey', label: 'foo' },
          { value: 'barKey', label: 'bar' },
          { value: 'bazKey', label: 'baz' },
        ]}
        selectedItem={{ value: 'bazKey', label: 'baz' }}
      />
    );

    expect(renderer.create(<Dropdown />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<Dropdown placeholder="Dropdown placeholder" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Dropdown placeholder="" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Dropdown error="Error message" />).toJSON(),
    ).toMatchSnapshot();
    expect(renderer.create(<Dropdown disabled />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<Dropdown label="Dropdown label" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Dropdown required label="Dropdown label" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Dropdown autocomplete />).toJSON(),
    ).toMatchSnapshot();
    expect(renderer.create(withItems).toJSON()).toMatchSnapshot();
    expect(renderer.create(withSelectedItem).toJSON()).toMatchSnapshot();
  });
});

describe('with an "onChange" callback set', () => {
  const mockFn = jest.fn();

  const items = [
    {
      value: 'fooKey',
      label: 'foo',
    },
    {
      value: 'barKey',
      label: 'bar',
    },
  ];

  const wrapper = shallow(
    <Dropdown onChange={mockFn} id="dropdown" items={items} />,
  );

  it('should call the callback and set a new value', () => {
    const [selectedItem] = items;

    wrapper.find('Downshift').simulate('change', selectedItem);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toBeCalledWith(selectedItem);
  });
});
