import React from 'react';
import Icon from '../../components/Icon';
import { colors } from '../../components/shared/theme';

export default {
  title: 'Icon',
};

export const Default = () => <Icon name="info" />;

Default.story = {
  name: 'default',
};

export const WithSkinColor = () => (
  <Icon name="info" skin={colors.error['300']} />
);

WithSkinColor.story = {
  name: 'with skin (color)',
};

export const WithLargeSize = () => <Icon name="info" size="large" />;

WithLargeSize.story = {
  name: 'with large size',
};

export const WithSmallSize = () => <Icon name="info" size="small" />;

WithSmallSize.story = {
  name: 'with small size',
};
