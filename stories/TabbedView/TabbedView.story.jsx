import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabbedView } from '../../components';

storiesOf('TabbedView', module).add('TabbedView', () => (
  <TabbedView>
    <TabbedView.Tab title="Candidatos">Candidatos</TabbedView.Tab>
    <TabbedView.Tab title="Empresas">Empresas</TabbedView.Tab>
    <TabbedView.Tab title="Educação">Educação</TabbedView.Tab>
  </TabbedView>
));
