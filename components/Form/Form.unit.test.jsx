import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import validations from './validations';
import Form from './Form';

jest.mock('react-text-mask', () => props => <input type="text" {...{ ...props }} />);

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
    <Form.Input.CPF name="cpf" label="CPF" validate={validations.CPF} />
    <Form.Input.CEP name="cep" label="CEP" validate={validations.CEP} />
    <Form.Input.Date name="birthday" label="Birthday" validate={validations.DATE} />
    <Form.Input name="email" label="E-mail" validate={validations.EMAIL} />
    <Form.Input name="address" label="Address" validate={validations.MINLENGTH} minLength={8} />
    <Form.Input name="country" label="Country" validate={validations.MAXLENGTH} minLength={3} />
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
    const wrapper = shallow(FormWithValidations());

    it('Shouldn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });

    it('Should validate Required fields', () => {
      const requiredField = wrapper.find(Form.Input).first();
      wrapper.simulate('submit', mockEvent);
      expect(requiredField.props().error).toBe('Campo obrigatório');

      requiredField.simulate('change', { target: { value: 'bla' } });

      console.log(requiredField.props());
    });

    it('Should validate CPF fields');
    it('Should validate CEP fields');
    it('Should validate DATE fields');
    it('Should validate EMAIL fields');
    it('Should validate fields with MAXLENGTH');
    it('Should validate fields with MINLENGTH');
  });
});

