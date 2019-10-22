import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from '../../components/Badge';

storiesOf('Badge', module)
  .add('default', () => <Badge number={10} />)
  .add('high number', () => <Badge number={110} />)
  .add('skin primary', () => <Badge number={10} skin="primary" />)
  .add('skin secondary', () => <Badge number={10} skin="secondary" />)
  .add('skin success', () => <Badge number={10} skin="success" />)
  .add('skin error', () => <Badge number={10} skin="error" />)
  .add('inverted', () => <Badge number={10} inverted />);
