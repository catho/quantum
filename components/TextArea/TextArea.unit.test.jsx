import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from './TextArea';

describe('TextArea component', () => {
  it('should match snapshots', () => {
    const TEXT_AREAS = [
      <TextArea />,
      <TextArea value="foo" />,
      <TextArea label="Text label" />,
      <TextArea label="Text label" required />,
      <TextArea disabled />,
      <TextArea placeholder="this input has a placeholder" />,
      <TextArea helperText="this is a helper text" />,
      <TextArea error="Error message" />,
      <TextArea skin="dark" />,
      <TextArea skin="dark" value="foo" />,
      <TextArea skin="dark" label="Text label" />,
      <TextArea skin="dark" label="Text label" required />,
      <TextArea skin="dark" disabled />,
      <TextArea skin="dark" placeholder="this input has a placeholder" />,
      <TextArea skin="dark" helperText="this is a helper text" />,
      <TextArea skin="dark" error="Error message" />,
      <TextArea isAutoResize />,
    ];

    TEXT_AREAS.forEach((textArea) => {
      const { container } = render(textArea);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should has a required signal when "required" and "label" props are set ', () => {
    render(<TextArea label="Text label" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should have a placeholder when "placeholder" prop is set ', () => {
    const placeholderText = 'this input has a placeholder';
    render(<TextArea placeholder={placeholderText} />);
    const textArea = screen.getByRole('textbox');

    expect(textArea.getAttribute('placeholder')).toEqual(placeholderText);
  });

  it('should have a helper text when "helper text" prop is set ', () => {
    const helperTextContent = 'this is a helper text';
    render(<TextArea helperText={helperTextContent} />);

    const textAreaHelperText = screen.getByText(helperTextContent);

    expect(textAreaHelperText).toBeInTheDocument();
  });

  it('should have a error text when "error" prop is set', () => {
    const errorMessageContent = 'Error message';
    render(<TextArea error={errorMessageContent} />);

    const errorMessage = screen.getByText(errorMessageContent);
    expect(errorMessage).toBeInTheDocument();
  });

  it('should onChange props be called', async () => {
    const onChangeEventMock = jest.fn();
    render(
      <TextArea label="Text label" value="foo" onChange={onChangeEventMock} />,
    );
    const textArea = screen.getByRole('textbox');

    await userEvent.type(textArea, 'foo');

    expect(onChangeEventMock).toHaveBeenCalled();
  });

  describe('with a label', () => {
    it('should match label "htmlFor" label param with "id" input param', () => {
      const id = 'input-id';
      const { container } = render(<TextArea label="Text label" id={id} />);

      const textArea = screen.getByRole('textbox');
      const label = container.querySelector('label');

      expect(label.getAttribute('for')).toEqual(id);
      expect(textArea.getAttribute('id')).toEqual(id);
    });

    it('should match label "htmlFor" label param and "input" param with generated id', () => {
      const { container } = render(<TextArea label="Text label" value="foo" />);

      const textArea = screen.getByRole('textbox');
      const label = container.querySelector('label');

      expect(textArea.getAttribute('id')).toEqual(label.getAttribute('for'));
    });
  });

  it('should update state when value property is changed', () => {
    const { rerender } = render(<TextArea label="Text label" value="foo" />);
    const componentInput = screen.getByRole('textbox', /Text label/i);
    expect(componentInput.value).toEqual('foo');

    rerender(<TextArea label="Text label" value="bar" />);
    expect(componentInput.value).toEqual('bar');
  });
});
