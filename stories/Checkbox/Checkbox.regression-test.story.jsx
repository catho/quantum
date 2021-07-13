import React from 'react';
import { Checkbox } from '../../components';

export default {
  title: 'Checkbox',
};

export const Default = () => <Checkbox />;

Default.story = {
  name: 'default',
};

export const Disabled = () => <Checkbox disabled />;

Disabled.story = {
  name: 'disabled',
};

export const Checked = () => <Checkbox checked />;

Checked.story = {
  name: 'checked',
};

export const Error = () => <Checkbox error="message" />;

Error.story = {
  name: 'error',
};

export const Label = () => <Checkbox label="example" />;

Label.story = {
  name: 'label',
};

export const Value = () => <Checkbox value="example" />;

Value.story = {
  name: 'value',
};
