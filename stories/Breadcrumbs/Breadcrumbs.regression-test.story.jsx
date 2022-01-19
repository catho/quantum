// Generated with scripts/create-componnent.js
import React from 'react';

import Breadcrumbs from '../../components/Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

const items = [
  {
    label: 'Home',
    url: 'catho.com',
  },
  {
    label: 'Quantum',
    url: 'catho.com',
  },
  {
    label: 'Components',
    url: 'catho.com',
  },
  {
    label: 'Breadcrumbs',
    url: 'catho.com',
  },
];

const Template = args => <Breadcrumbs items={items} {...args} />;

export const Default = Template.bind({});
