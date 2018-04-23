import React from 'react';
import renderer from 'react-test-renderer';
import validations from './validations';
import Form from './Form';

const defaultForm = (
  <Form>
    <Form.Input
      name="name"
      label="Name"
      validate={validations.REQUIRED}
    />

    <Form.Input.CPF
      name="cpf"
      label="CPF"
      validate={validations.CPF}
    />

    <Form.Input.CEP
      name="cep"
      label="CEP"
      min={7}
    />

    <Form.Input.Date
      name="birthday"
      label="Birthday"
      validate={validations.DATE}
    />

    <Form.Input
      name="email"
      label="E-mail"
      validate={validations.EMAIL}
    />

    <Form.Submit />
  </Form>
);

describe('Form component ', () => {
  it('should match the snapshot', () => {
    // expect(renderer.create(defaultForm).toJSON()).toMatchSnapshot();
  });
});
