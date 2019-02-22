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

const options = [
  { value: 'Tomato sauce', label: 'Tomato sauce' },
  { value: 'Mustard', label: 'Mustard' },
  { value: 'Barbecue sauce', label: 'Barbecue sauce' },
];

const RadioBlock = <RadioGroup name="groceries" options={options} />;

const RadioError = (
  <RadioGroup name="groceries" error="Esta opção é obrigatória">
    <RadioGroup.Radio value="Red" label="Red" />
    <RadioGroup.Radio value="Green" label="Green" />
    <RadioGroup.Radio value="Blue" label="Blue" />
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

        <Row>
          <Col small={6}>
            <h4>Default</h4>
            <Row>
              <Col small={6}>
                <CodeExample component={RadioBlock} showTitle={false} />
              </Col>

              <Col small={6}>
                <RadioGroupWrapper>{RadioBlock}</RadioGroupWrapper>
              </Col>
            </Row>
          </Col>

          <Col small={6}>
            <h4>Error</h4>
            <Row>
              <Col small={6}>
                <CodeExample component={RadioError} showTitle={false} />
              </Col>

              <Col small={6}>
                <RadioGroupWrapper>{RadioError}</RadioGroupWrapper>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <h4>Disabled</h4>
            <Row>
              <Col small={6}>
                <CodeExample component={RadioDisabled} showTitle={false} />
              </Col>

              <Col small={6}>
                <RadioGroupWrapper>{RadioDisabled}</RadioGroupWrapper>
              </Col>
            </Row>
          </Col>

          <Col small={6}>
            <h4>Selected</h4>
            <Row>
              <Col small={6}>
                <CodeExample component={RadioBlockSelected} showTitle={false} />
              </Col>

              <Col small={6}>
                <RadioGroupWrapper>{RadioBlockSelected}</RadioGroupWrapper>
              </Col>
            </Row>
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
