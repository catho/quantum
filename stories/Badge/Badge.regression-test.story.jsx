import React from 'react';

import Badge from '../../components/Badge';
import Icon from '../../components/Icon';

export default {
  title: 'Badge',
};

export const Default = () => <Badge number={10} />;

Default.story = {
  name: 'default',
};

export const HighNumber = () => <Badge number={110} />;

HighNumber.story = {
  name: 'high number',
};

export const SkinPrimary = () => <Badge number={10} skin="primary" />;

SkinPrimary.story = {
  name: 'skin primary',
};

export const SkinSecondary = () => <Badge number={10} skin="secondary" />;

SkinSecondary.story = {
  name: 'skin secondary',
};

export const SkinSuccess = () => <Badge number={10} skin="success" />;

SkinSuccess.story = {
  name: 'skin success',
};

export const SkinError = () => <Badge number={10} skin="error" />;

SkinError.story = {
  name: 'skin error',
};

export const Inverted = () => <Badge number={10} inverted />;

Inverted.story = {
  name: 'inverted',
};

export const Dot = () => (
  <Badge skin="secondary" number={9999} dot>
    <Icon name="date_range" />
  </Badge>
);

Dot.story = {
  name: 'dot',
};
