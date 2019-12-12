import React from 'react';
import mockedProps from '../../components/Accordion/mock';

import { Accordion } from '../../components';

const defaultExample = {
  component: <Accordion {...mockedProps} />,
  code: `
<Accordion items={items} />
  `,
};
const keepOnlyOneOpenExample = {
  component: <Accordion {...mockedProps} keepOnlyOneOpen />,
  code: `
<Accordion items={items} keepOnlyOneOpen />
  `,
};

export default [defaultExample, keepOnlyOneOpenExample];
