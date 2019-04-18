import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import {
  AutoPropsApi,
  Heading,
  SimpleHighlight,
  StoryContainer,
  Tab,
  TabbedView,
  Title,
} from '@catho/quantum-storybook-ui';

import Dropdown from '../../components/Dropdown';
import { Row, Col } from '../../components/Grid';
import List from '../../components/List';
import {
  Simple,
  CustomLabel,
  RequiredMark,
  WithError,
  Disabled,
  Controlled,
  AutoComplete,
} from './examples';

const DropdownExample = ({ component: Component }) => (
  <Row>
    <Col xsmall={2} small={4} medium={6}>
      <SimpleHighlight>{Component.CODE}</SimpleHighlight>
    </Col>
    <Col xsmall={2} small={4} medium={6}>
      <Component />
    </Col>
  </Row>
);

DropdownExample.propTypes = {
  component: PropTypes.func.isRequired,
};

const importCode = "import { Dropdown } from '@catho/quantum';";

storiesOf('Forms', module).add('Dropdown', () => (
  <>
    <Heading name="Dropdown">
      A dropdown receives user input, allowing it to choose one of several
      options.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing</Title>
          <SimpleHighlight>{importCode}</SimpleHighlight>
          <div>
            <p>
              Its options are described by {'"'}items{'"'} prop, which can be
              either array of string or objects, within the following structure:
            </p>
            <List>
              <List.Item>
                <strong>value</strong>: Computed to dropdown value itself, if
                the corresponding item is selected
              </List.Item>
              <List.Item>
                <strong>label</strong>: What is showed to the user in the
                dropdown interface
              </List.Item>
            </List>
            <p>
              If a list of strings is provided, they will be used both for items
              values and labels.
            </p>
          </div>
          <DropdownExample component={Simple} />
          <DropdownExample component={CustomLabel} />
          <DropdownExample component={AutoComplete} />
          <DropdownExample component={RequiredMark} />
          <DropdownExample component={WithError} />
          <DropdownExample component={Disabled} />
          <DropdownExample component={Controlled} />
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Dropdown} />
      </Tab>
    </TabbedView>
  </>
));
