import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  Atom,
  HowToImport,
  TabbedView,
  Tab,
  CodeExample,
  Title,
} from '../../.storybook/components';
import Catalogue from './Catalogue';

const IconCode = `<Icon name="check-circle" />
<Icon name="android" />
<Icon name="thumb-up" />`;

storiesOf('1. Foundation', module)
  .add('Icons', () => (
    <React.Fragment>
      <Heading image={Atom} name="Icon" />
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Icon" />
          <Title>Usage</Title>
          <CodeExample showTitle={false} code={IconCode} />
        </Tab>
        <Tab title="Catalogue">
          <Catalogue />
        </Tab>
      </TabbedView>
    </React.Fragment>
  ));
