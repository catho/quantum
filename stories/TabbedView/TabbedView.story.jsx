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
import { Row, Col, Container } from '../../components';
import { TabbedView as QuantumTabbedView } from '../../components';

storiesOf('TabbedView', module).add('TabbedView', () => (
  <>
    <Heading name="TabbedView">
      <p>
        TabbedView and Tab are components created to organize content into
        separate views where only one view can be visible at a time.
      </p>
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
  skin="blue" // optional
  activeTab="Empresas"> // optional
  <TabbedView.Tab title="Candidatos">
    Candidatos content
  </TabbedView.Tab>
  <TabbedView.Tab title="Empresas">
    Empresas content
  </TabbedView.Tab>
  <Tab title="Educação">
    Educação content
  </Tab>
</TabbedView>`}</SimpleHighlight>
            </Col>
            <Col xsmall={2} small={4} medium={6}>
              <Container>
                <QuantumTabbedView>
                  <QuantumTabbedView.Tab title="Candidatos">
                    Candidatos content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Empresas">
                    Empresas content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Educação">
                    Educação content
                  </QuantumTabbedView.Tab>
                </QuantumTabbedView>
              </Container>
              <Container>
                <QuantumTabbedView skin="blue" activeTab="Empresas">
                  <QuantumTabbedView.Tab title="Candidatos">
                    Candidatos content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Empresas">
                    Empresas content
                  </QuantumTabbedView.Tab>
                  <QuantumTabbedView.Tab title="Educação">
                    Educação content
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
