import React from 'react';

import TextArea from '../../components/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
};

const Template = args => <TextArea {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const PreValued = Template.bind({});
PreValued.args = {
  value: 'text value',
};

export const Label = Template.bind({});
Label.args = {
  label: 'label',
};

export const Required = Template.bind({});
Required.args = {
  ...Label.args,
  required: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'helperText',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'placeholder',
};
