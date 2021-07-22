import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  AutoPropsApi,
  CodeExample,
  TabbedView,
  Tab,
  StoryContainer,
  Title,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import RadioGroup from '../../components/RadioGroup';
import { Col, Row } from '../../components/Grid';

import * as samples from './sub-components';

const RadioGroupExample = ({ code, component }) => (
  <>
    <Col small={5}>
      <CodeExample component={{}} code={code} showTitle={false} />
    </Col>
    <Col small={7}>
      <br />
      {component}
    </Col>
  </>
);

RadioGroupExample.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};

const importRadioGroup = `import { RadioGroup } from '@catho/quantum';`;

export default {
  title: 'Forms',
};

export const RadioGroupStory = () => (
  <>
    <Heading title="RadioGroup">
      Radio group is a list of radio buttons that are used when a list of two or
      more options are mutually exclusive, meaning the user must select only one
      option.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing</Title>
          <SimpleHighlight>{importRadioGroup}</SimpleHighlight>

          <p>
            We provide two components to use Radio Buttons:{' '}
            <code>{'<RadioGroup />'}</code> and{' '}
            <code>{'<RadioGroup.Radio />'}</code>
          </p>

          <p>
            With a very simple API, you can set a radio group using just a
            array, such as <code>RadioGroup.Radio</code>:
          </p>
          <br />

          <Row>
            <RadioGroupExample {...samples.simpleRadioGroup} />
          </Row>
          <br />
          <p>... and can use with children </p>
          <br />

          <Row>
            <RadioGroupExample {...samples.childrenRadio} />
          </Row>
          <br />

          <p>
            Also, you can set some properties to <code>RadioGroup</code>, such
            as the selected <code>defaultValue</code>, <code>error</code> and{' '}
            <code>onChange</code> function
          </p>
          <br />

          <Row>
            <RadioGroupExample {...samples.propsRadioGroup} />
          </Row>
          <br />

          <p>
            For <code>RadioGroup.Radio</code>, and option shape as well, you can
            add the <code>disable</code> property too:
          </p>

          <br />
          <Row>
            <RadioGroupExample {...samples.disabledRadio} />
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="Button Group">
        <StoryContainer>
          <Title as="h2">Button Group Skin</Title>
          <p>
            It&apos;s possible to render radio elements as buttons, using{' '}
            <code>{'<RadioGroup.Button />'}</code> component or{' '}
            <code>type=&quot;button&quot;</code> prop.
          </p>
          <br />

          <Row>
            <RadioGroupExample {...samples.buttonGroup} />
          </Row>
          <br />

          <p>
            It&apos;s also possible to render it inline, with{' '}
            <code>inline</code> prop.
          </p>
          <br />

          <Row>
            <RadioGroupExample {...samples.buttonGroupInline} />
          </Row>
          <br />

          <p>With an error message.</p>
          <br />

          <Row>
            <RadioGroupExample {...samples.buttonGroupError} />
          </Row>
          <br />

          <p>Disabled options.</p>
          <br />

          <Row>
            <RadioGroupExample {...samples.buttonGroupDisabled} />
          </Row>

          <br />

          <p>With size selected.</p>
          <br />

          <Row>
            <RadioGroupExample {...samples.buttonGroupSizes} />
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={RadioGroup} title="RadioGroup" />
        <AutoPropsApi component={RadioGroup.Radio} title="RadioGroup.Radio" />
        <AutoPropsApi component={RadioGroup.Button} title="RadioGroup.Button" />
      </Tab>
    </TabbedView>
  </>
);
