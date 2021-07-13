import React from 'react';
import Icon from '../../components/Icon';
import { colors } from '../../components/shared/theme';

export default {
  title: 'Icon',
  component: Icon,
};

const Template = args => <Icon name="info" {...args} />;

export const Default = Template.bind({});

export const Skin = Template.bind({});
Skin.args = {
  skin: colors.error['300'],
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
