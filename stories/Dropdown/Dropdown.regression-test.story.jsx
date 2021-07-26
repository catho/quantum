import React from 'react';
import Dropdown from '../../components/Dropdown';

import {
  Simple,
  AutoComplete,
  RequiredMark,
  WithError,
  Disabled as DisabledExample,
  WithImages as WithImagesExample,
} from './examples';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Default = () => <Simple />;

export const Autocomplete = () => <AutoComplete />;

export const Required = () => <RequiredMark />;

export const Error = () => <WithError />;

export const Disabled = () => <DisabledExample />;

export const WithImages = () => <WithImagesExample />;
