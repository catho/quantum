import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import HowToImport from '../../.storybook/decorators/HowToImport';
import RightPanel from '../../.storybook/decorators/RightPanel';
import Header from './Header';
import data from './data';

const options = {
  '/': 'candidatos',
  'https://www.catho.com.br/empresa/': 'empresas',
  'https://www.catho.com.br/educacao/': 'cursos',
};
const defaultValue = '/';
const groupId = 'GROUP-ID1';

storiesOf('2. SmartComponents', module)
  .addDecorator(HowToImport)
  .addDecorator(RightPanel)
  .addDecorator(withKnobs)
  .add(
    'Header',
    withInfo('This is a basic usage of the Header component')(() => (
      <Header
        data={data}
        path={select('Path', options, defaultValue, groupId)}
      />)),
  );
