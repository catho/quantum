import React from 'react';
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
  <Icon name="info" size="small" />,
  <Icon name="info" />,
  <Icon name="info" size="large" />,
  <Icon name="clear" />,
  <Icon name="search" />,
  <Icon name="error" />,
  <Icon name="visibility_off" />,
  <Icon name="visibility" />,
  <Icon name="check_box" />,
  <Icon name="emoji_people" skin={colors.primary['900']} />,
  <Icon name="emoji_people" skin={colors.secondary['900']} />,
  <Icon name="emoji_people" skin={colors.primary['700']} />,
  <Icon name="emoji_people" skin={colors.warning['900']} />,
  <Icon name="emoji_people" skin={colors.error['300']} />,
  <Icon name="emoji_people" skin={colors.error['300']} size="large" />,
];

const exampleCode = `  
  <Icon name="info" size="small" />,
  <Icon name="info" />,
  <Icon name="info" size="large" />,
  <Icon name="clear" />
  <Icon name="search" />
  <Icon name="error" />
  <Icon name="visibility_off" />
  <Icon name="visibility" />
  <Icon name="check_box" />
  <Icon name="emoji_people" skin={colors.primary['900']} />
  <Icon name="emoji_people" skin={colors.secondary['900']} />
  <Icon name="emoji_people" skin={colors.primary['700']} />
  <Icon name="emoji_people" skin={colors.warning['900']} />
  <Icon name="emoji_people" skin={colors.error['300']} />
  <Icon name="emoji_people" skin={colors.error['300']} size="large" />,
`;

const exampleIncorrectIcons = [
  <Icon name="bike" />,
  <Icon name="emoji_smile" skin={colors.primary['900']} />,
];

const exampleIncorrectCode = `  <Icon name="bike" />
  <Icon name="emoji_smile" skin={colors.primary['900']} />
`;

const importIcon = `import { Icon } from '@catho/quantum';`;

export default {
  title: 'Foundation',
};

export const Icons = () => (
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
            {exampleIcons.map((icon, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <IconWrapper key={`${icon.props.name}_${index}`}>
                {icon}
              </IconWrapper>
            ))}
          </small>

          <CodeExample code={exampleCode} />

          <Title as="h2">Unavailable Icons</Title>

          <p>
            If the string passed in the `Icon` is unavailable in the style guide
            catalog, it is going to display only the string wrapped in a `span`
            element and no icon will render.
          </p>
          <small>
            {exampleIncorrectIcons.map((icon, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <IconWrapper key={`${icon.props.name}_${index}`}>
                {icon}
              </IconWrapper>
            ))}
          </small>

          <CodeExample code={exampleIncorrectCode} />
        </StoryContainer>
      </Tab>

      <Tab title="Catalogue">
        <StoryContainer>
          <Catalogue />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </React.Fragment>
);
