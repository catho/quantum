import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {
  Heading,
  HowToImport,
  TabbedView,
  Tab,
  CodeExample,
  Title,
} from '../../.storybook/components';
import Catalogue from './Catalogue';

const IconWrapper = styled.div`
  padding: 10px;
  display: inline-block;
`;

const exampleIcons = [
  <Icon name="insert_emoticon" />,
  <Icon name="thumb_up" />,
  <Icon name="info" />,
  <Icon name="motorcycle" />,
  <Icon name="directions_car" />,
  <Icon name="airplanemode_active" />,
  <Icon name="access_alarm" />,
  <Icon name="audiotrack" />,
  <Icon name="attach_money" />,
  <Icon name="autorenew" />,
  <Icon name="check_circle" />,
  <Icon name="clear" />,
  <Icon name="directions_bike" />,
  <Icon name="event" />,
];

const exampleCode = exampleIcons.map(icon => (
  `<Icon name="${icon.props.name}" />\n`
));

storiesOf('1. Foundation', module)
  .add('Icons', () => (
    <React.Fragment>
      <Heading name="Icon" />
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Icon" />
          <small>
            We are using <a href="https://material.io/tools/icons/?style=baseline" target="_blank" rel="noopener noreferrer">Material Design icons</a> as default icon library.
          </small>
          <Title>Usage</Title>
          <small>
            {
              exampleIcons.map(icon => (
                <IconWrapper key={icon.props.name}>{icon}</IconWrapper>
              ))
            }
          </small>
          <CodeExample showTitle={false} code={exampleCode} />
        </Tab>
        <Tab title="Catalogue">
          <Catalogue />
        </Tab>
      </TabbedView>
    </React.Fragment>
  ));
