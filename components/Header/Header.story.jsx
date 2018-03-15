import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Header from './Header';
import data from './data';

const stories = storiesOf('Header', module);

stories.add(
  'Header component',
  withInfo('This is a basic usage of the Header component')(() => (
    <Header
      data={data}
      handleMenuOpen={action('open menu')}
      handleLoginOpen={action('openLogin')}
      path="/"
    />)),
);

stories.add(
  'Header component with login opened',
  withInfo('Header component with login opened')(() => (
    <Header
      data={data}
      handleMenuOpen={action('open menu')}
      handleLoginOpen={action('openLogin')}
      loginOpened
      path="/"
    />)),
);

stories.add(
  'Header component with menu opened',
  withInfo('Header component with menu opened')(() => (
    <Header
      data={data}
      menuOpened
      path="/"
      handleMenuOpen={action('open menu')}
      handleLoginOpen={action('openLogin')}
    />)),
);

Header.displayName = 'Header';
