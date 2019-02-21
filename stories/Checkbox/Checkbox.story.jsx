import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
} from '@catho-private/quantum-storybook-ui';
import Checkbox from '../../components/Checkbox';
import { Container } from '../../components/Grid';

const ExampleTitle = styled(Title)`
  margin-top: 60px;
`;

const exampleTab = (
  <Tab title="Example">
    <Container fluid>
      <ExampleTitle>Default checkbox</ExampleTitle>
      <Example
        component={<Checkbox label="Lorem ipsum dolor" onChange={() => {}} />}
        code='<Checkbox label="Lorem ipsum dolor" onChange={() => {}} />'
      />
    </Container>
    <Container fluid>
      <ExampleTitle>Checked checkbox</ExampleTitle>
      <Example
        component={
          <Checkbox checked label="Lorem ipsum dolor" onChange={() => {}} />
        }
        code='<Checkbox checked label="Lorem ipsum dolor" onChange={() => {}} />'
      />
    </Container>
    <Container fluid>
      <ExampleTitle>Disabled checkbox</ExampleTitle>
      <Example
        component={
          <Checkbox disabled label="Lorem ipsum dolor" onChange={() => {}} />
        }
        code='<Checkbox disabled label="Lorem ipsum dolor" onChange={() => {}} />'
      />
    </Container>
    <Container fluid>
      <ExampleTitle>Checked and disabled checkbox</ExampleTitle>
      <Example
        component={
          <Checkbox
            disabled
            checked
            label="Lorem ipsum dolor"
            onChange={() => {}}
          />
        }
        code='<Checkbox disabled checked label="Lorem ipsum dolor" onChange={() => {}} />'
      />
    </Container>
    <Container fluid>
      <ExampleTitle>Error checkbox</ExampleTitle>
      <Example
        component={
          <Checkbox
            error="Error message"
            label="Lorem ipsum dolor"
            onChange={() => {}}
          />
        }
        code='<Checkbox error="Error message" label="Lorem ipsum dolor" onChange={() => {}} />'
      />
    </Container>
  </Tab>
);

storiesOf('3. Forms', module).add('Checkbox', () => (
  <AutoExample component={Checkbox} additionalTabs={exampleTab} />
));
