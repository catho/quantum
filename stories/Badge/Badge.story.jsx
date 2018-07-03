import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '../../.storybook/components';
import Badge from '../../components/Badge';

storiesOf('15. Badge', module).add('Badge', () => (
  <AutoExample component={Badge} />
));
