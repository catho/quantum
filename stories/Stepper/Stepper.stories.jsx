import Stepper from '../../components/Stepper';

const Template = args => {
  const { children: Component, ...rest } = args;
  return <Stepper {...rest}>{Component}</Stepper>;
};

const i18n = {
  paginationPreposition: 'de',
  nextWord: 'próximo',
};

export const StepperWithI18n = () => (
  <div>
    <Stepper
      i18n={i18n}
      isPtBR
      index={1}
      total={2}
      currentStepText="Salários / benefícios"
      nextStepText="Contrato / Local"
    />
  </div>
);

export const Default = Template.bind({});

export const WithIndex = Template.bind({});
WithIndex.args = {
  index: 4,
  total: 6,
};

export const WithCurrentStepText = Template.bind({});
WithCurrentStepText.args = {
  currentStepText: 'Salários / benefícios',
};

export const WithNextStepText = Template.bind({});
WithNextStepText.args = {
  nextStepText: 'Contrato / Local',
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'success',
};

export const WithI18n = StepperWithI18n.bind({});
WithI18n.args = {
  i18n: {
    paginationPreposition: 'de',
    nextWord: 'próximo',
  },
};
