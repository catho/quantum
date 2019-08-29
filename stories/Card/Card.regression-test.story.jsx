import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleCard from './examples/SimpleCard';
import JobAdCard from './examples/JobAdCard';
import AdvancedCard from './examples/AdvancedCard';

storiesOf('Card', module)
  .add('SimpleCard', () => <SimpleCard />)
  .add('JobAd Card', () => <JobAdCard />)
  .add('AdvancedCard', () => <AdvancedCard />);
