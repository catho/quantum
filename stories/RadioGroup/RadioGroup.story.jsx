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

const RadioDisabled = (
  <RadioGroup name="">
    <RadioGroup.Radio value="Fruit Juices" label="Fruit Juices" />
    <RadioGroup.Radio value="Vegatables" label="Vegatables" />
    <RadioGroup.Radio disabled value="Pizza" label="Pizza" />
    <RadioGroup.Radio disabled value="Burguer" label="Burguer" />
    <RadioGroup.Radio disabled value="Fries" label="Fries" />
    <RadioGroup.Radio value="Salad" label="Salad" />
  </RadioGroup>
);

const RadioBlockSelected = (
  <RadioGroup name="groceries" selected="Pikachu">
    <RadioGroup.Radio value="Pikachu" label="Pikachu" />
    <RadioGroup.Radio value="Charizard" label="Charizard" />
    <RadioGroup.Radio value="Squirtle" label="Squirtle" />
    <RadioGroup.Radio value="Pidgeotto" label="Pidgeotto" />
    <RadioGroup.Radio value="Butterfree" label="Butterfree" />
    <RadioGroup.Radio value="Muk" label="Muk" />
  </RadioGroup>
);

const stories = storiesOf('3. Forms', module);
stories.add('Radio Button', () => (
  <Heading name="Radio" title="<RadioGroup />">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="RadioGroup" componentName="RadioGroup" />

        <StyledDiv>
          <p>
            We provide two components to use Radio Buttons:{' '}
            <code>{'<RadioGroup />'}</code> and{' '}
            <code>{'<RadioGroup.Radio />'}</code>
          </p>

          <p>
            Note that you can navigate between radios by using the arrows keys,
            space and return.
          </p>
        </StyledDiv>

        <h4>RadioGroup</h4>
        <Row>
          <Col small={3}>
            <CodeExample component={RadioBlock} showTitle={false} />
          </Col>

          <Col small={3}>
            <RadioGroupWrapper>{RadioBlock}</RadioGroupWrapper>
          </Col>
        </Row>

        <h4>RadioGroup with disabled options</h4>
        <Row>
          <Col small={3}>
            <CodeExample component={RadioDisabled} showTitle={false} />
          </Col>

          <Col small={3}>
            <RadioGroupWrapper>{RadioDisabled}</RadioGroupWrapper>
          </Col>
        </Row>
        <h4>RadioGroup with selected option</h4>
        <Row>
          <Col small={3}>
            <CodeExample component={RadioBlockSelected} showTitle={false} />
          </Col>

          <Col small={3}>
            <RadioGroupWrapper>{RadioBlockSelected}</RadioGroupWrapper>
          </Col>
        </Row>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={RadioGroup} title="RadioGroup" />
        <AutoPropsApi component={RadioGroup.Radio} title="RadioGroup.Radio" />
      </Tab>
    </TabbedView>
  </Heading>
));
