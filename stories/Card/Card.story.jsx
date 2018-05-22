import React from 'react';
import Heading from '../../.storybook/components/Heading';
import CodeExample from '../../.storybook/components/CodeExample';
import LivePreview from '../../.storybook/components/LivePreview';
import { Col, Row } from '../../components/Grid';
import { storiesOf } from '@storybook/react';
import { Card, Container, Thumbnail, HeaderText, Title, SupportText, Media, Button, Divider } from '../../components/Card';
import Atom from '../static/atom.svg';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';

const cartao = (<Card elevation={1} hoverElevation={5}>
  <Container horizontal>
    <Thumbnail
      src="https://image.flaticon.com/icons/svg/876/876019.svg"
      alt="Female Avatar"
    />

    <HeaderText>
      <Title>Primary text</Title>
      <SupportText>Secondary text</SupportText>
    </HeaderText>
  </Container>

  <Media src="https://placeimg.com/300/150/any" alt="Female Avatar" />

  <Container>
    <SupportText>Description suport text</SupportText>
    <Divider />
    <SupportText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor placerat. Vivamus nec purus sit amet elit condimentum malesuada.</SupportText>
  </Container>

  <Container horizontal>
    <Button
      skin="modal"
      type="button"
      onClick={() => {}}>
      Catho 1
    </Button>

    <Button
      skin="modal"
      type="button"
      onClick={() => {}}>
      Catho 2
    </Button>

  </Container>
</Card>);

storiesOf('8. Card', module)
  .add('Card', () => (
    <Heading image={Atom} title="<Card />">
      <TabbedView>
        <Tab title="Anatomy">
          <p>The card container is the only required element in a card. All other elements shown here are optional. </p>
          <p>Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</p>

          <h1>The anatomy</h1>
          <img src="https://material.io/design/assets/1eZNTdj8h1J0BFkbl23LyzEwjjvMzY_uV/cards-elements-2b.png" alt="" width="900" />

          <h3>1. Container</h3>
          <p>Card containers hold all card elements, and their size is determined by the space those elements occupy. Card elevation is expressed by the container. </p>
          <h3>2. Thumbnail [optional]</h3>
          <p>Cards can include thumbnails to display an avatar, logo, or icon.</p>
          <h3>3. Header text [optional]</h3>
          <p>Header text can include things like the name of a photo album or article.</p>
          <h3>4. Subhead [optional] </h3>
          <p>Subhead text can include text elements such as an article byline or a tagged location.</p>
          <h3>5. Media [optional]</h3>
          <p>Cards can include a variety of media, including photos, and graphics, such as weather icons.</p>
          <h3>6. Supporting text [optional]</h3>
          <p>Supporting text include text like an article summary or a restaurant description. </p>
          <h3>7. Buttons [optional]</h3>
          <p>Cards can include buttons for actions.</p>
          <h3>8. Icons [optional]</h3>
          <p>Cards can include icons for actions.</p>

          <br />
          <p>Each card is made up of content blocks. All of the blocks, as a whole, are related to a single subject or destination. Content can receive different levels of emphasis, depending on its level of hierarchy.</p>

          <img src="https://material.io/design/assets/0B6xUSjjSulxca3J1cWoxa003amc/cards-elements-1.png" alt="" width="900" />

          <h2>Dividers</h2>
          <p>Dividers can be used to separate regions in cards or to indicate areas of a card that can expand.</p>

          <img src="https://material.io/design/assets/0B6xUSjjSulxcUTQtcVl0WURPWW8/cards-dividers-2.png" alt="" width="900" />
        </Tab>

        <Tab title="Usage">
          <Row>
            <Col desktop={12} tablet={12}>
            </Col>

            <Col desktop={6} tablet={6}>
              <CodeExample component={cartao} />
            </Col>

            <Col desktop={6} tablet={6}>
              {cartao}
            </Col>
          </Row>
        </Tab>
      </TabbedView>
    </Heading>
  ));
