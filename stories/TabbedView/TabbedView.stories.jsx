import { TabbedView, Tab } from '../../components';

export default {
  title: 'TabbedView',
  component: TabbedView,
};

const Template = args => (
  <TabbedView {...args}>
    <Tab title="Candidates">Candidates content</Tab>
    <Tab title="Companies">Companies content</Tab>
    <Tab title="Education">Education content</Tab>
  </TabbedView>
);

export const Default = Template.bind({});

export const WithFluid = Template.bind({});
WithFluid.args = {
  fluid: true,
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'primary',
};
