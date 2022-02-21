import Input from '../../components/Input';

export default {
  title: 'Input',
  component: Input,
};

const parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#1250C4' }],
  },
};

const Template = args => <Input {...args} />;
const TemplateDark = args => <Input skin="dark" {...args} />;

export const Default = Template.bind({});

export const Dark = TemplateDark.bind({});
Dark.parameters = parameters;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'this is a label',
};

export const DarkWithLabel = TemplateDark.bind({});
DarkWithLabel.parameters = parameters;
DarkWithLabel.args = {
  ...WithLabel.args,
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: 'a default value',
};

export const DarkWithDefaultValue = TemplateDark.bind({});
DarkWithDefaultValue.parameters = parameters;
DarkWithDefaultValue.args = {
  value: 'a default value',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
};

export const SearchWithDarkSkin = TemplateDark.bind({});
SearchWithDarkSkin.parameters = parameters;
SearchWithDarkSkin.args = {
  type: 'search',
};

export const Error = Template.bind({});
Error.args = {
  error: 'message',
};

export const ErrorWithDarkSkin = TemplateDark.bind({});
ErrorWithDarkSkin.parameters = parameters;
ErrorWithDarkSkin.args = {
  error: 'message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledWithDarkSkin = TemplateDark.bind({});
DisabledWithDarkSkin.parameters = parameters;
DisabledWithDarkSkin.args = {
  disabled: true,
};

export const DisabledWithText = Template.bind({});
DisabledWithText.args = {
  ...Disabled.args,
  value: 'some text',
};

export const DisabledWithTextAndWithDarkSkin = TemplateDark.bind({});
DisabledWithTextAndWithDarkSkin.parameters = parameters;
DisabledWithTextAndWithDarkSkin.args = {
  ...Disabled.args,
  value: 'some text',
};

export const Helper = Template.bind({});
Helper.args = {
  helperText: 'message',
};

export const HelperWithDarkSkin = TemplateDark.bind({});
HelperWithDarkSkin.parameters = parameters;
HelperWithDarkSkin.args = {
  helperText: 'message',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'message',
};

export const WithPlaceholderAndWithDarkSkin = TemplateDark.bind({});
WithPlaceholderAndWithDarkSkin.parameters = parameters;
WithPlaceholderAndWithDarkSkin.args = {
  placeholder: 'message',
};
