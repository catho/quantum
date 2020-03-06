import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import styled from 'styled-components';
import {
  Heading,
  TabbedView,
  Tab,
  CodeExample,
  Title,
  SimpleHighlight,
  StoryContainer,
} from '@catho/quantum-storybook-ui';

import Icon from '../../components/Icon';
import { colors } from '../../components/shared/theme';
import Catalogue from './Catalogue';

const IconWrapper = styled.div`
  padding: 10px;
  display: inline-block;
`;

const exampleIcons = [
  <Icon name="info" />,
  <Icon name="clear" />,
  <Icon name="search" />,
  <Icon name="info" />,
  <Icon name="error" />,
  <Icon name="visibility_off" />,
  <Icon name="visibility" />,
  <Icon name="check_box" />,
  <Icon name="emoji_people" skin={colors.primary['900']} />,
  <Icon name="emoji_people" skin={colors.secondary['900']} />,
  <Icon name="emoji_people" skin={colors.primary['700']} />,
  <Icon name="emoji_people" skin={colors.warning['900']} />,
  <Icon name="emoji_people" skin={colors.error['300']} />,
];

const exampleCode = `  <Icon name="info" />
  <Icon name="clear" />
  <Icon name="search" />
  <Icon name="info" />
  <Icon name="error" />
  <Icon name="visibility_off" />
  <Icon name="visibility" />
  <Icon name="check_box" />
  <Icon name="emoji_people" skin={colors.primary['900']} />
  <Icon name="emoji_people" skin={colors.secondary['900']} />
  <Icon name="emoji_people" skin={colors.primary['700']} />
  <Icon name="emoji_people" skin={colors.warning['900']} />
  <Icon name="emoji_people" skin={colors.error['300']} />
];
`;

const importIcon = `import { Icon } from '@catho/quantum';`;

storiesOf('Foundation', module).add('Icons', () => (
  <React.Fragment>
    <Heading name="Icons">
      Quantum use Material icons, beautifully crafted symbols for common actions
      and items. Download on desktop to use them in your digital products for
      Android, iOS, and web.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Icon</Title>
          <SimpleHighlight>{importIcon}</SimpleHighlight>

          <Title as="h2">Usage</Title>
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

          <CodeExample code={exampleCode} />
        </StoryContainer>
      </Tab>

      <Tab title="Catalogue">
        <StoryContainer>
          <Catalogue />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </React.Fragment>
));
