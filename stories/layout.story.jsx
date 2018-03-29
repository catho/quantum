import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Contributing from '../docs/contributing.md';
import { withDocs } from 'storybook-readme';

storiesOf(' Introduction', module)
  .add('Default', withDocs(Contributing, () => <div>Hello Button</div>));


storiesOf('1. Layout', module)
  .add('to Storybook', () => <div>estouro</div>);
