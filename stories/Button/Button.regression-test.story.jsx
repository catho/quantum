import Button from '../../components/Button';

const disabled = true;
const stroked = true;
const full = true;

export default {
  title: 'Button',
  component: Button,
};

const Template = args => <Button {...args}>Catho</Button>;

export const PrimaryDefault = Template.bind({});

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled,
};

export const PrimaryStroked = Template.bind({});
PrimaryStroked.args = {
  stroked,
};

export const PrimaryFull = Template.bind({});
PrimaryFull.args = {
  full,
};

export const PrimaryIconInfo = Template.bind({});
PrimaryIconInfo.args = {
  icon: 'info',
};

export const PrimarySizeXSmall = Template.bind({});
PrimarySizeXSmall.args = {
  size: 'xsmall',
};

export const PrimarySizeSmall = Template.bind({});
PrimarySizeSmall.args = {
  size: 'small',
};

export const PrimarySizeLarge = Template.bind({});
PrimarySizeLarge.args = {
  size: 'large',
};

export const PrimarySizeXLarge = Template.bind({});
PrimarySizeXLarge.args = {
  size: 'xlarge',
};

export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  skin: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  ...SecondaryDefault.args,
  disabled,
};

export const SecondaryStroked = Template.bind({});
SecondaryStroked.args = {
  ...SecondaryDefault.args,
  stroked,
};

export const NeutralDefault = Template.bind({});
NeutralDefault.args = {
  skin: 'neutral',
};

export const NeutralDisabled = Template.bind({});
NeutralDisabled.args = {
  ...NeutralDefault.args,
  disabled,
};

export const NeutralStroked = Template.bind({});
NeutralStroked.args = {
  ...NeutralDefault.args,
  stroked,
};

export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
  skin: 'success',
};

export const SuccessDisabled = Template.bind({});
SuccessDisabled.args = {
  ...SuccessDefault.args,
  disabled,
};

export const SuccessStroked = Template.bind({});
SuccessStroked.args = {
  ...SuccessDefault.args,
  stroked,
};

export const WarningDefault = Template.bind({});
WarningDefault.args = {
  skin: 'warning',
};

export const WarningDisabled = Template.bind({});
WarningDisabled.args = {
  ...WarningDefault.args,
  disabled,
};

export const WarningStroked = Template.bind({});
WarningStroked.args = {
  ...WarningDefault.args,
  stroked,
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  skin: 'error',
};

export const ErrorDisabled = Template.bind({});
ErrorDisabled.args = {
  ...ErrorDefault.args,
  disabled,
};

export const ErrorStroked = Template.bind({});
ErrorStroked.args = {
  ...ErrorDefault.args,
  stroked,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'info',
};

const TemplateIconOnly = args => <Button icon="info" {...args} />;

export const IconOnly = TemplateIconOnly.bind({});

export const IconOnlySmall = TemplateIconOnly.bind({});
IconOnlySmall.args = {
  size: 'small',
};

export const IconOnlyXSmall = TemplateIconOnly.bind({});
IconOnlyXSmall.args = {
  size: 'xsmall',
};

export const IconOnlyLarge = TemplateIconOnly.bind({});
IconOnlyLarge.args = {
  size: 'large',
};

export const IconOnlyXLarge = TemplateIconOnly.bind({});
IconOnlyXLarge.args = {
  size: 'xlarge',
};
