import TextArea from '../../components/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
};

const parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#1250C4' }],
  },
};

const Template = args => <TextArea {...args} />;
const TemplateDark = args => <TextArea skin="dark" {...args} />;

export const Default = Template.bind({});

export const Dark = TemplateDark.bind({});
Dark.parameters = parameters;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledWithDarkSkin = TemplateDark.bind({});
DisabledWithDarkSkin.parameters = parameters;
DisabledWithDarkSkin.args = {
  disabled: true,
};

export const PreValued = Template.bind({});
PreValued.args = {
  value: 'text value',
};

export const PreValuedWithDarkSkin = TemplateDark.bind({});
PreValuedWithDarkSkin.parameters = parameters;
PreValuedWithDarkSkin.args = {
  value: 'text value',
};

export const Label = Template.bind({});
Label.args = {
  label: 'label',
};

export const LabelWithDarkSkin = TemplateDark.bind({});
LabelWithDarkSkin.parameters = parameters;
LabelWithDarkSkin.args = {
  label: 'label',
};

export const Required = Template.bind({});
Required.args = {
  ...Label.args,
  required: true,
};

export const RequiredWithDarkSkin = TemplateDark.bind({});
RequiredWithDarkSkin.parameters = parameters;
RequiredWithDarkSkin.args = {
  ...Label.args,
  required: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'helperText',
};

export const HelperTextWithDarkSkin = TemplateDark.bind({});
HelperTextWithDarkSkin.parameters = parameters;
HelperTextWithDarkSkin.args = {
  helperText: 'helperText',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'placeholder',
};

export const PlaceholderWithDarkSkin = TemplateDark.bind({});
PlaceholderWithDarkSkin.parameters = parameters;
PlaceholderWithDarkSkin.args = {
  placeholder: 'placeholder',
};

export const AutoResize = Template.bind({});
AutoResize.args = {
  isAutoResize: true,
};

export const AutoResizeWithCustomConfig = Template.bind({});
AutoResizeWithCustomConfig.args = {
  isAutoResize: true,
  autoResizeConfig: {
    initialRows: 2,
    minRows: 2,
    maxRows: 3,
  },
};
