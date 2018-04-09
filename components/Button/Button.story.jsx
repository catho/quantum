import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Button from './Button';

const button = <Button />;

console.log(button);

const stories = storiesOf('3. Buttons', module);
stories
  .add('Button', () => (
    <Heading atom title="Button">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={button} importModules="Button" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={button} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
