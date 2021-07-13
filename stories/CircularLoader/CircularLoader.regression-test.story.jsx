import React from 'react';
import { CircularLoader } from '../../components';

export default {
  title: 'CircularLoader',
};

export const Default = () => <CircularLoader />;

Default.story = {
  name: 'default',
};

export const WithSecondaryTheme = () => <CircularLoader skin="secondary" />;

WithSecondaryTheme.story = {
  name: 'with secondary theme',
};

export const WithMediumSize = () => <CircularLoader size="medium" />;

WithMediumSize.story = {
  name: 'with medium size',
};

export const WithLargeSize = () => <CircularLoader size="large" />;

WithLargeSize.story = {
  name: 'with large size',
};

export const WithXlargeSize = () => <CircularLoader size="xlarge" />;

WithXlargeSize.story = {
  name: 'with xlarge size',
};

export const WithXxlargeSize = () => <CircularLoader size="xxlarge" />;

WithXxlargeSize.story = {
  name: 'with xxlarge size',
};

export const WithXxxlargeSize = () => <CircularLoader size="xxxlarge" />;

WithXxxlargeSize.story = {
  name: 'with xxxlarge size',
};
