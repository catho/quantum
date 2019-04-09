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
  AutoExample,
} from '@catho/quantum-storybook-ui';
import { Row, Col } from '../../components';
import Popover from '../../components/Popover';
import PopoverExample from './examples/PopoverExample';

storiesOf('Popover', module).add('Popover', () => (
  <>
    <Heading name="Popover">
      A Popover can be used to display some content on top of another
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <AutoExample
          component={Popover}
          componentProps={{
            children: <p>Popover me</p>,
            text:
              'Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec.',
          }}
        />
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Popover} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h3">Popover</Title>
          <p>
            Here you can check a simple implamentation using SnackBar component.
          </p>

          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{PopoverExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <PopoverExample text="Popover text">
                Popover action
              </PopoverExample>
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
