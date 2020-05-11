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
  Badge,
  Col,
  Container,
  Icon,
  TabbedView as QuantumTabbedView,
} from '../../components';

const badge = <Badge number={4} />;
const icon = <Icon name="star" />;

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
            <Col>
              <h2>Example with icons and badges</h2>
            </Col>
          </Row>

          <Row>
            <Col key="col-1" xsmall={2} small={4} medium={6}>
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
            <Col key="col-2" xsmall={2} small={4} medium={6}>
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
        <StoryContainer>
          <Row>
            <Col>
              <h2>Example with icons and badges</h2>
            </Col>
          </Row>
          <Row>
            <Col key="col-1" xsmall={2} small={4} medium={6}>
              <SimpleHighlight>
                {`
  import { TabbedView, Tab, Icon, Badge } from '@catho/quantum';
  const badge = <Badge number={4} />;
  const icon = <Icon name="plus" />

  <TabbedView
    skin="primary" // optional
    activeTab="With badge"> // optional
    <TabbedView.Tab title="With badge" badge={badge}>
      With badge content
    </TabbedView.Tab>
    <TabbedView.Tab title="With icon" icon={icon}>
      With icon content
    </TabbedView.Tab>
    <TabbedView.Tab title="With icon and badge" icon={icon} badge={badge}>
      With icon and badge content
    </TabbedView.Tab>
    <TabbedView.Tab title="With only text">
      With only text content
    </TabbedView.Tab>
  </TabbedView>
                `}
              </SimpleHighlight>
            </Col>
            <Col key="col-2" xsmall={2} small={4} medium={6}>
              <QuantumTabbedView>
                <QuantumTabbedView.Tab title="With badge" badge={badge}>
                  With badge content
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab title="With icon" icon={icon}>
                  With icon content
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab
                  title="With icon and badge"
                  icon={icon}
                  badge={badge}
                >
                  With icon and badge content
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab title="With only text">
                  With only text content
                </QuantumTabbedView.Tab>
              </QuantumTabbedView>
            </Col>
          </Row>
        </StoryContainer>
        <StoryContainer>
          <Row>
            <Col>
              <h2>Example with fluid tabs</h2>
            </Col>
          </Row>
          <Row>
            <Col key="col-1" xsmall={2} small={4} medium={6}>
              <SimpleHighlight>
                {`
  import { TabbedView, Tab, Icon, Badge } from '@catho/quantum';
  
  <TabbedView
    fluid // optional
    skin="primary" // optional
    activeTab="With badge" // optional
  >
    <TabbedView.Tab title="Candidates lorem ipsum dolor sit amet consectur">
        Candidates content fluid
    </TabbedView.Tab>
    <TabbedView.Tab title="Companies">
      Companies content fluid
    </TabbedView.Tab>
    <TabbedView.Tab title="Education">
      Education content fluid
    </TabbedView.Tab>
  </TabbedView>
                `}
              </SimpleHighlight>
            </Col>
            <Col key="col-2" xsmall={2} small={4} medium={6}>
              <QuantumTabbedView fluid>
                <QuantumTabbedView.Tab title="Candidates lorem ipsum dolor sit amet consectur">
                  Candidates content fluid
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab title="Companies">
                  Companies content fluid
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab title="Education">
                  Education content fluid
                </QuantumTabbedView.Tab>
              </QuantumTabbedView>
            </Col>
          </Row>
        </StoryContainer>
        <StoryContainer>
          <Row>
            <Col>
              <h2>Example with callback prop in tabs</h2>
            </Col>
          </Row>
          <Row>
            <Col key="col-1" xsmall={2} small={4} medium={6}>
              <SimpleHighlight>
                {`
  import { TabbedView, Tab, Icon, Badge } from '@catho/quantum';
  
  <TabbedView
    fluid // optional
    skin="primary" // optional
    activeTab="With badge" // optional
    onTabClick={() => console.log('onTabClick callback called!')} //optional
  >
    <TabbedView.Tab title="Candidates lorem ipsum dolor sit amet consectur">
        Candidates content fluid
    </TabbedView.Tab>
    <TabbedView.Tab title="Companies">
      Companies content fluid
    </TabbedView.Tab>
    <TabbedView.Tab title="Education">
      Education content fluid
    </TabbedView.Tab>
  </TabbedView>
                `}
              </SimpleHighlight>
            </Col>
            <Col key="col-2" xsmall={2} small={4} medium={6}>
              <QuantumTabbedView
                fluid
                onTabClick={() => console.log('onTabClick callback called!')}
              >
                <QuantumTabbedView.Tab title="Candidates lorem ipsum dolor sit amet consectur">
                  Candidates content fluid
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab title="Companies">
                  Companies content fluid
                </QuantumTabbedView.Tab>
                <QuantumTabbedView.Tab title="Education">
                  Education content fluid
                </QuantumTabbedView.Tab>
              </QuantumTabbedView>
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
