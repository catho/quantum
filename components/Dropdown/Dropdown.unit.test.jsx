import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    alt: 'Master Card',
  },
  {
    label: 'American Express Card',
    value: 'creditcard_1',
    img: 'https://dummyimage.com/24x24',
    alt: 'American Express Card',
  },
  {
    label: 'Visa',
    value: 'creditcard_2',
    img: 'https://dummyimage.com/24x24',
    alt: 'Visa',
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
    render(withSelectedItem);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const option = screen.getByRole('option', { name: /baz/i });
    expect(option).toBeInTheDocument();
  });

  it('should render the list options when button is clicked', () => {
    render(withItems);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const ulList = screen.getByRole('list');
    expect(ulList).toBeInTheDocument();
  });

  it('should show image in dropdown item when its passed on items prop', () => {
    const firstItemWithImage = itemsWithImage[0];
    render(withImage);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const masterCardImage = screen.getByRole('img', { name: /Master Card/i });

    expect(masterCardImage.getAttribute('src')).toMatch(firstItemWithImage.img);
    expect(masterCardImage.getAttribute('alt')).toMatch(firstItemWithImage.alt);
  });

  it('should pass correctly the name prop to input hidden', () => {
    const { container } = render(withName);
    const input = container.querySelector('input');

    expect(input.getAttribute('name')).toMatch(INPUT_NAME);
  });

  it('should have all the properties passed to input (autocomplete)', () => {
    const { container } = render(
      <Dropdown
        autocomplete
        id="input-autocomplete"
        data-gtm-event-category="some-value"
      />,
    );
    const input = container.querySelectorAll('input')[1];
    expect(input.getAttribute('id')).toBe('input-autocomplete');
    expect(input.getAttribute('data-gtm-event-category')).toBe('some-value');
  });

  it('should render the label if value its not informed', () => {
    const filteredItems = ITEMS.map((item) => ({ label: item.label }));
    render(<Dropdown items={filteredItems} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByRole('option', { name: /foo/i });
    expect(option).toBeInTheDocument();
  });

  it('should render the value if label its not informed', () => {
    const filteredItems = ITEMS.map((item) => ({ value: item.value }));
    render(<Dropdown items={filteredItems} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByRole('option', { name: /fooKey/i });
    expect(option).toBeInTheDocument();
  });

  it('should render the item if value or label are not informed', () => {
    render(
      <Dropdown
        items={['manga', 'morango', 'melancia']}
        helperText="texto de ajuda"
      />,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByRole('option', { name: /melancia/i });
    expect(screen.getByText(/texto de ajuda/i)).toBeInTheDocument();
    expect(option).toBeInTheDocument();
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

  it('should call the callback and set a new value', () => {
    render(<Dropdown onChange={mockFn} id="dropdown" items={items} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const option = screen.getByRole('option', { name: /foo/i });
    fireEvent.click(option);

    expect(mockFn).toHaveBeenCalledTimes(1);
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

  it('should display items ignoring special chars São Paulo', async () => {
    render(
      <Dropdown
        autocomplete
        ignoreSpecialChars
        onChange={mockFn}
        items={items}
      />,
    );

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'sao');
    expect(screen.getByText(/São Paulo - SP/i)).toHaveTextContent(
      items[0].label,
    );
  });

  it('should display items ignoring special chars Rio de Janeiro', async () => {
    render(
      <Dropdown
        autocomplete
        ignoreSpecialChars
        onChange={mockFn}
        items={items}
      />,
    );
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'rio-de-');
    expect(screen.getByText(/Rio de Janeiro - RJ/i)).toHaveTextContent(
      items[1].label,
    );
  });

  it('should not display items with special chars São Paulo', async () => {
    render(<Dropdown autocomplete onChange={mockFn} items={items} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'sao');

    expect(screen.queryByText(/São Paulo - SP/i)).not.toBeInTheDocument();
  });

  it('should display items with special chars São Paulo', async () => {
    render(<Dropdown autocomplete onChange={mockFn} items={items} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'São');

    expect(screen.getByText(/São Paulo - SP/i)).toHaveTextContent(
      items[0].label,
    );
  });
});
