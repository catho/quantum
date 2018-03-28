import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import HowToImport from '../../.storybook/HowToImport';
import Footer from './Footer';

const stories = storiesOf('2. SmartComponents', module);

stories
  .addDecorator(HowToImport)
  .add(
    'Footer',
    withInfo('This is a basic usage of the footer component')(() => <Footer />),
  );

Footer.displayName = 'Footer';
