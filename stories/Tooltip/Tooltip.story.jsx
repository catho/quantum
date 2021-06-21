import React from 'react';
import {
  AutoExample,
  Tab,
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';
import { Row, Col } from '../../components/Grid';
import Tooltip from '../../components/Tooltip';
import examples from './examples/examples';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Title as="h2">Examples</Title>
      {examples.map(example => (
        <Row key={example.code}>
          <Col xsmall={4} small={8} medium={6}>
            <SimpleHighlight>{example.code}</SimpleHighlight>
          </Col>
          <Col xsmall={4} small={8} medium={6}>
            <Row>
              <Col xsmall={10} small={8} medium={6}>
                {example.component}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </StoryContainer>
  </Tab>
);

const description = `Tooltips provide additional information upon hover or focus.
They often contain helper text that is contextual to an element.`;

export default {
  title: 'Tooltip',
};

export const Basic = () => (
  <AutoExample
    description={description}
    component={Tooltip}
    componentProps={{
      children: 'Hover me',
      text: 'This is a hint.',
    }}
    additionalTabs={TabExample}
  />
);
