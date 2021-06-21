import React from 'react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import { Alert } from '../../components';

const description = `Alerts are used for items that need to be labeled,
categorized, or organized using keywords that describe them.`;

const sampleChildren = (
  <span>
    This is a <strong>sample</strong> message, a much bigger text could fit in
    here
    <br />
    and a buch of other lines too, just to demonstrate
    <br />
    how this component behaves ❤
  </span>
);

export default {
  title: 'Alert',
};

export const _Alert = () => (
  <AutoExample
    description={description}
    component={Alert}
    componentProps={{
      children: sampleChildren,
      onClose: () => {},
      icon: 'info',
    }}
  />
);
