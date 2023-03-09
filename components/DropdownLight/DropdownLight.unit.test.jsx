// Generated with scripts/create-component.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownLight from './DropdownLight';

import {
  itemsStringMock,
  itemsObjectMock,
  itemsWithImageMock,
} from '../../stories/DropdownLight/mock';

const INPUT_NAME = 'dropdown-name';
const ARROW_DOWN_KEY_CODE = '{ArrowDown}';
const ARROW_UP_KEY_CODE = '{ArrowUp}';
const ENTER_KEY_CODE = '{Enter}';
const ESCAPE_KEY_CODE = '{Escape}';

describe('<DropdownLight />', () => {
  it('should match the snapshots', () => {
    expect(
      render(<DropdownLight items={itemsStringMock} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <DropdownLight name={INPUT_NAME} items={itemsStringMock} />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <DropdownLight items={itemsStringMock} label="some text" required />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <DropdownLight items={itemsStringMock} error="Some error text..." />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <DropdownLight
          items={itemsStringMock}
          helperText="'this is a helper text'"
        />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(
        <DropdownLight
          items={itemsStringMock}
          placeholder="this is a input placeholder"
        />,
      ).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<DropdownLight items={itemsStringMock} disabled />).asFragment(),
    ).toMatchSnapshot();
  });

  it('should return a value from item, using a object items', () => {
    render(<DropdownLight items={itemsObjectMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    const optionItem = screen.getByRole('option', { name: 'Lemon' });

    userEvent.click(optionItem);

    const input = screen.getByRole('textbox', { hidden: true });

    const lemonItem = itemsObjectMock[0].label;

    expect(input.value).toEqual(lemonItem);
  });

  it('should return a value from item, using a string items', () => {
    render(<DropdownLight items={itemsStringMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    const optionItem = screen.getByRole('option', { name: 'Lemon' });
    userEvent.click(optionItem);

    userEvent.click(dropdown);
    const input = screen.getByRole('textbox', { hidden: true });

    const lemonItem = itemsStringMock[0];

    expect(input.value).toEqual(lemonItem);
  });

  it('should show the check icon when the item from list selected', () => {
    render(<DropdownLight items={itemsStringMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    const optionItem = screen.getByRole('option', { name: 'Lemon' });
    userEvent.click(optionItem);

    userEvent.click(dropdown);

    const optionItemChecked = screen.getByRole('option', { name: 'Lemon' });
    const checkIcon = optionItemChecked.querySelector('svg');

    expect(checkIcon).toBeInTheDocument();
  });

  it('should pass correctly the name prop to input hidden', () => {
    render(<DropdownLight name={INPUT_NAME} items={itemsStringMock} />);
    const input = screen.getByRole('textbox', { hidden: true });

    expect(input.name).toMatch(INPUT_NAME);
  });

  it('should check if it is disabled', () => {
    render(<DropdownLight items={itemsStringMock} disabled />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should check if it is required', () => {
    const labelContent = 'some text';
    render(
      <DropdownLight items={itemsStringMock} label={labelContent} required />,
    );
    const inputText = screen.getByRole('textbox', { hidden: true });

    expect(inputText).toHaveAttribute('required');
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should check if it is with error', () => {
    const someErrorText = 'Some Error Text';
    render(<DropdownLight items={itemsStringMock} error={someErrorText} />);

    expect(screen.getByText(someErrorText)).toBeInTheDocument();
  });
  it('should check if it is with HelperText', () => {
    const helperTextContent = 'this is a helper text';
    render(
      <DropdownLight items={itemsStringMock} helperText={helperTextContent} />,
    );

    expect(screen.getByText(helperTextContent)).toBeInTheDocument();
  });

  it('should check if it is with Label', () => {
    const descriptionLabelContent = 'this is a description label';
    render(
      <DropdownLight items={itemsStringMock} label={descriptionLabelContent} />,
    );

    expect(screen.getByText('this is a description label')).toBeInTheDocument();
  });

  it('should close Dropdown Options when user press Escape', () => {
    render(<DropdownLight items={itemsStringMock} />);

    userEvent.keyboard(ESCAPE_KEY_CODE);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'abrir lista de itens' }),
    ).toBeInTheDocument();
  });

  it('should allow User to select an option using only keyboard', () => {
    render(<DropdownLight items={itemsStringMock} />);

    userEvent.tab();
    userEvent.keyboard(ENTER_KEY_CODE);

    expect(screen.getByRole('list')).toBeInTheDocument();

    userEvent.keyboard(
      `${ARROW_DOWN_KEY_CODE}${ARROW_DOWN_KEY_CODE}${ARROW_UP_KEY_CODE}${ENTER_KEY_CODE}`,
    );

    const bananaItem = itemsStringMock[1];

    const input = screen.getByRole('textbox', { hidden: true });

    expect(input.value).toEqual(bananaItem);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should call onChange when a list item is selected using keyboard', () => {
    const onChangeMock = jest.fn();
    render(<DropdownLight items={itemsObjectMock} onChange={onChangeMock} />);

    userEvent.tab();
    userEvent.keyboard(ENTER_KEY_CODE);

    userEvent.keyboard(
      `${ARROW_DOWN_KEY_CODE}${ARROW_DOWN_KEY_CODE}${ENTER_KEY_CODE}`,
    );

    expect(onChangeMock).toHaveBeenCalledWith({
      label: 'Strawberry',
      value: 'Strawberry',
    });
  });

  it('should check if it is with PlaceHolder', () => {
    const placeholderContent = 'this is a input placeholder';
    render(
      <DropdownLight
        items={itemsStringMock}
        placeholder={placeholderContent}
      />,
    );

    expect(screen.getByLabelText('abrir lista de itens')).toHaveTextContent(
      placeholderContent,
    );
  });

  it('should show if there is icon', () => {
    render(<DropdownLight items={itemsWithImageMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    const optionItem = screen.getByRole('option', {
      name: 'Visa image description',
    });

    const selectionItemImage = optionItem.querySelector('img');

    expect(selectionItemImage).toBeInTheDocument();
  });
});
