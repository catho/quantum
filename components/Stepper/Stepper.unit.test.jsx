import { render, screen } from '@testing-library/react';

import Stepper from './Stepper';

const i18n = {
  paginationPreposition: 'de',
  nextWord: 'próximo',
};

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
      expect(render(stepper).asFragment()).toMatchSnapshot();
    });
  });

  it('should ensure that total prop always be 6 if the prop was bigger than 6', () => {
    render(
      <Stepper
        i18n={i18n}
        index={3}
        total={8}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(screen.getByText('3 de 6')).toBeInTheDocument();
  });

  it('should ensure that index prop always be 1 if the prop was minor of 1', async () => {
    const { rerender } = render(
      <Stepper
        i18n={i18n}
        index={0}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(screen.getByText('1 de 6')).toBeInTheDocument();

    rerender(
      <Stepper
        i18n={i18n}
        index={-5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(screen.getByText('1 de 6')).toBeInTheDocument();
  });

  it('should ensure that index prop does not be bigger than total prop ', () => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn());

    render(
      <Stepper
        i18n={i18n}
        index={9}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(screen.getByText('1 de 6')).toBeInTheDocument();
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should have "proximo" word when it is not the last step', () => {
    const nextStepText = 'Contrato / Local';
    const { rerender } = render(
      <Stepper
        i18n={i18n}
        index={6}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText={nextStepText}
      />,
    );

    expect(
      screen.queryByText(`próximo: ${nextStepText}`),
    ).not.toBeInTheDocument();

    rerender(
      <Stepper
        i18n={i18n}
        index={5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText={nextStepText}
      />,
    );

    expect(screen.queryByText(`próximo: ${nextStepText}`)).toBeInTheDocument();
  });

  it('should ensure that total and index prop always be 1 if the prop was settled 0', () => {
    render(
      <Stepper
        i18n={i18n}
        index={0}
        total={0}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local "
      />,
    );

    expect(screen.getByText('1 de 1')).toBeInTheDocument();
  });
});
