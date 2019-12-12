import React from 'react';
import { storiesOf } from '@storybook/react';
import mockedProps from '../../components/Accordion/mock';

import { Accordion } from '../../components';

storiesOf('Accordion', module).add('Accordion', () => (
  <Accordion {...mockedProps} />
));
