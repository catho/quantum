
import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Example from '../../.storybook/components/Example';
import { Tab } from '../../.storybook/components/TabbedView';
import Input from '../../components/Input';

const tabExample = (
  <Tab title="Example">
    <Example component={<Input.CEP value="06826510" id="CEP" label="CEP" style={{ width: '200px' }} />} />
    <Example component={<Input.CNPJ id="CNPJ" label="CNPJ" style={{ width: '200px' }} />} />
    <Example component={<Input.CPF id="CPF" label="CPF" style={{ width: '200px' }} />} />
    <Example component={<Input.Date id="Date" label="Date" style={{ width: '200px' }} />} />
    <Example component={<Input.Phone id="Phone" label="Phone" style={{ width: '200px' }} />} />
    <div style={{ width: '200px' }}>
      <Example component={<Input.Password id="password" label="Password" passwordLink="http://www.catho.com.br/" />} />
    </div>
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
