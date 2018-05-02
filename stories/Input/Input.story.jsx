
import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Example from '../../.storybook/components/Example';
import { Tab } from '../../.storybook/components/TabbedView';
import Input from '../../components/Input';

const tabExample = (
  <Tab title="Example">
    <Example component={<Input.CEP label="CEP" style={{ width: '200px' }} />} />
    <Example component={<Input.CNPJ label="CNPJ" style={{ width: '200px' }} />} />
    <Example component={<Input.CPF label="CPF" style={{ width: '200px' }} />} />
    <Example component={<Input.Date label="Date" style={{ width: '200px' }} />} />
    <Example component={<Input.Phone label="Phone" style={{ width: '200px' }} />} />
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
