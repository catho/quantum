import React from 'react';
import { Alert } from '../../components';

const sampleChildren = (
  <span>
    This is a <strong>sample</strong> message, a much bigger text could fit in
    here
    <br />
    and a buch of other lines too, just to demonstrate
    <br />
    how this component behaves ❤
  </span>
);

const props = {
  onClose: () => {},
  icon: 'info',
};

export default {
  title: 'Alert',
};

export const Default = () => <Alert {...props}>{sampleChildren}</Alert>;

Default.story = {
  name: 'default',
};

export const SkinPrimary = () => (
  <Alert {...props} skin="primary">
    {sampleChildren}
  </Alert>
);

SkinPrimary.story = {
  name: 'skin primary',
};

export const SkinSuccess = () => (
  <Alert {...props} skin="success">
    {sampleChildren}
  </Alert>
);

SkinSuccess.story = {
  name: 'skin success',
};

export const SkinError = () => (
  <Alert {...props} skin="error">
    {sampleChildren}
  </Alert>
);

SkinError.story = {
  name: 'skin error',
};

export const SkinWarning = () => (
  <Alert {...props} skin="warning">
    {sampleChildren}
  </Alert>
);

SkinWarning.story = {
  name: 'skin warning',
};
