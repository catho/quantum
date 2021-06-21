import React from 'react';

import { Badge, Icon, TabbedView, Tab } from '../../components';

const badge = <Badge number={4} />;
const icon = <Icon name="star" />;

export default {
  title: 'TabbedView',
};

export const Default = () => (
  <TabbedView>
    <Tab title="Candidates">Candidates content</Tab>
    <Tab title="Companies">Companies content</Tab>
    <Tab title="Education">Education content</Tab>
  </TabbedView>
);

Default.story = {
  name: 'default',
};

export const Fluid = () => (
  <TabbedView fluid>
    <Tab title="Candidates">Candidates content</Tab>
    <Tab title="Companies">Companies content</Tab>
    <Tab title="Education">Education content</Tab>
  </TabbedView>
);

Fluid.story = {
  name: 'fluid',
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

Primary.story = {
  name: 'primary',
};
