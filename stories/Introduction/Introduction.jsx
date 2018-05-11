import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import Title from '../../.storybook/components/Title';
import CodeToClipboard from '../../.storybook/components/CodeToClipboard';

const registry = 'registry="http://armazem.devel:4873/"';
const yarnAdd = 'yarn add @cathodevel/style-guide';
const importHeader = `import Header from '@cathodevel/style-guide';
export default () => <Header />;`;

const HighlightWrapper = styled.div`
  position:relative;
`;

const Introduction = () => (
  <React.Fragment>
    <p>The official <strong>Catho</strong> style-guide</p>
    <Title>Usage</Title>

    <p>Create a <code>.npmrc</code> file, with the following content:</p>
    <HighlightWrapper>
      <Highlight language="javascript" className="highlight">
        { registry }
      </Highlight>

      <CodeToClipboard code={registry} />
    </HighlightWrapper>

    <p>Add as a dependency:</p>
    <HighlightWrapper>
      <Highlight language="javascript" className="highlight">
        { yarnAdd }
      </Highlight>

      <CodeToClipboard code={yarnAdd} />
    </HighlightWrapper>

    <p>Use in your react project:</p>
    <HighlightWrapper>
      <Highlight language="javascript" className="highlight">
        {importHeader}
      </Highlight>
      
      <CodeToClipboard code={importHeader} />
    </HighlightWrapper>
  </React.Fragment>
);

export default Introduction;
