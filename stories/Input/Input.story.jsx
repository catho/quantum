import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Example, Tab } from '@catho/quantum-storybook-ui';

import Input from '../../components/Input';

const tabExample = (
  <Tab title="Example">
    <Example
      component={<Input.CEP id="CEP" label="CEP" style={{ width: '200px' }} />}
    />
    <Example
      component={
        <Input.CNPJ id="CNPJ" label="CNPJ" style={{ width: '200px' }} />
      }
    />
    <Example
      component={<Input.CPF id="CPF" label="CPF" style={{ width: '200px' }} />}
    />
    <Example
      component={
        <Input.Date id="Date" label="Date" style={{ width: '200px' }} />
      }
    />
    <Example
      component={
        <Input.Phone id="Phone" label="Phone" style={{ width: '200px' }} />
      }
    />
    <div style={{ width: '200px' }}>
      <Example component={<Input.Password id="password" label="Password" />} />
    </div>

    <div style={{ width: '200px' }}>
      <Input label="error" error="this is a error text" />
    </div>

    <div style={{ width: '200px' }}>
      <Input label="disabled" disabled />
    </div>

    <div style={{ width: '200px' }}>
      <Input
        label="description-label"
        descriptionLabel="this is a error text"
      />
    </div>
  </Tab>
);

storiesOf('Forms', module).add('Input', () => (
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
