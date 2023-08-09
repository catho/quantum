import Stepper from '../../components/Stepper';

export default {
  title: 'RingGraph/Stepper',
  component: Stepper,
};

const Template = (args) => {
  const { children: Component, ...rest } = args;
  return <Stepper {...rest}>{Component}</Stepper>;
};

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

export const WithTotal = Template.bind({});
WithTotal.args = {
  total: 3,
};

export const WithI18n = Template.bind({});
WithI18n.args = {
  i18n: {
    paginationPreposition: 'de',
    nextWord: 'próximo',
  },
};
