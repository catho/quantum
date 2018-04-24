import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import validations from './validations';
import Form from './Form';
// import Input from '../Input';

// jest.mock('react-text-mask', () => props => <input type="text" {...{ ...props }} />);

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
    {/* <Form.Input name="required" label="required" validate={validations.REQUIRED} /> */}
    <Form.Input.CPF name="cpf" label="CPF" validate={validations.CPF} />
    {/* <Form.Input.CEP name="cep" label="CEP" validate={validations.CEP} />
    <Form.Input.Date name="birthday" label="Birthday" validate={validations.DATE} />
    <Form.Input name="email" label="E-mail" validate={validations.EMAIL} />
    <Form.Input name="address" label="Address" validate={validations.MINLENGTH} minLength={8} />
    <Form.Input name="country" label="Country" validate={validations.MAXLENGTH} minLength={3} /> */}
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
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(FormWithValidations());
    });

    it('Shouldn\'t call "onValidSubmit" and "onSubmit" callback on a invalid submit', () => {
      wrapper.simulate('submit', mockEvent);

      expect(onValidSubmitCallback).not.toHaveBeenCalled();
      expect(onSubmitCallback).toHaveBeenCalled();
    });

    it('Should validate Required fields', () => {
      const getRequired = () => wrapper.find({ validate: validations.REQUIRED }).first();
      wrapper.simulate('submit', mockEvent);

      const beforeChange = getRequired();
      expect(beforeChange.prop('error')).toBe('Campo obrigatório');

      beforeChange.simulate(
        'change',
        { target: { name: beforeChange.prop('name') } },
        { value: 'Some value' },
      );

      const afterChange = getRequired();
      expect(afterChange.prop('error')).toBe('');
    });

    it.only('Should validate CPF fields', () => {
      const getCPF = () => wrapper.find({ validate: validations.CPF }).first();
      wrapper.simulate('submit', mockEvent);

      const beforeChange = getCPF();
      expect(beforeChange.prop('error')).toBe('CPF inválido');

      console.log(beforeChange.props());

      // beforeChange.simulate(
      //   'change',
      //   { target: { name: beforeChange.prop('name') } },
      //   { value: '35841429892' },
      // );

      // const afterChange = getCPF();
      // console.log(afterChange.props());
      // expect(afterChange.prop('error')).toBe('');
    });

    it('Should validate CEP fields');
    it('Should validate DATE fields');
    it('Should validate EMAIL fields');
    it('Should validate fields with MAXLENGTH');
    it('Should validate fields with MINLENGTH');
  });
});
