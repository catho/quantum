import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import HowToImport from '../../.storybook/components/HowToImport';
import { Radio, RadioGroup } from '../../components/Radio';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import { Col, Row } from '../../components/Grid';
import CodeExample from '../../.storybook/components/CodeExample';
import Atom from '../static/atom.svg';

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
    <Radio id="radioInline" value="radio" name="radioInline" label="Click me!" />
    <Radio id="radioTwoInline" value="radioTwo" name="radioInline" label="Click me!" />
  </RadioGroup>
);

const stories = storiesOf('3. Forms', module);
stories
  .add('Radio Button', () => (
    <Heading image={Atom} title="<RadioGroup />">
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="RadioGroup, Radio" />

          <StyledDiv>
            <p>We provide two components to use Radio Buttons.</p>
            <p><code>{'<RadioGroup>'}</code> and <code>{'<Radio>'}</code> must be used together and can be displayed inlined or blocked</p>
          </StyledDiv>

          <h4>RadioGroup with block display</h4>
          <Row>
            <Col phone={6}>
              <CodeExample
                component={RadioBlock}
                showTitle={false}
              />
            </Col>

            <Col phone={6}>
              <RadioGroupWrapper>
                {RadioBlock}
              </RadioGroupWrapper>
            </Col>
          </Row>

          <h4>RadioGroup with inline display</h4>
          <Row>
            <Col phone={6}>
              <CodeExample
                component={RadioInline}
                showTitle={false}
              />
            </Col>

            <Col phone={6}>
              <RadioGroupWrapper>
                {RadioInline}
              </RadioGroupWrapper>
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
