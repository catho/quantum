import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import styled from 'styled-components';
import {
  Heading,
  HowToImport,
  TabbedView,
  Tab,
  CodeExample,
  Title,
} from '@catho/quantum-storybook-ui';

import Icon from '../../components/Icon';
import Colors from '../../components/Colors';
import Catalogue from './Catalogue';

const IconWrapper = styled.div`
  padding: 10px;
  display: inline-block;
`;

const exampleIcons = [
  <Icon name="thumb_up" />,
  <Icon name="info" />,
  <Icon name="motorcycle" />,
  <Icon name="directions_car" />,
  <Icon name="airplanemode_active" />,
  <Icon name="access_alarm" />,
  <Icon name="audiotrack" />,
  <Icon name="attach_money" />,
  <Icon name="autorenew" skin={Colors.ACTION['500']} />,
  <Icon name="check_circle" skin={Colors.SECONDARY['700']} />,
  <Icon name="clear" skin={Colors.INFO['400']} />,
  <Icon name="directions_bike" skin={Colors.WARNING['900']} />,
  <Icon name="event" skin={Colors.DANGER['300']} />,
];

const exampleCode = `<Icon name="thumb_up" />
<Icon name="info" />
<Icon name="motorcycle" />
<Icon name="directions_car" />
<Icon name="airplanemode_active" />
<Icon name="access_alarm" />
<Icon name="audiotrack" />
<Icon name="attach_money" />
<Icon name="autorenew" skin={Colors.ACTION['500']} />
<Icon name="check_circle" skin={Colors.SECONDARY['700']} />
<Icon name="clear" skin={Colors.INFO['400']} />
<Icon name="directions_bike" skin={Colors.WARNING['900']} />
<Icon name="event" skin={Colors.DANGER['300']} />
`;

storiesOf('1. Foundation', module).add('Icons', () => (
  <React.Fragment>
    <Heading name="Icon">
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Icon" />
          <Title>Usage</Title>
          <p>
            You need to import the{' '}
            <LinkTo kind="1. Foundation" story="Typography">
              typography
            </LinkTo>{' '}
            to include icon fonts.
          </p>
          <small>
            {exampleIcons.map(icon => (
              <IconWrapper key={icon.props.name}>{icon}</IconWrapper>
            ))}
          </small>
          <CodeExample showTitle={false} code={exampleCode} />
        </Tab>
        <Tab title="Catalogue">
          <Catalogue />
        </Tab>
      </TabbedView>
    </Heading>
  </React.Fragment>
));
