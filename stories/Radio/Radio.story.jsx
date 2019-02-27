import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Heading,
  AutoPropsApi,
  HowToImport,
  CodeExample,
  TabbedView,
  Tab,
} from '@catho-private/quantum-storybook-ui';

import { Radio, RadioGroup } from '../../components/Radio';
import { Col, Row } from '../../components/Grid';

const RadioGroupWrapper = styled.div`
  padding: 15px;
`;

const StyledDiv = styled.div`
  margin-bottom: 40px;
`;

const RadioBlock = (
  <RadioGroup>
    <Radio id="radio" value="radio" name="radio" label="Click me!" />
    <Radio id="radioTwo" value="radioTwo" name="radio" label="Click me!" />
  </RadioGroup>
);

const RadioInline = (
  <RadioGroup inline>
    <Radio
      id="radioInline"
      value="radio"
      name="radioInline"
      label="Click me!"
    />
    <Radio
      id="radioTwoInline"
      value="radioTwo"
      name="radioInline"
      label="Click me!"
    />
  </RadioGroup>
);

const BoxedRadio = (
  <RadioGroup boxed inline>
    <Radio id="radioBoxed" value="radio" name="radioInline" label="Yes" />
    <Radio id="radioTwoBoxed" value="radioTwo" name="radioInline" label="No" />
  </RadioGroup>
);

const stories = storiesOf('Forms', module);
stories.add('Radio Button', () => (
  <Heading name="Radio" title="<RadioGroup />">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport
          importModules="RadioGroup, Radio"
          componentName="RadioGroup"
        />

        <StyledDiv>
          <p>We provide two components to use Radio Buttons.</p>
          <p>
            <code>{'<RadioGroup>'}</code> and <code>{'<Radio>'}</code> must be
            used together and can be displayed inlined or blocked
          </p>
        </StyledDiv>

        <h4>RadioGroup with block display</h4>
        <Row>
          <Col phone={6}>
            <CodeExample component={RadioBlock} showTitle={false} />
          </Col>

          <Col phone={6}>
            <RadioGroupWrapper>{RadioBlock}</RadioGroupWrapper>
          </Col>
        </Row>

        <h4>RadioGroup with inline display</h4>
        <Row>
          <Col phone={6}>
            <CodeExample component={RadioInline} showTitle={false} />
          </Col>

          <Col phone={6}>
            <RadioGroupWrapper>{RadioInline}</RadioGroupWrapper>
          </Col>
        </Row>

        <h4>Boxed RadioGroup</h4>
        <Row>
          <Col phone={6}>
            <CodeExample component={BoxedRadio} showTitle={false} />
          </Col>

          <Col phone={6}>
            <RadioGroupWrapper>{BoxedRadio}</RadioGroupWrapper>
          </Col>
        </Row>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Radio} title="Radio" />
        <AutoPropsApi component={RadioGroup} title="RadioGroup" />
      </Tab>
    </TabbedView>
  </Heading>
));
