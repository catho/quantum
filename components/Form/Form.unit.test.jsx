/* eslint-disable no-console */

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import validations from './validations';
import Form from './Form';
import Input from '../Input';
import Button from '../Button';

const onValidSubmitCallback = jest.fn();
const onSubmitCallback = jest.fn();

const FormWithoutValidations = () => (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Input name="name" label="Name" />
    <Button type="submit"> Enviar </Button>
  </Form>
);

const FormWithValidations = () => (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Input name="required" label="required" validate={validations.Required} />
    <Input name="cpf" label="CPF" validate={validations.CPF} />
    <Input name="cep" label="CEP" validate={validations.CEP} />
    <Input name="birthday" label="Birthday" validate={validations.Date} />
    <Input name="email" label="E-mail" validate={validations.Email} />
    <Input
      name="email_accent"
      label="E-mail_Accent"
      validate={[
        {
          validate: validations.EmailBlockAccent,
          error: 'E-mail com acentos não são permitidos',
        },
      ]}
    />
    <Input
      name="address"
      label="Address"
      validate={validations.MinLength}
      minLength="8"
    />
    <Input
      name="country"
      label="Country"
      value="1234"
      validate={validations.MaxLength}
      maxLength="3"
    />

    <Button type="submit"> Enviar </Button>
  </Form>
);

describe('Form component ', () => {
  it('should match the snapshot', () => {
    const { container } = render(FormWithValidations());
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('Without validations', () => {
    it('Should call "onValidSubmit" and "onSubmit" callback on a valid submit', () => {
      render(FormWithoutValidations());
      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);
      expect(onValidSubmitCallback).toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });
  });

  const validationTests = [
    {
      fieldName: 'required',
      validationName: 'Required',
      errorMsg: 'Campo obrigatório',
      valid: 'foo',
    },
    {
      fieldName: 'CPF',
      validationName: 'CPF',
      errorMsg: 'CPF inválido',
      valid: '321.970.213-97',
      invalid: '123.456.212-34',
    },
    {
      fieldName: 'CEP',
      validationName: 'CEP',
      errorMsg: 'CEP inválido',
      valid: '02354128',
    },
    {
      fieldName: 'Birthday',
      validationName: 'Date',
      errorMsg: 'Data inválida',
      valid: '20/11/1981',
      invalid: '30/02/1950',
    },
    {
      fieldName: 'E-mail',
      validationName: 'Email',
      errorMsg: 'E-mail inválido',
      valid: 'foo@baz.com',
      invalid: 'foo@baz',
    },
    {
      fieldName: 'E-mail_Accent',
      validationName: 'Email with accent',
      errorMsg: 'E-mail com acentos não são permitidos',
      valid: 'foo@baz.com',
      invalid: 'foá@baz.com',
    },
    {
      fieldName: 'Address',
      validationName: 'MinLength',
      errorMsg: 'Mínimo de 8 caracteres',
      valid: '12345678',
      invalid: '12',
    },
  ];

  describe('With validations', () => {
    it('Shouldn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      render(FormWithValidations());
      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });

    it('Should test maxLength without starting with error', async () => {
      render(
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input
            name="country"
            label="Country"
            validate={validations.MaxLength}
            maxLength="3"
          />
          <Button type="submit"> Enviar </Button>
        </Form>,
      );
      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);

      const input = screen.getByRole('textbox', { name: /Country/i });

      await userEvent.type(input, '123');

      expect(
        screen.queryByText('Maximo de 3 caracteres'),
      ).not.toBeInTheDocument();
    });

    validationTests.forEach(test => {
      it(`should validate ${test.validationName}`, async () => {
        render(FormWithValidations());
        const input = screen.getByRole('textbox', { name: test.fieldName });
        if (test.invalid) {
          await userEvent.type(input, test.invalid);
        }

        const button = screen.getByRole('button', { value: 'Enviar' });
        fireEvent.click(button);

        expect(screen.getByText(test.errorMsg)).toBeInTheDocument();

        await userEvent.type(input, test.valid);

        expect(screen.queryByText(test.errorMsg)).not.toBeInTheDocument();
      });
    });

    it('Should exec validations in diferent formats', async () => {
      const form = (
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input
            name="name"
            label="Name"
            minLength="8"
            validate={[
              validations.Required,
              {
                validate: validations.MinLength,
                error: 'Valor mínimo de caracteres não alcançado',
              },
            ]}
          />
          <Button type="submit"> Enviar </Button>
        </Form>
      );

      render(form);

      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);

      expect(onSubmitCallback).toHaveBeenCalled();

      const input = screen.getByRole('textbox', { name: /Name/i });
      await userEvent.type(input, 'Some value');

      fireEvent.click(button);

      expect(onValidSubmitCallback).toHaveBeenCalled();
    });

    it('Should exec validation in nested input ', async () => {
      const errorMsg = 'Valor mínimo de caracteres não alcançado';
      const formNested = (
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input
            name="lastName"
            label="Lastname"
            minLength="20"
            validate={[
              validations.Required,
              {
                validate: validations.MinLength,
                error: errorMsg,
              },
            ]}
          />
          <Input
            name="name"
            label="Name"
            minLength="20"
            validate={[
              validations.Required,
              {
                validate: validations.MinLength,
                error: errorMsg,
              },
            ]}
          />
          <Button type="submit"> Enviar </Button>
        </Form>
      );

      render(formNested);
      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);

      expect(onSubmitCallback).toHaveBeenCalled();

      const inputName = screen.getByRole('textbox', { name: /Name/ });
      const inputLastName = screen.getByRole('textbox', { name: /Lastname/ });

      await userEvent.type(inputName, 'Some value');
      await userEvent.type(inputLastName, 'Some value');

      fireEvent.click(button);
      expect(onValidSubmitCallback).not.toHaveBeenCalled();

      await userEvent.type(inputName, 'Some value bigger than other one');
      await userEvent.type(inputLastName, 'Some value bigger than other one');

      fireEvent.click(button);

      expect(onValidSubmitCallback).toHaveBeenCalled();
    });
  });

  describe('Valid state', () => {
    it('Should be false when an error occurred', () => {
      const form = (
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input name="foo" validate={validations.Required} />
          <Button type="submit"> Enviar </Button>
        </Form>
      );

      render(form);
      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);

      expect(onSubmitCallback).toHaveBeenCalled();
      expect(onValidSubmitCallback).not.toHaveBeenCalled();
    });

    it('Should be true when everything is ok', () => {
      const form = (
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input name="foo" validate={validations.Required} value="foo" />
          <Button type="submit"> Enviar </Button>
        </Form>
      );
      render(form);
      const button = screen.getByRole('button', { value: 'Enviar' });
      fireEvent.click(button);

      expect(onSubmitCallback).toHaveBeenCalledWith({ valid: true });
      expect(onValidSubmitCallback).toHaveBeenCalledWith({ foo: 'foo' });
    });
  });
});
