/* eslint-disable react/display-name */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import validations from './validations';
import Form from './Form';
import Input from '../Input';
import Button from '../Button';

jest.mock('react-text-mask', () => props => (
  <input type="text" {...{ ...props }} />
));

const onValidSubmitCallback = jest.fn();
const onSubmitCallback = jest.fn();
const mockEvent = { preventDefault: jest.fn() };

const FormWithoutValidations = () => (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Input name="name" label="Name" />
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
      name="address"
      label="Address"
      validate={validations.MinLength}
      minLength="8"
    />
    <Input
      name="country"
      label="Country"
      validate={validations.MaxLength}
      maxLength="3"
    />

    <Button type="submit"> Enviar </Button>
  </Form>
);

beforeEach(() => {
  onValidSubmitCallback.mockClear();
  onSubmitCallback.mockClear();
});

describe('Form component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(FormWithValidations()).toJSON()).toMatchSnapshot();
  });

  describe('Without validations', () => {
    it('Should call "onValidSubmit" and "onSubmit" callback on a valid submit', () => {
      const wrapper = shallow(FormWithoutValidations());
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });
  });

  describe('With validations', () => {
    it('Shouldn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      const wrapper = shallow(FormWithValidations());
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });

    it('Should validate fields', () => {
      const execTest = ({ invalid, valid, validationName, errorMsg }) => {
        const wrapper = shallow(FormWithValidations());
        const getField = () =>
          wrapper.find({ validate: validations[validationName] });

        if (invalid) {
          const initalField = getField();
          initalField.simulate('change', {
            target: { name: initalField.prop('name'), value: invalid },
          });
        }

        wrapper.simulate('submit', mockEvent);

        const beforeChange = getField();
        expect(beforeChange.prop('error')).toBe(errorMsg);

        beforeChange.simulate('change', {
          target: { name: beforeChange.prop('name'), value: valid },
        });

        const afterChange = getField();

        expect(afterChange.prop('error')).toBe('');
      };

      const validationTests = [
        {
          validationName: 'Required',
          errorMsg: 'Campo obrigatório',
          valid: 'foo',
        },
        {
          validationName: 'CPF',
          errorMsg: 'CPF inválido',
          valid: '321.970.213-97',
          invalid: '123.456.212-34',
        },
        {
          validationName: 'CEP',
          errorMsg: 'CEP inválido',
          valid: '02354128',
        },
        {
          validationName: 'Date',
          errorMsg: 'Data inválida',
          valid: '20/11/1981',
          invalid: '30/02/1950',
        },
        {
          validationName: 'Email',
          errorMsg: 'E-mail inválido',
          valid: 'foo@baz.com',
          invalid: 'foo@baz',
        },
        {
          validationName: 'MaxLength',
          errorMsg: 'Maximo de 3 caracteres',
          valid: '123',
          invalid: '123456789',
        },
        {
          validationName: 'MinLength',
          errorMsg: 'Mínimo de 8 caracteres',
          valid: '12345678',
          invalid: '12345',
        },
      ];

      validationTests.forEach(execTest);
    });

    it('Should exec validations in diferent formats', () => {
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
        </Form>
      );

      const wrapper = shallow(form);
      wrapper.simulate('submit', mockEvent);

      expect(onSubmitCallback).toHaveBeenCalled();

      const input = wrapper.find(Input);

      input.simulate('change', {
        target: { name: input.prop('name'), value: 'Some value' },
      });

      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).toHaveBeenCalled();
    });
  });

  describe('Valid state', () => {
    it('Should be false when an error occurred', () => {
      const form = (
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input name="foo" validate={validations.Required} />
        </Form>
      );

      const wrapper = shallow(form);
      expect(wrapper.state('valid')).toBe(false);

      wrapper.simulate('submit', mockEvent);

      expect(onSubmitCallback).toHaveBeenCalled();
      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(wrapper.state('valid')).toBe(false);
    });

    it('Should be true when everything is ok', () => {
      const form = (
        <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
          <Input name="foo" validate={validations.Required} value="foo" />
        </Form>
      );

      const wrapper = shallow(form);
      expect(wrapper.state('valid')).toBe(false);

      wrapper.simulate('submit', mockEvent);

      expect(onSubmitCallback).toHaveBeenCalledWith({ valid: true });
      expect(onValidSubmitCallback).toHaveBeenCalledWith({ foo: 'foo' });
      expect(wrapper.state('valid')).toBe(true);
    });
  });
});
