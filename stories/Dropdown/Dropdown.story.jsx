import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import {
  Title,
  Heading,
  TabbedView,
  Tab,
  HowToImport,
  Example,
  AutoPropsApi,
} from '@catho-private/quantum-storybook-ui';

import Dropdown from '../../components/Dropdown';
import { Row, Col } from '../../components/Grid';
import { Controlled, Simple, WithError, Disabled } from './examples';

const MARGIN = 'margin-bottom: 60px;';

const StyledTitle = styled(Title)`
  ${MARGIN}
`;
const ExampleWrapper = styled.div`
  ${MARGIN}
`;

const _col = (Component, title) => (
  <ExampleWrapper>
    <Example title={title} code={Component.CODE} component={<Component />} />
  </ExampleWrapper>
);

storiesOf('3. Forms', module).add('Dropdown', () => (
  <Heading name="Dropdown">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="Dropdown" />
        <StyledTitle>Examples</StyledTitle>
        <Row>
          <Col small={4}>
            {_col(Controlled, 'Controlled')}
            {_col(Simple, 'Simple')}
            {_col(WithError, 'With an error and a required mark')}
            {_col(Disabled, 'Disabled')}
          </Col>
        </Row>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Dropdown} />
      </Tab>
    </TabbedView>
  </Heading>
));
