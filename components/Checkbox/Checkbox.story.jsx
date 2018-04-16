import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Checkbox from './Checkbox';

storiesOf('3. Forms', module)
  .add('Checkbox', () => (
    <Heading atom title="Checkbox">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel
            component={<Checkbox />}
            importModules="Checkbox"
          />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Checkbox} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
