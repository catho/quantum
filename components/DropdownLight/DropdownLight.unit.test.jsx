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

  it('should check if it is disabled', () => {
    render(<DropdownLight items={itemsStringMock} disabled />);

    const dropdown = screen.getByRole('button');
    userEvent.click(dropdown);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
  it('should check if it is required', () => {
    const { container } = render(
      <DropdownLight items={itemsStringMock} required />,
    );

    expect(container.querySelector('em')).toHaveTextContent('*');
  });
  it('should check if it is with error', () => {
    render(<DropdownLight items={itemsStringMock} error="Some Error Text" />);

    const dropdown = screen.getByRole('button');
    const InputErrorIconElement = dropdown.querySelector('svg');

    expect(InputErrorIconElement).toBeInTheDocument();
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

    expect(screen.getByText(descriptionLabelContent)).toBeInTheDocument();
  });
  it('should check if it is with PlaceHolder', () => {
    const placeholderContent = 'this is a input placeholder';
    render(
      <DropdownLight
        items={itemsStringMock}
        label="label of input"
        placeholder={placeholderContent}
      />,
    );

    const input = screen.getByRole('textbox', { hidden: true });

    expect(input.getAttribute('placeholder')).toMatch(placeholderContent);
  });
});
