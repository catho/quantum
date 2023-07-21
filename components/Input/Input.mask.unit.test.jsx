import { render } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('should match snapshots', () => {
    const INPUTS = [
      <Input />,
      <Input value="foo" />,
      <Input label="Text label" />,
      <Input error="Error message" />,
      <Input required />,
      <Input type="search" />,
      <Input disabled />,
      <Input helperText="this is a helper text" />,
      <Input descriptionLabel="this is a description label" />,
      <Input descriptionLabel="this is a description label" type="search" />,
      <Input placeholder="this input has a placeholder" />,
      <Input.CEP />,
      <Input.CNPJ />,
      <Input.CPF />,
      <Input.Date />,
      <Input.Phone />,
      <Input.Password />,
    ];

    INPUTS.forEach((input) => {
      const { container } = render(input);
      expect(container).toMatchSnapshot();
    });
  });
});
