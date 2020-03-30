import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../../components/Icon';
import { colors } from '../../components/shared/theme';

storiesOf('Icon', module)
  .add('default', () => <Icon name="info" />)
  .add('with skin (color)', () => (
    <Icon name="info" skin={colors.error['300']} />
  ))
  .add('with large size', () => <Icon name="info" size="large" />)
  .add('with small size', () => <Icon name="info" size="small" />);
