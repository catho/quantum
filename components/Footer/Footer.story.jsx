import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Footer from './Footer';

const stories = storiesOf('2. SmartComponents', module);

stories.add(
  'Footer component',
  withInfo('This is a basic usage of the footer component')(() => <Footer />),
);

Footer.displayName = 'Footer';
