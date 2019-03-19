import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab } from '@catho/quantum-storybook-ui';
import { IconFont } from '../../components/GlobalStyle';
import { Container } from '../../components/Grid';

import Input from '../../components/Input';

const tabExample = (
  <Tab title="Example">
    <Container>
      <Input.CEP id="CEP" label="CEP" />
      <Input.CNPJ id="CNPJ" label="CNPJ" />
      <Input.CPF id="CPF" label="CPF" />
      <Input.Date id="Date" label="Date" />
      <Input.Phone id="Phone" label="Phone" />
      <Input.Password id="password" label="Password" />
      <Input label="Error" error="this is a error text" />
      <Input label="Disabled" disabled />
      <Input label="Searchable" searchable />
      <Input
        label="Description Label"
        descriptionLabel="this is a error text"
      />
    </Container>
  </Tab>
);

storiesOf('Forms', module).add('Input', () => (
  <>
    <IconFont />
    <AutoExample
      component={Input}
      componentProps={{
        id: 'example',
        name: 'example',
        label: 'Example',
      }}
      additionalTabs={tabExample}
    />
  </>
));
