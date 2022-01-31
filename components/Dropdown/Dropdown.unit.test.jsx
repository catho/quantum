import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Dropdown from './Dropdown';

const INPUT_NAME = 'dropdown-name';
const ITEMS = [
  { value: 'fooKey', label: 'foo' },
  { value: 'barKey', label: 'bar' },
  { value: 'bazKey', label: 'baz' },
];
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
  const withItems = <Dropdown items={ITEMS} />;

  const withSelectedItem = (
    <Dropdown items={ITEMS} selectedItem={selectedItemObject} />
  );

  const withImage = (
    <Dropdown
      placeholder="What credit card do you prefer?"
      label="choose a credit card"
      items={itemsWithImage}
    />
  );

  const withName = <Dropdown name={INPUT_NAME} items={ITEMS} />;

  it('should match the snapshot', () => {
    const { container: defaultDropdown } = render(<Dropdown />);
    const { container: withPlaceHolder } = render(
      <Dropdown placeholder="Dropdown placeholder" />,
    );
    const { container: withPlaceHolderNull } = render(
      <Dropdown placeholder="" />,
    );
    const { container: withError } = render(<Dropdown error="Error message" />);
    const { container: disabled } = render(<Dropdown disabled />);
    const { container: withLabel } = render(
      <Dropdown label="Dropdown label" />,
    );
    const { container: required } = render(
      <Dropdown required label="Dropdown label" />,
    );
    const { container: autocomplete } = render(<Dropdown autocomplete />);
    const { container: withItemsExample } = render(withItems);
    const { container: withSelectedItemExample } = render(withSelectedItem);
    const { container: withImageExample } = render(withImage);
    const { container: withNameExample } = render(withName);

    expect(defaultDropdown.firstChild).toMatchSnapshot();
    expect(withPlaceHolder.firstChild).toMatchSnapshot();
    expect(withPlaceHolderNull.firstChild).toMatchSnapshot();
    expect(withError.firstChild).toMatchSnapshot();
    expect(disabled.firstChild).toMatchSnapshot();
    expect(withLabel.firstChild).toMatchSnapshot();
    expect(required.firstChild).toMatchSnapshot();
    expect(autocomplete.firstChild).toMatchSnapshot();
    expect(withItemsExample.firstChild).toMatchSnapshot();
    expect(withSelectedItemExample.firstChild).toMatchSnapshot();
    expect(withImageExample.firstChild).toMatchSnapshot();
    expect(withNameExample.firstChild).toMatchSnapshot();
  });

  it('should match the snapshot with dark skin', () => {
    const { container: darkDefaultDropdown } = render(<Dropdown dark="skin" />);
    const { container: darkWithPlaceHolder } = render(
      <Dropdown placeholder="Dropdown placeholder" dark="skin" />,
    );
    const { container: darkWithPlaceHolderNull } = render(
      <Dropdown placeholder="" dark="skin" />,
    );
    const { container: darkWithError } = render(
      <Dropdown error="Error message" dark="skin" />,
    );
    const { container: darkDisabled } = render(
      <Dropdown disabled dark="skin" />,
    );
    const { container: darkWithLabel } = render(
      <Dropdown label="Dropdown label" dark="skin" />,
    );
    const { container: darkRequired } = render(
      <Dropdown required label="Dropdown label" dark="skin" />,
    );
    const { container: darkAutocomplete } = render(
      <Dropdown autocomplete dark="skin" />,
    );

    expect(darkDefaultDropdown.firstChild).toMatchSnapshot();
    expect(darkWithPlaceHolder.firstChild).toMatchSnapshot();
    expect(darkWithPlaceHolderNull.firstChild).toMatchSnapshot();
    expect(darkWithError.firstChild).toMatchSnapshot();
    expect(darkDisabled.firstChild).toMatchSnapshot();
    expect(darkWithLabel.firstChild).toMatchSnapshot();
    expect(darkRequired.firstChild).toMatchSnapshot();
    expect(darkAutocomplete.firstChild).toMatchSnapshot();
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

    expect(component.find('ArrowIcon').prop('name')).toEqual('arrow_drop_down');
    component.find('DropInput').simulate('click');
    expect(component.find('ArrowIcon').prop('name')).toEqual('arrow_drop_up');
  });

  it('should change the position of arrow icon when click to close list', () => {
    const component = mount(withItems);
    component.find('DropInput').simulate('click');
    expect(component.find('ArrowIcon').prop('name')).toEqual('arrow_drop_up');
    component.find('DropInput').simulate('click');
    expect(component.find('ArrowIcon').prop('name')).toEqual('arrow_drop_down');
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

  it('should have all the properties passed to input (autocomplete)', () => {
    const component = mount(
      <Dropdown
        autocomplete
        id="input-autocomplete"
        data-gtm-event-category="some-value"
      />,
    );
    const input = component.find('DropInput').find('input');

    expect(input.prop('id')).toEqual('input-autocomplete');
    expect(input.prop('data-gtm-event-category')).toEqual('some-value');
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
