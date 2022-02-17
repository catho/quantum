import { AutoComplete } from '../../components';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];

export default {
  title: 'AutoComplete',
  component: AutoComplete,
};

const Template = args => <AutoComplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'autoCompleteNew',
  name: 'autoCompleteNew',
  label: 'Auto Complete',
  suggestions: Examples,
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: 'Error message',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  ...Default.args,
  helperText: 'Helper text',
};

export const WithDark = Template.bind({});
WithDark.args = {
  ...Default.args,
  skin: 'dark',
  error: 'Error message',
  helperText: 'Helper text',
};

WithDark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#1250C4' }],
  },
};
