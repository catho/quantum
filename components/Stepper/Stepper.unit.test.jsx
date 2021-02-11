import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Stepper from './Stepper';

describe('<Stepper />', () => {
  it('should match snapshots', () => {
    const Steppers = [
      <Stepper
        index={1}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />,
      <Stepper
        index={2}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
      <Stepper
        index={3}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
      <Stepper
        index={4}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
      <Stepper
        index={5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
      <Stepper
        index={6}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    ];

    Steppers.forEach(stepper => {
      const StepperComponent = mount(stepper);
      expect(toJson(StepperComponent)).toMatchSnapshot();
      StepperComponent.unmount();
    });
  });

  it('should ensure that total prop always be 6 if the prop was bigger than 6', () => {
    const component = mount(
      <Stepper
        isPtBR
        index={3}
        total={8}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(component.find('RadialProgressOverlay').text()).toEqual('3 de 6');
  });

  it('should ensure that index prop always be 1 if the prop was minor of 1', () => {
    const component = mount(
      <Stepper
        isPtBR
        index={0}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(component.find('RadialProgressOverlay').text()).toEqual('1 de 6');

    const component2 = mount(
      <Stepper
        isPtBR
        index={-5}
        total={8}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(component2.find('RadialProgressOverlay').text()).toEqual('1 de 6');
  });

  it('should ensure that index prop does not be bigger than total prop ', () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());

    const component = mount(
      <Stepper
        isPtBR
        index={9}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(component.find('RadialProgressOverlay').text()).toEqual('1 de 6');
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should have "proximo" word when it is not the last step', () => {
    const component = mount(
      <Stepper
        isPtBR
        index={5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(component.find('NextStep').text()).toContain('próximo');

    const componentLastStep = mount(
      <Stepper
        isPtBR
        index={6}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(componentLastStep.find('NextStep').text()).not.toContain('próximo');
  });

  it('should ensure that total and index prop always be 1 if the prop was settled 0', () => {
    const component = mount(
      <Stepper
        isPtBR
        index={0}
        total={0}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(component.find('RadialProgressOverlay').text()).toEqual('1 de 1');
  });
});
