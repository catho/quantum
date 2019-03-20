import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TabbedView,
  Tab,
  Heading,
  Title,
  StoryContainer,
  SimpleHighlight,
  Table,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';

import SimpleCard from './examples/SimpleCard';
import JobAdCard from './examples/JobAdCard';
import AdvancedCard from './examples/AdvancedCard';

import { Container, Col, Row } from '../../components/Grid';
import Card from '../../components/Card';

const importCard = `import { Card } from '@catho/quantum';`;

storiesOf('Card', module).add('Card', () => (
  <>
    <Heading name="Card">
      Cards contain content and actions about a single subject.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Card</Title>
          <SimpleHighlight>{importCard}</SimpleHighlight>

          <Title as="h3">Compund Components</Title>
          <p>We provide a few components to build your Card.</p>

          <Table>
            <thead>
              <tr style={{ width: 180 }}>
                <th>Component</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>{'<Card />'}</code>
                </td>
                <td>
                  Card wrapper, it&apos;s the root element of card component.
                  Hold all card elements, and their size is determined by the
                  space those elements occupy.
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Header />'}</code>
                </td>
                <td>It&apos;s envolve the card header components.</td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.HeaderText />'}</code>
                </td>
                <td>
                  It&apos;s envolve the Card.Title and Card.Description
                  components.
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Title />'}</code>
                </td>
                <td>The main title.</td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Description />'}</code>
                </td>
                <td>Cards can display a little explanation.</td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Thumbnail />'}</code>
                </td>
                <td>Display an image, avatar, or logo.</td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Media />'}</code>
                </td>
                <td>
                  Cards can include a variety of media, including images,
                  photos, graphics, and so on.
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Content />'}</code>
                </td>
                <td>
                  The main content, can include, for example, a job description
                  or a resume information.
                </td>
              </tr>
              <tr>
                <td>
                  <code>{'<Card.Footer />'}</code>
                </td>
                <td>
                  Footer is provided for include actions buttons, icons, any
                  kind of user interaction.
                </td>
              </tr>
            </tbody>
          </Table>

          <p>
            <code>
              {'<Card.Title />'}, {'<Card.Description />'} and{' '}
              {'<Card.Thumbnail />'}
            </code>{' '}
            can receive some props, you can check then on the{' '}
            <strong>API panel</strong>.
          </p>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Card.Title} title="Card.Title" />
        <AutoPropsApi component={Card.Description} title="Card.Description" />
        <AutoPropsApi component={Card.Thumbnail} title="Card.Thumbnail" />
      </Tab>

      <Tab title="Examples">
        <StoryContainer>
          <Title as="h2">Simple Card</Title>
          <Container fluid>
            <Row>
              <Col xsmall={4} small={5} medium={6}>
                <SimpleHighlight>{SimpleCard.code}</SimpleHighlight>
              </Col>

              <Col xsmall={4} small={3} medium={6}>
                <SimpleCard />
              </Col>
            </Row>
          </Container>

          <Title as="h2">JobAd Card</Title>
          <Container fluid>
            <Row>
              <Col xsmall={4} small={5} medium={6}>
                <SimpleHighlight>{JobAdCard.code}</SimpleHighlight>
              </Col>

              <Col xsmall={4} small={3} medium={6}>
                <JobAdCard />
              </Col>
            </Row>
          </Container>

          <Title as="h2">Advanced Card</Title>
          <Container fluid>
            <Row>
              <Col xsmall={4} small={5} medium={6}>
                <SimpleHighlight>{AdvancedCard.code}</SimpleHighlight>
              </Col>

              <Col xsmall={4} small={3} medium={6}>
                <AdvancedCard />
              </Col>
            </Row>
          </Container>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
