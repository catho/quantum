import { Badge, Icon, TabbedView, Tab } from '../../components';

const badge = <Badge number={4} />;
const icon = <Icon name="star" />;

export default {
  title: 'TabbedView',
  component: TabbedView,
};

const Template = (args) => (
  <TabbedView {...args}>
    <Tab title="Candidates">Candidates content</Tab>
    <Tab title="Companies">Companies content</Tab>
    <Tab title="Education">Education content</Tab>
  </TabbedView>
);

export const Default = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
};

export const Primary = () => (
  <TabbedView skin="primary">
    <Tab title="With badge" badge={badge}>
      With badge content
    </Tab>
    <Tab title="With icon" icon={icon}>
      With icon content
    </Tab>
    <Tab title="With icon and badge" icon={icon} badge={badge}>
      With icon and badge content
    </Tab>
    <Tab title="With only text">With only text content</Tab>
  </TabbedView>
);
