import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
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

import * as samples from './sub-components';

const RadioGroupExample = ({ code, component }) => (
  <>
    <Col small={5}>
      <CodeExample component={{}} code={code} showTitle={false} />
    </Col>
    <Col small={7}>{component}</Col>
  </>
);

RadioGroupExample.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};

const stories = storiesOf('3. Forms', module);
stories.add('Radio Button', () => (
  <Heading name="Radio" title="<RadioGroup />">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="RadioGroup" componentName="RadioGroup" />

        <p>
          We provide two components to use Radio Buttons:{' '}
          <code>{'<RadioGroup />'}</code> and{' '}
          <code>{'<RadioGroup.Radio />'}</code>
        </p>

        <p>
          With a very simple API, you can set an radio group using just a array,
          such as <code>RadioGroup.Radio</code>:
        </p>
        <br />

        <Row>
          <RadioGroupExample {...samples.simpleRadioGroup} />
        </Row>
        <br />

        <p>
          Also, you can set some properties to <code>RadioGroup</code>, such as
          the selected <code>value</code>, <code>error</code> and{' '}
          <code>onChange</code> function
        </p>
        <br />

        <Row>
          <RadioGroupExample {...samples.propsRadioGroup} />
        </Row>
        <br />

        <p>
          For <code>RadioGroup.Radio</code>, and option shape as well, you can
          add the <code>disable</code> property too
        </p>

        <br />
        <Row>
          <RadioGroupExample {...samples.disabledRadio} />
        </Row>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={RadioGroup} title="RadioGroup" />
        <AutoPropsApi component={RadioGroup.Radio} title="RadioGroup.Radio" />
      </Tab>
    </TabbedView>
  </Heading>
));
