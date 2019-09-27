import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  TabbedView,
  Tab,
  StoryContainer,
  AutoPropsApi,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';
import {
  Row,
  Col,
  Container,
  TabbedView as QuantumTabbedView,
} from '../../components';

storiesOf('TabbedView', module).add('TabbedView', () => (
  <>
    <Heading name="TabbedView">
      TabbedView and Tab are components created to organize content into
      separate views where only one view can be visible at a time.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <p>
            Think in TabbedView as a RadioGroup proper to group big context such
            as menus, dynamic forms, navigation, and so on.
          </p>
          <p>
            To do this, we provide <code>TabbedView</code>,{' '}
            <code>TabbedView.Tab</code>, and <code>Tab</code>.
          </p>

          <Row>
            <Col xsmall={2} small={4} medium={6}>
              <SimpleHighlight>{`import { TabbedView, Tab } from '@catho/quantum';

<TabbedView
  skin="primary" // optional
  activeTab="Companies"> // optional
  <TabbedView.Tab title="Candidates">
    Candidates content
  </TabbedView.Tab>
  <TabbedView.Tab title="Companies">
    Companies content
  </TabbedView.Tab>
  <Tab title="Education">
    Education content
  </Tab>
</TabbedView>`}</SimpleHighlight>
            </Col>
            <Col xsmall={2} small={4} medium={6}>
              <Container>
                <QuantumTabbedView>
                  <QuantumTabbedView.Tab title="Candidates">
                    Candidates content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Companies">
                    Companies content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Education">
                    Education content
                  </QuantumTabbedView.Tab>
                </QuantumTabbedView>
              </Container>
              <Container>
                <QuantumTabbedView skin="primary" activeTab="Companies">
                  <QuantumTabbedView.Tab title="Candidates">
                    Candidates content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Companies">
                    Companies content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Education">
                    Education content
                  </QuantumTabbedView.Tab>
                </QuantumTabbedView>
              </Container>
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={QuantumTabbedView} title="TabbedView" />
        <AutoPropsApi
          component={QuantumTabbedView.Tab}
          title="TabbedView.Tab"
        />
      </Tab>
    </TabbedView>
  </>
));
