import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import CodeExample from '../../.storybook/components/CodeExample';
import Table from '../../.storybook/components/Table';
import { Col, Row } from '../../components/Grid';
import Card from '../../components/Card';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Title from '../../.storybook/components/Title';

const cardSample = (
  <Card elevation={1} hoverElevation={5}>
    <Card.Container horizontal>
      <Card.Thumbnail
        src="https://image.flaticon.com/icons/svg/876/876019.svg"
        alt="Female Avatar"
      />

      <Card.HeaderText>
        <Card.Title>Primary text</Card.Title>
        <Card.SupportText>Secondary text</Card.SupportText>
      </Card.HeaderText>
    </Card.Container>

    <Card.Media src="https://placeimg.com/300/150/any" alt="Female Avatar" />

    <Card.Container>
      <Card.SupportText>Description suport text</Card.SupportText>
      <Card.Divider />
      <Card.SupportText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam viverra porttitor placerat.
        Vivamus nec purus sit amet elit condimentum malesuada.
      </Card.SupportText>
    </Card.Container>

    <Card.Container horizontal>
      <Card.Button
        skin="modal"
        type="button"
        onClick={() => {}}
      >
        Catho 1
      </Card.Button>

      <Card.Button
        skin="modal"
        type="button"
        onClick={() => {}}
      >
        Catho 2
      </Card.Button>

    </Card.Container>
  </Card>);

const simpleCardSample = (
  <Card elevation={1} hoverElevation={5}>
    <Card.Container>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam viverra porttitor placerat.
        Vivamus nec purus sit amet elit condimentum malesuada.
      </p>
    </Card.Container>
  </Card>
);

storiesOf('9. Card', module)
  .add('Card', () => (
    <Heading name="Card">
      <TabbedView>
        <Tab title="Anatomy">
          <Row>
            <Col desktop={12} tablet={12}>
              <p>
                The card container is the only required element in a card.
                All other elements shown here are optional.
              </p>
              <p>
                Card layouts can vary to support the types of content they contain.
                The following elements are commonly found among that variety.
              </p>

              <h1>The anatomy</h1>

              <Col desktop={12} tablet={12} style={{ backgroundColor: '#e5e5e5', textAlign: 'center' }}>
                <img src="https://material.io/design/assets/1eZNTdj8h1J0BFkbl23LyzEwjjvMzY_uV/cards-elements-2b.png" alt="" width="900" />
              </Col>

              <h2>Card sub-components</h2>

              <Table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Code</th>
                    <th>Description</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Container</td>
                    <td><code>{'<Card.Container />'}</code></td>
                    <td>
                      Card containers hold all card elements, and their size is
                      determined by the space those elements occupy.
                      Card elevation is expressed by the container.
                    </td>
                  </tr>

                  <tr>
                    <td>Thumbnail [optional]</td>
                    <td><code>{'<Card.Thumbnail />'}</code></td>
                    <td>Cards can include thumbnails to display an avatar, logo, or icon.</td>
                  </tr>

                  <tr>
                    <td>Header text [optional]</td>
                    <td><code>{'<Card.HeaderText />'}</code></td>
                    <td>
                      Header text can include things like the name of a photo album or article.
                    </td>
                  </tr>

                  <tr>
                    <td>Media [optional]</td>
                    <td><code>{'<Card.Media />'}</code></td>
                    <td>
                      Cards can include a variety of media, including photos,
                      and graphics, such as weather icons.
                    </td>
                  </tr>

                  <tr>
                    <td>Supporting text [optional]</td>
                    <td><code>{'<Card.SupportText />'}</code></td>
                    <td>
                      Supporting text include text like an article summary
                      or a restaurant description.
                    </td>
                  </tr>

                  <tr>
                    <td>Button [optional]</td>
                    <td><code>{'<Card.Button />'}</code></td>
                    <td>Cards can include buttons for actions.</td>
                  </tr>

                  <tr>
                    <td>Icons [optional]</td>
                    <td><code>{'<Card.Icon />'}</code></td>
                    <td>Cards can include icons for actions.</td>
                  </tr>

                </tbody>
              </Table>

              <p>
                Each card is made up of content blocks.
                All of the blocks, as a whole, are related to a single subject or destination.
                Content can receive different levels of emphasis,
                depending on its level of hierarchy.
              </p>

              <Col desktop={12} tablet={12} style={{ backgroundColor: '#e5e5e5', textAlign: 'center' }}>
                <img src="https://material.io/design/assets/0B6xUSjjSulxca3J1cWoxa003amc/cards-elements-1.png" alt="" width="900" />
              </Col>

              <h2>Dividers</h2>
              <p>Use inset dividers (1), to separate related content.</p>

              <Col desktop={12} tablet={12} style={{ backgroundColor: '#e5e5e5', textAlign: 'center' }}>
                <img src="https://material.io/design/assets/0B6xUSjjSulxcUTQtcVl0WURPWW8/cards-dividers-2.png" alt="" width="900" />
              </Col>
            </Col>
          </Row>
        </Tab>

        <Tab title="Example">
          <Row>
            <Col desktop={8} tablet={8}>
              <CodeExample component={cardSample} />
            </Col>

            <Col desktop={4} tablet={4}>
              <Title>Preview</Title>
              {cardSample}
            </Col>
          </Row>
          <h2>Simple card</h2>
          <Row>
            <Col desktop={8} tablet={8}>
              <CodeExample component={simpleCardSample} />
            </Col>

            <Col desktop={4} tablet={4}>
              <Title>Preview</Title>
              {simpleCardSample}
            </Col>
          </Row>
        </Tab>
      </TabbedView>
    </Heading>
  ));
