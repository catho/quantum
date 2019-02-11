import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import LinkTo from '@storybook/addon-links/react';
import { CodeToClipboard } from '@catho-private/quantum-storybook-ui';

const Font = styled.div`
  * {
    font-family: Montserrat, sans-serif !important;
  }
`;

const HighlightWrapper = styled.div`
  position: relative;
`;

const glogalStyleImport = `import { GlobalStyle } from '@catho-private/quantum';`;

const glogalStyleCode = `...
ReactDOM
  .render(() => (
    <>
      <GlobalStyle />
      <App />
    </>
  ), document.getElementById('root'));
`;

const typographyAndIconImport = `import { Typography, IconFont } from '@catho-private/quantum';`;

const Typography = () => (
  <Font>
    <p>
      <strong>Nunito Sans</strong> is the standard typeface for Catho on the web
    </p>

    <p>
      In order to use the default Catho Typography, just import the GlobalStyle
      component:
    </p>

    <HighlightWrapper>
      <Highlight language="bash" className="highlight">
        {glogalStyleImport}
      </Highlight>

      <CodeToClipboard code={glogalStyleImport} />
    </HighlightWrapper>

    <p>Usually, it is used before the application component</p>
    <HighlightWrapper>
      <Highlight language="bash" className="highlight">
        {glogalStyleCode}
      </Highlight>

      <CodeToClipboard code={glogalStyleCode} />
    </HighlightWrapper>

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
    <HighlightWrapper>
      <Highlight language="bash" className="highlight">
        {typographyAndIconImport}
      </Highlight>

      <CodeToClipboard code={typographyAndIconImport} />
    </HighlightWrapper>
  </Font>
);

export default Typography;
