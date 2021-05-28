import React from 'react';
import { storiesOf } from '@storybook/react';
import mockedProps, {
  mockWithFirstItemOpened,
  mockWithLastItemOpened,
  mockWithAllItemsClosed,
} from '../../components/Accordion/mock';

import { Accordion } from '../../components';

storiesOf('Accordion', module)
  .add('Accordion default', () => <Accordion {...mockedProps} />)
  .add('Accordion with first item opened', () => (
    <Accordion {...mockWithFirstItemOpened} />
  ))
  .add('Accordion with last item opened', () => (
    <Accordion {...mockWithLastItemOpened} />
  ))
  .add('Accordion with all items closed', () => (
    <Accordion {...mockWithAllItemsClosed} />
  ));
