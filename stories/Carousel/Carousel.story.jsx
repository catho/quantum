import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Tab,
  TabbedView,
  Heading,
  Title,
  StoryContainer,
  SimpleHighlight,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';
import Carousel from '../../components/Carousel';
import Alert from '../../components/Alert';
import { content, contentWithLongTexts } from './Content';

storiesOf('Carousel', module).add('Carousel', () => (
  <>
    <Heading name="Carousel">
      Carousel is a component that presents cards to go through a series of
      content. Works with a series of image, text, or custom markup. Also
      includes support for indicator and previous / next controls.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Carousel</Title>
          <SimpleHighlight>{`import { Carousel } from '@catho/quantum';`}</SimpleHighlight>
          <p>
            The Carousel component will render cards with thumbs and its
            informations or only thumbs. There are 3 types of cards for this
            Carousel component: <br />
            - Small ( only thumbs ); <br />
            - Medium ( thumbs, title and description ); <br />
            - Large ( thumbs, title and description ); <br />
          </p>

          <br />
          <Alert icon="info" skin="neutral">
            The carousel controls (arrows) hides on screen smaller than 1024px.
          </Alert>

          <Title as="h3">Carousel with medium cards (default)</Title>
          <SimpleHighlight>
            {content.code}
            {`<Carousel cards={content} />`}
          </SimpleHighlight>
          <br />
          <Carousel cards={content} />

          <Title as="h3">Carousel with small cards</Title>
          <SimpleHighlight>
            {`<Carousel cards={content} cardSize="small" />`}
          </SimpleHighlight>
          <br />
          <Carousel cards={content} cardSize="small" />

          <Title as="h3">Carousel with ellipsis for long texts</Title>
          <Carousel cards={contentWithLongTexts} />

          <br />
          <Alert icon="info" skin="neutral">
            This component is based on the open source{' '}
            <a
              href="https://react-slick.neostack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-slick lib
            </a>
            .
          </Alert>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <StoryContainer>
          <AutoPropsApi component={Carousel} />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
