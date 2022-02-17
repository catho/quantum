import mockedProps from '../../components/Accordion/mock';

import { Accordion } from '../../components';

const defaultExample = {
  title: 'Default Accordion',
  component: <Accordion {...mockedProps} />,
  code: `
<Accordion items={items} />
  `,
};
const keepOnlyOneOpenExample = {
  title: 'Accordion with only one card open per time',
  component: <Accordion {...mockedProps} keepOnlyOneOpen />,
  code: `
<Accordion items={items} keepOnlyOneOpen />
  `,
};

export default [defaultExample, keepOnlyOneOpenExample];
