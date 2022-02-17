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

import Card from '../../components/Card';
import Button from '../../components/Button';
import { Container, Col, Row } from '../../components/Grid';
import { Typography } from '../../components/GlobalStyle';

export default {
  title: 'card',
};

export const CardStory = () => (
  <>
    <Typography />
    <Heading name="Card">
      Cards contain content and actions about a single subject.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Card</Title>
          <SimpleHighlight>{`import { Card } from '@catho/quantum';`}</SimpleHighlight>

          <Title as="h3">Compound Components</Title>
          <p>We provide a few components to build your Card.</p>

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
                    <td style={{ width: 180 }}>
                      <code>{'<Card />'}</code>
                    </td>
                    <td>
                      Card wrapper, it&apos;s the root element of card
                      component. Hold all card elements, and their size is
                      determined by the space those elements occupy.
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
                      The main content, can include, for example, a job
                      description or a resume information.
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
            </Col>

            <Col medium={4}>
              <Card>
                <Card.Header>
                  <Card.Thumbnail rounded src="" alt="" />
                  <Card.HeaderText>
                    <Card.Title>Title</Card.Title>
                    <Card.Description>Description</Card.Description>
                  </Card.HeaderText>
                </Card.Header>
                <Card.Media src="" alt="" />
                <Card.Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis fringilla lectus. Morbi a risus.
                </Card.Content>
                <Card.Footer>
                  <Button>Apply</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <p>
            <code>
              {'<Card.Title />, <Card.Description /> and <Card.Thumbnail />'}
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
);
