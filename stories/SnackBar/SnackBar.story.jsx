import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
  Table,
} from '@catho/quantum-storybook-ui';

import { Row, Col } from '../../components';
import SnackBar from '../../components/SnackBar';
import SnackBarExample from './examples/SnackBarExample';

storiesOf('SnackBar', module).add('SnackBar', () => (
  <>
    <Heading name="SnackBar">
      Modals inform users about a task and can contain critical information,
      require decisions, or involve multiple tasks.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing SnackBar</Title>
          <SimpleHighlight>{`import { SnackBar } from '@catho/quantum';`}</SimpleHighlight>

          <Title as="h3">Compound Components</Title>
          <p>We provide a few components to build your Modal.</p>

          <Row>
            <Col medium={8}>
              <Table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: 200 }}>
                      <code>{'<SnackBar />'}</code>
                    </td>
                    <td>
                      Modal wrapper, it&apos;s the root element of Modal
                      component. Hold all Modal elements.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col medium={4}>
              <SnackBarExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={SnackBar} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h3">SnackBar</Title>
          <p>
            Here you can check a simple implamentation using Modal component.
          </p>

          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
