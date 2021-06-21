import React from 'react';

import Input from '../../components/Input';

export default {
  title: 'Input',
};

export const Default = () => <Input />;

Default.story = {
  name: 'default',
};

export const WithLabel = () => <Input label="this is a label" />;

WithLabel.story = {
  name: 'with label',
};

export const WithDefaultValue = () => <Input value="a default value" />;

WithDefaultValue.story = {
  name: 'with default value',
};

export const Search = () => <Input type="search" />;

Search.story = {
  name: 'search',
};

export const Error = () => <Input error="message" />;

Error.story = {
  name: 'error',
};

export const Disabled = () => <Input disabled />;

Disabled.story = {
  name: 'disabled',
};

export const DisabledWithText = () => <Input disabled value="some text" />;

DisabledWithText.story = {
  name: 'disabled with text',
};

export const Helper = () => <Input helperText="message" />;

Helper.story = {
  name: 'helper',
};

export const WithPlaceholder = () => <Input placeholder="message" />;

WithPlaceholder.story = {
  name: 'with placeholder',
};
