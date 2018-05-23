import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Icon from '../../components/Icon';
import {
  Heading,
  Atom,
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
  <Icon name="insert-emoticon" />,
  <Icon name="thumb-up" />,
  <Icon name="info" />,
  <Icon name="motorcycle" />,
  <Icon name="directions-car" />,
  <Icon name="airplanemode-active" />,
  <Icon name="access-alarm" />,
  <Icon name="audiotrack" />,
  <Icon name="attach-money" />,
  <Icon name="autorenew" />,
  <Icon name="check-circle" />,
  <Icon name="clear" />,
  <Icon name="directions-bike" />,
  <Icon name="event" />,
];

const exampĺeCode = exampleIcons.map(icon => (
  `<Icon name="${icon.props.name}" />\n`
));

storiesOf('1. Foundation', module)
  .add('Icons', () => (
    <React.Fragment>
      <Heading image={Atom} name="Icon" />
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Icon" />
          <p>
            We are using <a href="https://material.io/tools/icons/?style=baseline" target="_blank" rel="noopener noreferrer">Material Design icons</a> as default icon library.
          </p>
          <Title>Usage</Title>
          <p>
            {
              exampleIcons.map(icon => (
                <IconWrapper key={icon.props.name}>{icon}</IconWrapper>
              ))
            }
          </p>
          <CodeExample showTitle={false} code={exampĺeCode} />
        </Tab>
        <Tab title="Catalogue">
          <Catalogue />
        </Tab>
      </TabbedView>
    </React.Fragment>
  ));
