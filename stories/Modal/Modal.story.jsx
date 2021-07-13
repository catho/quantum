import React from 'react';
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
import { Modal, Row, Col } from '../../components';
import ModalExample from './examples/ModalExample';
import ModalSmallTitleExample from './examples/ModalSmallTitleExample';

export default {
  title: 'Modal',
};

export const _Modal = () => (
  <>
    <Heading name="Modal">
      Modals inform users about a task and can contain critical information,
      require decisions, or involve multiple tasks.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Modal</Title>
          <SimpleHighlight>{`import { Modal } from '@catho/quantum';`}</SimpleHighlight>

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
                      <code>{'<Modal />'}</code>
                    </td>
                    <td>
                      Modal wrapper, it&apos;s the root element of Modal
                      component. Hold all Modal elements.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>{'<Modal.Header />'}</code>
                    </td>
                    <td>It&apos;s envolve the Modal header components.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>{'<Modal.HeaderText />'}</code>
                    </td>
                    <td>It&apos;s envolve the Modal.Title component.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>{'<Modal.Title />'}</code>
                    </td>
                    <td>
                      The Modal main title. You can set a boolean prop{' '}
                      <strong>small</strong> to set titles with 20px of size (
                      the default is 24px)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>{'<Modal.Footer />'}</code>
                    </td>
                    <td>
                      Footer is provided for include actions buttons, icons, any
                      kind of user interaction.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col medium={4}>
              <ModalExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Modal} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h3">Simple Modal</Title>
          <p>
            Here you can check a simple implamentation using Modal component.
          </p>

          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{ModalExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <ModalExample />
            </Col>
          </Row>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{ModalSmallTitleExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <ModalSmallTitleExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
