import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AutoComplete from './AutoComplete';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];
const ExamplesChanged = ['melanci', 'melancia'];

describe('AutoComplete', () => {
  it('Should render Autocomplete', () => {
    const { container } = render(<AutoComplete suggestions={Examples} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render Autocomplete with dark skin', () => {
    const { container } = render(
      <AutoComplete skin="dark" suggestions={Examples} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the AutoComplete open', async () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'm');

    const autoCompleteOptions = (await screen.findAllByRole('listbox'))[0];

    expect(autoCompleteOptions).toBeInTheDocument();
  });

  it('should open the options when input is clicked', async () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    await userEvent.click(input);

    const autoCompleteOptions = (await screen.findAllByRole('listbox'))[0];

    expect(autoCompleteOptions).toBeInTheDocument();
  });

  it('should select a item when is clicked', async () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'melanci');

    const melanciaOption = (
      await screen.findAllByRole('option', {
        name: /melancia/i,
      })
    )[0];

    await userEvent.click(melanciaOption);

    expect(input.getAttribute('value')).toBe('melancia');
  });

  it('should close the options after item is clicked', async () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'melanci');

    const autoCompleteOptions = (await screen.findAllByRole('listbox'))[0];

    expect(autoCompleteOptions).toBeInTheDocument();

    const melanciaOption = (
      await screen.findAllByRole('option', {
        name: /melancia/i,
      })
    )[0];

    await userEvent.click(melanciaOption);

    expect(autoCompleteOptions).not.toBeInTheDocument();
  });

  it('should correctly filter items with accent', async () => {
    render(
      <AutoComplete
        suggestions={['morango', 'melancia', 'maça', 'banana', 'laranja']}
      />,
    );
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'maçã');

    const maçaOption = (
      await screen.findAllByRole('option', {
        name: /maça/i,
      })
    )[0];

    expect(maçaOption).toBeInTheDocument();
  });

  it('should correctly filter items without accent', async () => {
    render(
      <AutoComplete
        suggestions={['morango', 'melancia', 'maçã', 'banana', 'laranja']}
      />,
    );
    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'maça');

    const maçaOption = (
      await screen.findAllByRole('option', {
        name: /maçã/i,
      })
    )[0];

    expect(maçaOption).toBeInTheDocument();
  });

  it('should close the options when there is no valid option', async () => {
    render(<AutoComplete suggestions={Examples} />);

    const input = screen.getByRole('combobox');

    await userEvent.click(input);

    const autoCompleteOptions = screen.getAllByRole('listbox')[0];

    await userEvent.type(input, 'mon');

    expect(autoCompleteOptions).not.toBeInTheDocument();
  });

  it('should clean input value when clicked in the x button', async () => {
    const { container } = render(<AutoComplete suggestions={Examples} />);

    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'mon');

    const cleanButton = container.querySelectorAll('svg')[0];

    await userEvent.click(cleanButton);

    expect(input.getAttribute('value')).toBe('');
  });

  it('should has an error icon when "error" prop is set', () => {
    const { container } = render(
      <AutoComplete suggestions={Examples} error="error text" />,
    );

    const InputErrorIconElement = container.querySelectorAll('svg')[0];

    expect(InputErrorIconElement).toBeInTheDocument();
  });

  it('should call onChangeMock callback when prop is setted', async () => {
    const onChangeMock = jest.fn();
    render(<AutoComplete suggestions={Examples} onChange={onChangeMock} />);

    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'mora');

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should call selectedItemMock callback when prop is setted and user selected a option', async () => {
    const selectedItemMock = jest.fn();
    render(
      <AutoComplete suggestions={Examples} onSelectedItem={selectedItemMock} />,
    );

    const input = screen.getByRole('combobox');

    await userEvent.type(input, 'melanci');

    const autoCompleteOptions = screen.getByRole('option', {
      name: /melancia/i,
    });

    await userEvent.click(autoCompleteOptions);

    expect(selectedItemMock).toHaveBeenCalled();
  });

  it('should has an helper text prop is set', () => {
    render(<AutoComplete suggestions={Examples} helperText="helper text" />);

    expect(screen.getByText(/helper text/i)).toBeInTheDocument();
  });

  it('should filter the options if suggestions prop is changed', async () => {
    const { rerender } = render(<AutoComplete suggestions={Examples} />);

    const input = screen.getByRole('combobox');

    userEvent.type(input, 'melanci');

    rerender(<AutoComplete suggestions={ExamplesChanged} />);

    // Esse teste está correto? Na doc foram feitos testes e o valor digitado no input
    // Não vira um dos itens da lista da sugestão. Por exemplo, somente
    // "melancia" é exibido e não "melanc" e "melancia"

    await waitFor(() => expect(input).toHaveValue('melanci'));
    expect(await screen.findAllByRole('option')).toHaveLength(2);
    expect(screen.getByRole('option', { name: 'melanci' })).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: 'melancia' }),
    ).toBeInTheDocument();
  });

  it('Should have a value when prop value is set', () => {
    const initialValue = 'initial value';
    render(<AutoComplete value={initialValue} suggestions={[]} />);
    const autoCompleteInput = screen.getByRole('combobox');
    expect(autoCompleteInput).toHaveAttribute('value', initialValue);
  });
});
