import React from 'react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col } from '../../components';

import Socials from '../../components/Socials';
import {
  SocialExampleAll,
  SocialExampleChangingSize,
  SocialExampleFacebook,
  SocialExampleWithoutBox,
  SocialExampleWithoutBoxChangingSize,
} from './examples/SocialExamples';

export default {
  title: 'Socials',
};

export const _Socials = () => (
  <>
    <Heading name="Socials">
      Socials component is used to share the social media in applications.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Socials</Title>
          <SimpleHighlight>{`import { Socials } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }} />
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Socials} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h1">Socials</Title>
          <p>
            Here you can check a simple implamentation using Socials component.
          </p>
          <Title as="h3">All socials</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SocialExampleAll.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SocialExampleAll />
            </Col>
          </Row>
          <Title as="h3">All socials (24px)</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>
                {SocialExampleChangingSize.code}
              </SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SocialExampleChangingSize />
            </Col>
          </Row>
          <Title as="h3">With only facebook</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SocialExampleFacebook.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SocialExampleFacebook />
            </Col>
          </Row>
          <Title as="h3">Socials without boxes</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SocialExampleWithoutBox.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SocialExampleWithoutBox />
            </Col>
          </Row>
          <Title as="h3">Socials without boxes (24px)</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>
                {SocialExampleWithoutBoxChangingSize.code}
              </SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SocialExampleWithoutBoxChangingSize />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
