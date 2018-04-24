import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import validations from './validations';
import Form from './Form';

const onValidSubmitCallback = jest.fn();
const onSubmitCallback = jest.fn();
const mockEvent = { preventDefault: jest.fn() };

const FormWithoutValidations = () => (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Form.Input name="name" label="Name" />
  </Form>
);

const FormWithValidations = () => (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Form.Input name="required" label="required" validate={validations.REQUIRED} />
    <Form.Input name="cpf" label="CPF" validate={validations.CPF} />
    <Form.Input name="cep" label="CEP" validate={validations.CEP} />
    <Form.Input name="birthday" label="Birthday" validate={validations.DATE} />
    <Form.Input name="email" label="E-mail" validate={validations.EMAIL} />
    <Form.Input name="address" label="Address" validate={validations.MINLENGTH} minLength="8" />
    <Form.Input name="country" label="Country" validate={validations.MAXLENGTH} maxLength="3" />
    <Form.Submit />
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

  describe('Submit without validations', () => {
    it('Should call "onValidSubmit" and "onSubmit" callback on a valid submit', () => {
      const wrapper = shallow(FormWithoutValidations());
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });
  });

  describe('Submit With validations', () => {
    it('Shouldn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      const wrapper = shallow(FormWithValidations());
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });

    it('Should validate fields', () => {
      const execTest = (validationName, errorMsg, newValue, defaultValue) => {
        const wrapper = shallow(FormWithValidations());
        const getField = () => wrapper.find({ validate: validations[validationName] });

        if (defaultValue) {
          const initalField = getField();
          initalField.simulate(
            'change',
            { target: { name: initalField.prop('name') } },
            { value: defaultValue },
          );
        }

        wrapper.simulate('submit', mockEvent);

        const beforeChange = getField();
        expect(beforeChange.prop('error')).toBe(errorMsg);

        beforeChange.simulate(
          'change',
          { target: { name: beforeChange.prop('name') } },
          { value: newValue },
        );

        const afterChange = getField();
        expect(afterChange.prop('error')).toBe('');
      };

      execTest('REQUIRED', 'Campo obrigatório', 'foo');
      execTest('CPF', 'CPF inválido', '35841429892');
      execTest('CEP', 'CEP inválido', '06826510');
      execTest('DATE', 'Data inválida', '15/10/1988');
      execTest('EMAIL', 'E-mail inválido', 'foo@baz.com');
      execTest('MAXLENGTH', 'Maximo de 3 caracteres excedido', '123', '123456789');
      execTest('MINLENGTH', 'Mínimo de 8 caracteres requerido', '12345678', '12345');
    });
  });
});
