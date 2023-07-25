import mockedProps from '../../test-utils/mocks/Accordion/mock';
import { Accordion } from '../../components';

export default {
  title: 'Accordion',
  component: Accordion,
};

const Template = (args) => <Accordion {...mockedProps} {...args} />;

export const Default = Template.bind({});

export const KeepOnlyOneOpen = Template.bind({});
KeepOnlyOneOpen.args = {
  keepOnlyOneOpen: true,
};
