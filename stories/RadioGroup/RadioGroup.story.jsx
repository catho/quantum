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

import RadioGroup from '../../components/RadioGroup';
import { Col, Row } from '../../components/Grid';

const RadioGroupWrapper = styled.div`
  padding: 15px;
`;

const StyledDiv = styled.div`
  margin-bottom: 40px;
`;

const RadioBlock = (
  <RadioGroup name="groceries">
    <RadioGroup.Radio value="Tomato sauce" label="Tomato sauce" />
    <RadioGroup.Radio value="Mustard" label="Mustard" />
    <RadioGroup.Radio value="Barbecue sauce" label="Barbecue sauce" />
  </RadioGroup>
);

const RadioInline = (
  <RadioGroup inline>
    <RadioGroup.Radio
      id="radioInline"
      value="radio"
      name="radioInline"
      label="Click me!"
    />
    <RadioGroup.Radio
      id="radioTwoInline"
      value="radioTwo"
      name="radioInline"
      label="Click me!"
    />
  </RadioGroup>
);

const BoxedRadio = (
  <RadioGroup boxed inline>
    <RadioGroup.Radio
      id="radioBoxed"
      value="radio"
      name="radioInline"
      label="Yes"
    />
    <RadioGroup.Radio
      id="radioTwoBoxed"
      value="radioTwo"
      name="radioInline"
      label="No"
    />
  </RadioGroup>
);

const stories = storiesOf('3. Forms', module);
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
        <AutoPropsApi component={RadioGroup} title="RadioGroup" />
      </Tab>
    </TabbedView>
  </Heading>
));
