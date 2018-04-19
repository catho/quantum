import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Textarea from '../../components/Textarea';
import Atom from '../static/atom.svg';

storiesOf('3. Forms', module)
  .add('Textarea', () => (
    <Heading image={Atom} title="<Textarea />">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Textarea id="example" label="Example" name="Textarea" />} importModules="Textarea" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Textarea} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
