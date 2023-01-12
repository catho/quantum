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
    userEvent.click(dropdown, 'Select an option');

    const dropInput = screen.getByRole('list');
    const dropItemsFormat = dropInput.textContent.match('Lemon').toString();

    const lemonItem = itemsObjectMock[0].label.toString();

    expect(dropItemsFormat).toEqual(lemonItem);
  });

  it('should return a value from item, using a string items', () => {
    render(<DropdownLight items={itemsStringMock} />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown, 'Select an option');

    const dropInput = screen.getByRole('list');
    const dropItemsFormat = dropInput.textContent.match('Lemon').toString();

    const lemonItem = itemsStringMock[0];

    expect(dropItemsFormat).toEqual(lemonItem);
  });

  it('should return default value with [Select an option]', () => {
    render(<DropdownLight items={itemsStringMock} />);

    const dropdown = screen.getByRole('button');
    const select = screen.getByText('Select an option');

    expect(dropdown.textContent).toEqual(select.textContent);
  });
});
