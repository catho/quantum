import React from 'react';
import PropTypes from 'prop-types';
import {
  AutoPropsApi,
  CodeExample,
  ComponentPanel,
  Heading,
  StoryContainer,
  Tab,
  TabbedView,
  Title,
} from '@catho/quantum-storybook-ui';
import { Checkbox, CheckboxGroup, Col, Row } from '../../components';
import { groupExamples, buttonExamples } from './sub-components';

const CheckboxGroupExample = ({ code, component }) => (
  <>
    <Row>
      <Col small={7}>
        <CodeExample component={{}} code={code} showTitle={false} />
      </Col>
      <Col small={5}>
        <br />
        {component}
      </Col>
    </Row>
  </>
);

CheckboxGroupExample.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};

export default {
  title: 'Forms',
};

export const _Checkbox = () => (
  <>
    <Heading name="Checkbox">
      Checkboxes are used when there is a list of options and the user may
      select multiple options, including all or none.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <ComponentPanel
          component={<Checkbox name="required-name" />}
          importModules="Checkbox"
        />
      </Tab>

      <Tab title="Checkbox group">
        <StoryContainer>
          <Title as="h2">Checkbox Group</Title>
          <p>
            <code>CheckboxGroup</code> component has the ability to manage, get
            values via a single <code>onChange</code> callback prop and apply a
            single error message to a group of checkboxes. Also, it offers an
            alternative way to instantiate checkbox items, with{' '}
            <code>options</code> prop:
          </p>

          <CheckboxGroupExample {...groupExamples.simple} />

          <p>With a shared error message:</p>

          <CheckboxGroupExample {...groupExamples.withError} />

          <p>
            A controlled group triggers its changes via <code>onChange</code>{' '}
            callback prop, wich is called with the current changed checkbox
            event and a list of checkboxes values.
          </p>

          <CheckboxGroupExample {...groupExamples.controlled} />
        </StoryContainer>
      </Tab>

      <Tab title="Button Group">{buttonExamples}</Tab>

      <Tab title="API">
        <AutoPropsApi title="CheckboxGroup" component={CheckboxGroup} />
        <AutoPropsApi
          title="Checkbox / CheckboxGroup.Checkbox"
          component={Checkbox}
        />
        <AutoPropsApi
          title="CheckboxGroup.Button"
          component={CheckboxGroup.Button}
        />
      </Tab>
    </TabbedView>
  </>
);
