import React from 'react';

import {
  Simple,
  AutoComplete,
  RequiredMark,
  WithError,
  Disabled,
  WithImages,
} from './examples';

export default {
  title: 'Dropdown',
};

export const Default = () => <Simple />;

Default.story = {
  name: 'default',
};

export const Autocomplete = () => <AutoComplete />;

Autocomplete.story = {
  name: 'autocomplete',
};

export const Required = () => <RequiredMark />;

Required.story = {
  name: 'required',
};

export const Error = () => <WithError />;

Error.story = {
  name: 'error',
};

export const _Disabled = () => <Disabled />;

_Disabled.story = {
  name: 'disabled',
};

export const _WithImages = () => <WithImages />;

_WithImages.story = {
  name: 'with images',
};
