import React from 'react';
import {
  Heading,
  Tab,
  SimpleHighlight,
  Title,
  StoryContainer,
  AutoPropsApi,
  TabbedView,
} from '@catho/quantum-storybook-ui';
import Link from '../../components/Link';
import { DefaultDiv, DarkDiv } from './style';

const description =
  'The component Link make it easy to quickly style a anchor tag';

export default {
  title: 'Link',
};

const defaultCode = `<Link href="_blank" rel="noreferrer">Teste</Link>`;
const darkCode = `<Link skin="dark" href="_blank" rel="noreferrer">Teste</Link>`;

export const LinkStory = () => (
  <>
    <Heading name="Link">{description}</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing</Title>
          <SimpleHighlight>{`import { Link } from '@catho/quantum';`}</SimpleHighlight>
          <SimpleHighlight>or</SimpleHighlight>
          <SimpleHighlight>
            import Link from &apos;@catho/quantum/Link&apos;;
          </SimpleHighlight>
          <span>
            *The second option is recommended in case you want to reduce the
            size of the package{' '}
          </span>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <StoryContainer>
          <AutoPropsApi component={Link} ignoredProps={['theme']} />
        </StoryContainer>
      </Tab>
      <Tab title="Example">
        <StoryContainer>
          <Title as="h2">Default</Title>
          <DefaultDiv>
            <Link href="link" rel="noreferrer">
              Example Link
            </Link>
          </DefaultDiv>
          <SimpleHighlight>{defaultCode}</SimpleHighlight>
        </StoryContainer>
        <StoryContainer>
          <Title as="h2">Dark</Title>
          <DarkDiv>
            <Link skin="dark" href="#link" rel="noreferrer">
              Example Link
            </Link>
          </DarkDiv>
          <SimpleHighlight>{darkCode}</SimpleHighlight>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
