
import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Example from '../../.storybook/components/Example';
import { Tab } from '../../.storybook/components/TabbedView';
import Input from '../../components/Input';

const tabExample = (
  <Tab title="Example">
    <Example title="CEP" component={<Input.CEP style={{ width: '200px' }} placeholder="CEP" />} importModules="Input" />
    <Example title="CNPJ" component={<Input.CNPJ style={{ width: '200px' }} />} importModules="Input" />
    <Example title="CPF" component={<Input.CPF style={{ width: '200px' }} />} importModules="Input" />
    <Example title="Date" component={<Input.Date style={{ width: '200px' }} />} importModules="Input" />
    <Example title="Phone" component={<Input.Phone style={{ width: '200px' }} />} importModules="Input" />
  </Tab>
);

storiesOf('3. Forms', module)
  .add('Input', () => (
    <AutoExample
      component={Input}
      componentProps={{
        id: 'example',
        name: 'example',
        label: 'Example',
      }}
      additionalTabs={tabExample}
    />
  ));
