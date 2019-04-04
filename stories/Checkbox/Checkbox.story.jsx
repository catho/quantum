import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TabbedView,
  Heading,
  Tab,
  ComponentPanel,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';
import Checkbox from '../../components/Checkbox';
import checkboxGroup from './sub-components/checkboxGroup';

const description = `Checkboxes are used when there is a list of options and
the user may select multiple options, including all or none.`;

storiesOf('Forms', module).add('Checkbox', () => (
  <>
    <Heading name="Checkbox">{description}</Heading>

    <TabbedView>
      <Tab title="Usage">
        <ComponentPanel component={<Checkbox />} importModules="Checkbox" />
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Checkbox} />
      </Tab>

      <Tab title="Checkbox group">{checkboxGroup}</Tab>
    </TabbedView>
  </>
));
