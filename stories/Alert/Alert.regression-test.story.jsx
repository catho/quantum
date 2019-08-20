import React from 'react';
import { storiesOf } from '@storybook/react';
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

const props = {
  onClose: () => {},
  icon: 'info',
};

const autoExampleProps = {
  ...props,
  children: sampleChildren,
};

storiesOf('Alert', module)
  .add('default', () => <Alert {...props}>{sampleChildren}</Alert>)
  .add('skin primary', () => (
    <Alert {...props} skin={'primary'}>
      {sampleChildren}
    </Alert>
  ))
  .add('skin success', () => (
    <Alert {...props} skin={'success'}>
      {sampleChildren}
    </Alert>
  ))
  .add('skin error', () => (
    <Alert {...props} skin={'error'}>
      {sampleChildren}
    </Alert>
  ))
  .add('skin warning', () => (
    <Alert {...props} skin={'warning'}>
      {sampleChildren}
    </Alert>
  ));
