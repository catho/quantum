import LinkTo from '@storybook/addon-links/react';
import {
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

const glogalStyleImport = `import { GlobalStyle } from '@catho/quantum';`;
const glogalStyleCode = `...
ReactDOM
  .render(() => (
    <>
      <GlobalStyle />
      <App />
    </>
  ), document.getElementById('root'));
`;

const typographyAndIconImport = `import { Typography } from '@catho/quantum';`;
const codeBackgroundColor = '#e8f2fc';
const codefontColor = '#1a82e2';

const Typography = () => (
  <StoryContainer>
    <Title as="h2">Importing colors</Title>
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {glogalStyleImport}
    </SimpleHighlight>

    <p>Usually, it is used before the application component</p>

    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {glogalStyleCode}
    </SimpleHighlight>

    <p>
      The <code>{'<GlobalStyle />'}</code> will add and set automatically all
      the base configuration for font and{' '}
      <LinkTo kind="1. Foundation" story="Icons">
        Icons
      </LinkTo>
      .
    </p>

    <p>
      If you want to include one of those separately, you can import each one as
      you like to:
    </p>
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {typographyAndIconImport}
    </SimpleHighlight>
  </StoryContainer>
);

export default Typography;
