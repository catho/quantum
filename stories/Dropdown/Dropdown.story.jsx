import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  Title,
  Heading,
  TabbedView,
  Tab,
  HowToImport,
  CodeExample,
  AutoPropsApi,
} from '@catho-private/quantum-storybook-ui';

import Dropdown from '../../components/Dropdown';
import { Row, Col } from '../../components/Grid';
import List from '../../components/List';
import {
  Simple,
  CustomLabel,
  RequiredMark,
  WithError,
  Disabled,
  Controlled,
} from './examples';

const MARGIN = 'margin-bottom: 60px;';

const StyledTitle = styled(Title)`
  ${MARGIN}
`;
const ExampleWrapper = styled.div`
  ${MARGIN}
`;

const _example = Component => (
  <ExampleWrapper>
    <Row>
      <Col xsmall={2} small={4} medium={6}>
        <CodeExample code={Component.CODE} showTitle={false} />
      </Col>
      <Col xsmall={2} small={4} medium={6}>
        <Component />
      </Col>
    </Row>
  </ExampleWrapper>
);

storiesOf('3. Forms', module).add('Dropdown', () => (
  <Heading name="Dropdown">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="Dropdown" />
        <p>
          A dropdown receives user input, allowing it to choose one of several
          options.
        </p>
        <p>
          Its options are described by {'"'}items{'"'} prop, which can be either
          array of string or objects, within the following structure:
        </p>
        <List>
          <List.Item>
            <strong>value</strong>: Computed to dropdown value itself, if the
            corresponding item is selected
          </List.Item>
          <List.Item>
            <strong>label</strong>: What is showed to the user in the dropdown
            interface
          </List.Item>
        </List>
        <p>
          If a list of strings is provided, they will be used both for items
          values and labels.
        </p>
        <StyledTitle>Examples</StyledTitle>
        {_example(Simple)}
        {_example(CustomLabel)}
        {_example(RequiredMark)}
        {_example(WithError)}
        {_example(Disabled)}
        {_example(Controlled)}
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Dropdown} />
      </Tab>
    </TabbedView>
  </Heading>
));
