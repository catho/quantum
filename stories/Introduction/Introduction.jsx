import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import {
  Title,
  CodeToClipboard,
  TabbedView,
  Tab,
} from '../../.storybook/components';

import Image from '../../components/Image';

const registry = 'registry="http://armazem.devel:4873/"';
const yarnAdd = 'yarn add @cathodevel/style-guide';
const importHeader = `import Header from '@cathodevel/style-guide';
export default () => <Header />;`;

const HighlightWrapper = styled.div`
  position: relative;
`;

const registryCmd = 'sudo npm set registry http://armazem.devel:4873';
const installCmd = 'sudo npm i -g @cathodevel/create-catho-app';

const Terminal = styled.div`
  background-color: #092c36;
  padding: 10px;
  display: inline-block;
  margin-bottom: 20px;
`;

const gifUrls = {
  app: 'http://gitlab.devel/frontend-platform/create-catho-app/raw/cf0a27af453efcfa084d21936d6cee461e964c20/examples/application-react.gif',
  component: 'http://gitlab.devel/frontend-platform/create-catho-app/raw/cf0a27af453efcfa084d21936d6cee461e964c20/examples/component-stateful.gif',
};

const Introduction = () => (
  <React.Fragment>
    <p>The official <strong>Catho</strong> style-guide</p>

    <Title style={{ marginTop: '40px' }}>Starting from scratch</Title>

    <p>
      In order to easily creating new apps or components,
      we present our <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer">CLI</a>.
    </p>

    <h3>How to install</h3>

    <p>First, set your registry properly with our local package registry:</p>
    <HighlightWrapper>
      <Highlight language="bash" className="highlight">
        {registryCmd}
      </Highlight>

      <CodeToClipboard code={registryCmd} />
    </HighlightWrapper>

    <p>Then, install it globally:</p>
    <HighlightWrapper>
      <Highlight language="bash" className="highlight">
        {installCmd}
      </Highlight>

      <CodeToClipboard code={installCmd} />
    </HighlightWrapper>

    <TabbedView>
      <Tab title="Application">
        <Terminal>
          <Image src={gifUrls.app} alt="Creating a react application with few commands" />
        </Terminal>
      </Tab>
      <Tab title="Component">
        <Terminal>
          <Image src={gifUrls.component} alt="Creating a react component with few commands" />
        </Terminal>
      </Tab>
    </TabbedView>

    <Title>Using with an existing project</Title>

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
