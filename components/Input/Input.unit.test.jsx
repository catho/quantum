import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
import masks from '../shared/masks';
import { colors } from '../shared/theme';

describe('Input component', () => {
  it('should has a required signal when "required" prop is set', () => {
    const { container } = render(
      <Input value="foo" label="label of input" required />,
    );

    expect(container.querySelector('em')).toHaveTextContent('*');
  });

  it('should has a search icon when type prop is set to "search" value', () => {
    const { container } = render(
      <Input
        value="foo"
        label="label of input"
        type="search"
        descriptionLabel="search"
      />,
    );

    expect(container.querySelectorAll('svg')[1]).toBeInTheDocument();
  });

  it('should have error msg', () => {
    render(
      <Input
        value="foo"
        label="label of input"
        skin="dark"
        error="mensagem de erro"
      />,
    );

    const errorMsg = screen.getByText(/mensagem de erro/i);

    expect(errorMsg).toBeInTheDocument();
  });

  it('should has an error icon when "error" prop is set', () => {
    const { container } = render(
      <Input value="foo" label="label of input" error="error text" />,
    );

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should has a helper text when "helperText" prop is set ', () => {
    const helperTextContent = 'this is a helper text';
    render(
      <Input
        value="foo"
        label="label of input"
        helperText={helperTextContent}
      />,
    );

    expect(screen.getByText(helperTextContent)).toBeInTheDocument();
  });

  it('should has a description label when "descriptionLabel" prop was set', () => {
    const descriptionLabelContent = 'this is a description label';
    render(
      <Input
        value="foo"
        label="label of input"
        descriptionLabel={descriptionLabelContent}
      />,
    );

    expect(screen.getByText(descriptionLabelContent)).toBeInTheDocument();
  });

  it('should has a placeholder when "placeholder" is text', () => {
    const placeholderContent = 'this is a input placeholder';
    render(
      <Input
        value="foo"
        label="label of input"
        placeholder={placeholderContent}
      />,
    );

    const input = screen.getByRole('textbox', { name: /label of input/i });

    expect(input.getAttribute('placeholder')).toMatch(placeholderContent);
  });

  it('should has a clear icon when input value is not empty', () => {
    const { container } = render(<Input value="foo" label="label of input" />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should generate a new id for it instance, when "id" prop is not set', () => {
    const { container: inputA } = render(
      <Input value="foo" label="label of input a" />,
    );
    const { container: inputB } = render(
      <Input value="foo" label="label of input b" />,
    );
    const inputIdA = inputA.querySelector('input');
    const inputIdB = inputB.querySelector('input');

    expect(inputIdA.getAttribute('id')).toBeTruthy();
    expect(inputIdB.getAttribute('id')).toBeTruthy();

    expect(inputIdA.getAttribute('id')).not.toEqual(
      inputIdB.getAttribute('id'),
    );
  });

  it('should apply a mask prop to input value', () => {
    render(
      <Input mask={masks.cpf} value="99999999999" label="Digite seu cpf" />,
    );

    expect(screen.getByDisplayValue('999.999.999-99')).toBeInTheDocument();
  });

  it('should call onClean callback when prop is setted', () => {
    const onCleanMock = jest.fn();
    const { container } = render(
      <Input value="foo" onClean={onCleanMock} label="Digite seu cpf" />,
    );
    const inputIcon = container.querySelector('svg');
    fireEvent.click(inputIcon);
    expect(onCleanMock).toHaveBeenCalled();
  });

  it('should change input value when user types a different value', async () => {
    const { container } = render(<Input value="foo" label="Digite seu cpf" />);

    const input = screen.getByRole('textbox', { name: /Digite seu cpf/i });
    expect(input.getAttribute('value')).toEqual('foo');

    const inputIcon = container.querySelector('svg');
    fireEvent.click(inputIcon);

    await userEvent.type(input, 'bar');

    expect(input.getAttribute('value')).toEqual('bar');
  });

  describe('with a label', () => {
    it('should match label "htmlFor" label param with "id" input param', () => {
      const id = 'input-id';
      const { container } = render(<Input label="Text label" id={id} />);

      const input = screen.getByRole('textbox', { name: /Text label/i });
      const label = container.querySelector('label');
      const labelHtmlFor = label.getAttribute('for');
      const inputId = input.getAttribute('id');

      expect(labelHtmlFor).toEqual(id);
      expect(inputId).toEqual(id);
    });

    it('should match label "htmlFor" label param and "input" param with generated id', () => {
      const { container } = render(<Input label="Text label" value="foo" />);
      const labelId = container.querySelector('label').getAttribute('for');
      const inputId = screen
        .getByRole('textbox', /Text label/i)
        .getAttribute('id');

      expect(labelId).toEqual(inputId);
    });
  });

  describe('with password type', () => {
    it('should has "password" as default input type', () => {
      const { container } = render(<Input type="password" />);
      expect(container.querySelector('svg')).toBeInTheDocument();

      const input = container.querySelector('input');
      expect(input.getAttribute('type')).toEqual('password');
    });

    it('should toggle input type, when password icon is clicked', () => {
      const { container } = render(<Input type="password" />);

      const input = container.querySelector('input');

      const icon = container.querySelector('svg');

      expect(icon).toBeInTheDocument();

      fireEvent.click(icon);

      const iconVisible = container.querySelector('svg');

      expect(iconVisible).toBeInTheDocument();

      expect(icon).not.toEqual(iconVisible);
      expect(input.getAttribute('type')).toEqual('text');

      fireEvent.click(iconVisible);

      const iconAfterVisible = container.querySelector('svg');

      expect(iconAfterVisible).toBeInTheDocument();
      expect(iconAfterVisible).not.toEqual(iconVisible);
      expect(input.getAttribute('type')).toEqual('password');
    });
  });

  it('should onChange props be called', async () => {
    const onChangeEventMock = jest.fn();
    render(
      <Input label="Text label" value="foo" onChange={onChangeEventMock} />,
    );
    const componentInput = screen.getByRole('textbox', /Text label/i);
    await userEvent.type(componentInput, 'bar');
    expect(onChangeEventMock).toHaveBeenCalled();
  });

  it('should update state when value property is changed', () => {
    const { rerender } = render(<Input label="Text label" value="foo" />);
    const componentInput = screen.getByRole('textbox', /Text label/i);

    expect(componentInput.getAttribute('value')).toEqual('foo');

    rerender(<Input label="Text label" value="bar" />);

    expect(componentInput.getAttribute('value')).toEqual('bar');
  });
});
