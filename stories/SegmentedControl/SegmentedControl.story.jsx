import React from 'react';
import { storiesOf } from '@storybook/react';
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

import SegmentedControl from '../../components/SegmentedControl';

storiesOf('SegmentedControl', module).add('SegmentedControl', () => (
  <>
    <Heading name="SegmentedControl">
      Socials component is used to share the social media in applications.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing SegmentedControl</Title>
          <SimpleHighlight>{`import { SegmentedControl } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }} />
          </Row>
          <Title as="h3">Segmented control</Title>
          <SegmentedControl />
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={SegmentedControl} />
      </Tab>

      {/* <Tab title="Example">

      </Tab> */}
    </TabbedView>
  </>
));
