import React from 'react';
import PropTypes from 'prop-types';
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
  AutoCompleteWithSpecialChars,
  WithImages,
} from './examples';

const DropdownExample = ({ component: Component, position }) => (
  <Row>
    <Col xsmall={2} small={4} medium={6} key={position}>
      <SimpleHighlight>{Component.CODE}</SimpleHighlight>
    </Col>
    <Col xsmall={2} small={4} medium={6} key={position + 1}>
      <Component />
    </Col>
  </Row>
);

DropdownExample.propTypes = {
  component: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
};

const importCode = "import { Dropdown } from '@catho/quantum';";

export default {
  title: 'Forms',
};

export const _Dropdown = () => (
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
              Its options are described by `items` prop, which can be either
              array of string or objects, within the following structure:
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
          <DropdownExample component={Simple} position="1" />
          <DropdownExample component={CustomLabel} position="2" />
          <DropdownExample component={AutoComplete} position="3" />
          <DropdownExample
            component={AutoCompleteWithSpecialChars}
            position="4"
          />
          <DropdownExample component={RequiredMark} position="5" />
          <DropdownExample component={WithError} position="6" />
          <DropdownExample component={Disabled} position="7" />
          <DropdownExample component={WithImages} position="8" />
          <DropdownExample component={Controlled} position="9" />
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Dropdown} />
      </Tab>
    </TabbedView>
  </>
);
