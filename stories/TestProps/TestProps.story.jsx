import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import TestProps from '../../components/TestProps'

const Foo = styled.div`
  background-color: tomato`;
Foo.displayName = 'Foo';

const Bar = styled.div`
  background-color: tomato`;
Bar.displayName = 'Bar';

const test = <TestProps><Foo><Bar>Alan</Bar></Foo></TestProps>;

storiesOf('3. TestProps', module)
  .add('Testing dynamic props', () => (
    <Heading atom title="TestProps">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={test} importModules={'TestProps'}/>
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={test} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
