import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import validations from './validations';
import Form from './Form';

jest.mock('react-text-mask', () => props => <input type="text" {...{ ...props }} />);

const onValidSubmitCallback = jest.fn();
const onSubmitCallback = jest.fn();
const mockEvent = { preventDefault: jest.fn() };

const FormWithoutValidations = () => {
  return (
    <Form onValidSubmit={onValidSubmitCallback} onSubmit={onSubmitCallback}>
      <Form.Input name="name" label="Name" />
    </Form>
  )
};

const FormWithValidations = () => {
  return (
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
  )
};

beforeEach(() => {
  onValidSubmitCallback.mockClear();
  onSubmitCallback.mockClear();
});

describe('Form component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<FormWithValidations />).toJSON()).toMatchSnapshot();
  });

  describe('Submit without validations', () => {
    it('Shoud call "onValidSubmit" and "onSubmit" callback on a valid submit', () => {
      const wrapper = shallow(<FormWithoutValidations />);
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });
  });

  describe('Submit With validations', () => {
    const wrapper = shallow(<FormWithValidations />);

    it('Shoudn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });

    it('Shoud validate Required fields', () => {

    });

    it('Shoud validate CPF fields');
    it('Shoud validate CEP fields');
    it('Shoud validate DATE fields');
    it('Shoud validate EMAIL fields');
    it('Shoud validate fields with MAXLENGTH');
    it('Shoud validate fields with MINLENGTH');
  });
});

