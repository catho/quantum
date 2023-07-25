import AutoComplete from '../../components/AutoComplete';

export default {
  title: 'Forms/AutoComplete',
  component: AutoComplete,
};

const itemsMock = [
  'Analista de Gestão de Incidentes',
  'Analista de Governança de TI',
  'Analista de Help Desk',
  'Analista de Negócios de TI',
  'Analista de Garantia da Qualidade',
  'Analista de Pricing Sênior',
  'Analista de Pricing Pleno',
  'Analista de Pricing Junior',
  'Analista de Engenharia de Produto',
  'Analista de Sustentabilidade',
  'Cronoanalista',
];

const Template = args => <AutoComplete suggestions={itemsMock} {...args} />;

export const Default = Template.bind({});

export const Required = Template.bind({});
Required.args = {
  label: 'Some label...',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'Some text...',
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Some error text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Some text label...',
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'dark',
};
