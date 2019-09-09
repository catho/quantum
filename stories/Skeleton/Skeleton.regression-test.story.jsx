import React from 'react';
import { storiesOf } from '@storybook/react';
import { Skeleton } from '../../components';

storiesOf('Skeleton', module)
  .add('rect as default', () => <Skeleton />)
  .add('text', () => <Skeleton type="text" />)
  .add('circle', () => <Skeleton type="circle" />);
