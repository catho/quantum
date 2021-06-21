import React from 'react';
import mockedProps, {
  mockWithFirstItemOpened,
  mockWithLastItemOpened,
  mockWithAllItemsClosed,
} from '../../components/Accordion/mock';

import { Accordion } from '../../components';

export default {
  title: 'Accordion',
};

export const AccordionDefault = () => <Accordion {...mockedProps} />;

AccordionDefault.story = {
  name: 'Accordion default',
};

export const AccordionWithFirstItemOpened = () => (
  <Accordion {...mockWithFirstItemOpened} />
);

AccordionWithFirstItemOpened.story = {
  name: 'Accordion with first item opened',
};

export const AccordionWithLastItemOpened = () => (
  <Accordion {...mockWithLastItemOpened} />
);

AccordionWithLastItemOpened.story = {
  name: 'Accordion with last item opened',
};

export const AccordionWithAllItemsClosed = () => (
  <Accordion {...mockWithAllItemsClosed} />
);

AccordionWithAllItemsClosed.story = {
  name: 'Accordion with all items closed',
};
