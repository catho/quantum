
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import Example from '../../.storybook/components/Example';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Input from './Input';

storiesOf('3. Forms', module)
  .add('Input', () => (
    <Heading atom title="Input">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Input />} importModules="Input" />
        </Tab>

        <Tab title="Example">
          <Example title="CEP" component={<Input.CEP style={{ width: '200px' }} placeholder="CEP" />} importModules="Input" />
          <Example title="CNPJ" component={<Input.CNPJ style={{ width: '200px' }} />} importModules="Input" />
          <Example title="CPF" component={<Input.CPF style={{ width: '200px' }} />} importModules="Input" />
          <Example title="Date" component={<Input.Date style={{ width: '200px' }} />} importModules="Input" />
          <Example title="Phone" component={<Input.Phone style={{ width: '200px' }} />} importModules="Input" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Input} />
        </Tab>
      </TabbedView>
      <Input.CEP />
    </Heading>
  ));
