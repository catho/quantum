// Generated with scripts/create-component.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownLight from './DropdownLight';

import {
  itemsStringMock,
  itemsObjectMock,
} from '../../stories/DropdownLight/mock';

const INPUT_NAME = 'dropdown-name';

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

  it('should close Dropdown Options when user press Escape', () => {
    render(<DropdownLight items={itemsStringMock} />);

    const dropdown = screen.getByRole('button', {
      name: 'abrir lista de itens',
    });
    userEvent.click(dropdown);

    expect(
      screen.getByRole('button', { name: 'fechar lista de itens' }),
    ).toBeInTheDocument();

    userEvent.keyboard('{Escape}');

    expect(
      screen.queryByRole('button', { name: 'fechar lista de itens' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'abrir lista de itens' }),
    ).toBeInTheDocument();
  });

  it('should allow User to select an option using only arrowKeys and Enter', () => {
    const onChangeMock = jest.fn();
    render(<DropdownLight items={itemsStringMock} onChange={onChangeMock} />);

    const dropdown = screen.getByRole('button', {
      name: 'abrir lista de itens',
    });
    userEvent.click(dropdown);

    userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowUp}{Enter}');

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Banana');
  });

  it('should open select when user press enter on it', () => {
    render(<DropdownLight items={itemsStringMock} />);

    userEvent.tab();
    userEvent.keyboard('{Enter}');

    expect(
      screen.getByRole('button', { name: 'fechar lista de itens' }),
    ).toBeInTheDocument();

    userEvent.keyboard('{Enter}');

    expect(
      screen.getByRole('button', { name: 'abrir lista de itens' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'fechar lista de itens' }),
    ).not.toBeInTheDocument();
  });
});
