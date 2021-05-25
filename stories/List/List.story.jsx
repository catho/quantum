import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  Tab,
  SimpleHighlight,
  Title,
  StoryContainer,
  AutoPropsApi,
  TabbedView,
} from '@catho/quantum-storybook-ui';

import { Container, Row, Col, List } from '../../components';

const description =
  "An List is a vertical stack of interactive headings used to toggle the display of further information; each item can be 'collapsed', with just a short label visible, or 'expanded' to show the complete content.";

storiesOf('Foundation', module).add('List', () => (
  <>
    <Heading name="List">{description}</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing List</Title>
          <SimpleHighlight>
            {`import { List } from '@catho/quantum';`}
          </SimpleHighlight>
          <br />
          <List />
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <StoryContainer>
          <AutoPropsApi component={List} />
        </StoryContainer>
      </Tab>
      <Tab title="Examples">
        <Container no-gutters>
          <Row key="code-example">
            <Col xsmall={2} small={4} medium={6}>
              <SimpleHighlight>{'código '}</SimpleHighlight>
            </Col>
            <Col xsmall={2} small={4} medium={6}>
              <h3>Example of Object passed in Items</h3>
              <p> This is a sample of object items passed by Items prop</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <h4>
            passing this object to the items prop, the component will render
            this way:
          </h4>
        </Container>
      </Tab>
    </TabbedView>
  </>
));
