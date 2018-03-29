import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import Header from './Header';
import data from './data';

const stories = storiesOf('2. SmartComponents', module);
stories.addDecorator(withKnobs);

const options = {
  '/': 'candidatos',
  'https://www.catho.com.br/empresa/': 'empresas',
  'https://www.catho.com.br/educacao/': 'cursos',
};
const defaultValue = '/';
const groupId = 'GROUP-ID1';

stories.add(
  'Header component',
  withInfo('This is a basic usage of the Header component')(() => (
    <Header
      data={data}
      path={select('Path', options, defaultValue, groupId)}
    />)),
);

Header.displayName = 'Header';
