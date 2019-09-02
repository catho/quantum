import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';

jest.mock('react-text-mask', () => props => (
  <input type="text" {...{ ...props }} />
));

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

    INPUTS.forEach(input =>
      expect(renderer.create(input).toJSON()).toMatchSnapshot(),
    );
  });
});
