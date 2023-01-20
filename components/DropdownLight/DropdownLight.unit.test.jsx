// Generated with scripts/create-component.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropdownLight from './DropdownLight';

import {
  itemsStringMock,
  itemsObjectMock,
} from '../../stories/DropdownLight/mock';

describe('<DropdownLight />', () => {
  it('should match the snapshots', () => {
    expect(
      render(<DropdownLight items={itemsStringMock} />).asFragment(),
    ).toMatchSnapshot();
  });

  it('should return a value from item, using a object items', () => {
    render(<DropdownLight items={itemsObjectMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    const optionItem = screen.getByText('Lemon');
    userEvent.click(optionItem);

    const input = Number(screen.getByLabelText('selecione uma opcao').value);

    const lemonItem = itemsObjectMock[0].value;

    expect(input).toEqual(lemonItem);
  });

  it('should return a value from item, using a string items', () => {
    render(<DropdownLight items={itemsStringMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    const optionItem = screen.getByText('Lemon');
    userEvent.click(optionItem);

    const input = screen.getByLabelText('selecione uma opcao').value;

    const lemonItem = itemsStringMock[0];

    expect(input).toEqual(lemonItem);
  });
});
