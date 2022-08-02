import mockedProps from '../../components/Accordion/mock';

import { Accordion } from '../../components';

const Template = args => <Accordion {...mockedProps} {...args} />;

export const Default = Template.bind({});

export const KeepOnlyOneOpen = Template.bind({});
KeepOnlyOneOpen.args = {
  keepOnlyOneOpen: true,
};
