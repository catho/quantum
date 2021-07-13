import React from 'react';

import TextArea from '../../components/TextArea';

export default {
  title: 'TextArea',
};

export const Default = () => <TextArea />;

Default.story = {
  name: 'default',
};

export const Disabled = () => <TextArea disabled />;

Disabled.story = {
  name: 'disabled',
};

export const PreValued = () => <TextArea value="text value" />;

PreValued.story = {
  name: 'pre valued',
};

export const Label = () => <TextArea label="label" />;

Label.story = {
  name: 'label',
};

export const Required = () => <TextArea label="label" required />;

Required.story = {
  name: 'required',
};

export const HelperText = () => <TextArea helperText="helperText" />;

HelperText.story = {
  name: 'helperText',
};

export const Placeholder = () => <TextArea placeholder="placeholder" />;

Placeholder.story = {
  name: 'placeholder',
};
