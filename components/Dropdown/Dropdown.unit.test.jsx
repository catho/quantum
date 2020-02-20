import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Dropdown from './Dropdown';

const INPUT_NAME = 'dropdown-name';
const selectedItemObject = { value: 'bazKey', label: 'baz' };
const itemsWithImage = [
  {
    label: 'Master Card',
    value: 'creditcard_0',
    img: 'https://dummyimage.com/24x24',
    alt: 'image description',
  },
  {
    label: 'American Express Card',
    value: 'creditcard_1',
    img: 'https://dummyimage.com/24x24',
    alt: 'image description',
  },
  {
    label: 'Visa',
    value: 'creditcard_2',
    img: 'https://dummyimage.com/24x24',
    alt: 'image description',
  },
];

describe('Dropdown component ', () => {
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
      selectedItem={selectedItemObject}
    />
  );

  const withImage = (
    <Dropdown
      placeholder="What credit card do you prefer?"
      label="choose a credit card"
      items={itemsWithImage}
    />
  );

  const withName = (
    <Dropdown
      name={INPUT_NAME}
      items={[
        { value: 'fooKey', label: 'foo' },
        { value: 'barKey', label: 'bar' },
        { value: 'bazKey', label: 'baz' },
      ]}
    />
  );

  it('should match the snapshot', () => {
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
    expect(renderer.create(withImage).toJSON()).toMatchSnapshot();
    expect(renderer.create(withName).toJSON()).toMatchSnapshot();
  });

  it('should find the selected item label when its is selected', () => {
    const selectedLabel = selectedItemObject.label;
    const component = mount(withSelectedItem);
    component.find('DropInput').simulate('click');
    const selectedItemLabel = component.find('SelectedItemLabel').text();
    expect(selectedItemLabel).toMatch(selectedLabel);
  });

  it('should change the position of arrow icon when click open list', () => {
    const component = mount(withItems);
    expect(component.find('ArrowDown').text()).toEqual('arrow_drop_down');
    component.find('DropInput').simulate('click');
    expect(component.find('ArrowUp').text()).toEqual('arrow_drop_up');
  });

  it('should change the position of arrow icon when click to close list', () => {
    const component = mount(withItems);
    component.find('DropInput').simulate('click');
    expect(component.find('ArrowUp').text()).toEqual('arrow_drop_up');
    component.find('DropInput').simulate('click');
    expect(component.find('ArrowDown').text()).toEqual('arrow_drop_down');
  });

  it('should show image in dropdown item when its passed on items prop', () => {
    const firstItemWithImage = itemsWithImage[0];
    const component = mount(withImage);
    component.find('DropInput').simulate('click');

    const firstDropItemImage = component
      .find('DropItemImage')
      .first()
      .props();

    expect(firstDropItemImage.src).toMatch(firstItemWithImage.img);
    expect(firstDropItemImage.alt).toMatch(firstItemWithImage.alt);
  });

  it('should pass correctly the name prop to input hidden', () => {
    const component = mount(withName);
    const input = component
      .find('DropContainer')
      .find('input[type="hidden"]')
      .first();

    expect(input.prop('name')).toMatch(INPUT_NAME);
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

describe('with autocomplete property', () => {
  const mockFn = jest.fn();
  const items = [
    {
      value: 'São Paulo',
      label: 'São Paulo - SP',
    },
    {
      value: 'Rio de Janeiro',
      label: 'Rio de Janeiro - RJ',
    },
    {
      value: 'Belém',
      label: 'Belém - PA',
    },
  ];

  it('should display items ignoring special chars', () => {
    const component = mount(
      <Dropdown
        autocomplete
        ignoreSpecialChars
        onChange={mockFn}
        items={items}
      />,
    );

    component
      .find('DropInput')
      .find('input')
      .simulate('change', { target: { value: 'sao' } });
    expect(
      component
        .find('DropItem')
        .find('span')
        .text(),
    ).toEqual(items[0].label);

    component
      .find('DropInput')
      .find('input')
      .simulate('change', { target: { value: 'rio-de-' } });
    expect(
      component
        .find('DropItem')
        .find('span')
        .text(),
    ).toEqual(items[1].label);
  });

  it('should not display items with special chars', () => {
    const component = mount(
      <Dropdown autocomplete onChange={mockFn} items={items} />,
    );

    component
      .find('DropInput')
      .find('input')
      .simulate('change', { target: { value: 'sao' } });
    expect(
      component
        .find('DropItem')
        .find('span')
        .exists(),
    ).toEqual(false);

    component
      .find('DropInput')
      .find('input')
      .simulate('change', { target: { value: 'São' } });
    expect(
      component
        .find('DropItem')
        .find('span')
        .text(),
    ).toEqual(items[0].label);
  });
});
