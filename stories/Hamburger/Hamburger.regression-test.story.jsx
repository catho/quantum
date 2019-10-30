import React from 'react';
import { storiesOf } from '@storybook/react';

import Hamburger from '../../components/Hamburger';

storiesOf('Hamburger', module)
  .add('default', () => (
    <span
      style={{
        backgroundColor: '#000',
        display: 'inline-block',
      }}
    >
      <Hamburger />
    </span>
  ))
  .add('showNotification', () => (
    <span
      style={{
        backgroundColor: '#000',
        display: 'inline-block',
      }}
    >
      <Hamburger showNotification />
    </span>
  ))
  .add('isOpened', () => (
    <span
      style={{
        backgroundColor: '#000',
        display: 'inline-block',
      }}
    >
      <Hamburger isOpened />
    </span>
  ))
  .add('inverted', () => <Hamburger inverted />)
  .add('inverted showNotification', () => (
    <Hamburger inverted showNotification />
  ))
  .add('inverted isOpened', () => <Hamburger inverted isOpened />);
