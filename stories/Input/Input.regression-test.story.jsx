import React from 'react';

import Input from '../../components/Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'this is a label',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: 'a default value',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
};

export const Error = Template.bind({});
Error.args = {
  error: 'message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledWithText = Template.bind({});
DisabledWithText.args = {
  ...Disabled.args,
  value: 'some text',
};

export const Helper = Template.bind({});
Helper.args = {
  helperText: 'message',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'message',
};
