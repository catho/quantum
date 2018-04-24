import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import validations from './validations';
import Form from './Form';

jest.mock('react-text-mask', () => props => <input type="text" {...{ ...props }} />);

const onValidSubmitCallback = jest.fn();
const onSubmitCallback = jest.fn();
const mockEvent = { preventDefault: jest.fn() };

const formWithoutValidations = (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Form.Input name="name" label="Name" />
  </Form>
);

const formWithValidations = (
  <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
    <Form.Input name="name" label="Name" validate={validations.REQUIRED} />
    <Form.Input.CPF name="cpf" label="CPF" validate={validations.CPF} />
    <Form.Input.CEP name="cep" label="CEP" validate={validations.CEP} />
    <Form.Input.Date name="birthday" label="Birthday" validate={validations.DATE} />
    <Form.Input name="email" label="E-mail" validate={validations.EMAIL} />
    <Form.Input name="address" label="Address" validate={validations.MINLENGTH} minLength={8} />
    <Form.Input name="country" label="Country" validate={validations.MAXLENGTH} minLength={3} />
    <Form.Submit />
  </Form>
);

describe('Form component ', () => {
  beforeEach(() => {
    onValidSubmitCallback.mockClear();
  });

  it('should match the snapshot', () => {
    expect(renderer.create(formWithValidations).toJSON()).toMatchSnapshot();
  });

  describe('Submit without validations', () => {
    it('Shoud call "onValidSubmit" and "onSubmit" callback on a valid submit', () => {
      const wrapper = shallow(formWithoutValidations);
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });
  });

  describe('Submit With validations', () => {
    const wrapper = shallow(formWithValidations);

    it('Shoudn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });
  });
});

