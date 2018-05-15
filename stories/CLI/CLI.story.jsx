import React from 'react';
import { storiesOf } from '@storybook/react';
import Highlight from 'react-highlight';
import styled from 'styled-components';
import {
  Heading,
  Title,
  CodeToClipboard,
  TabbedView,
  Tab,
} from '../../.storybook/components';
import Formula from '../static/formula.svg';

const registryCmd = 'npm set registry http://armazem.devel:4873';
const installCmd = 'sudo npm i -g create-catho-app';

const HighlightWrapper = styled.div`
  position: relative;
`;

const Terminal = styled.div`
  background-color: #000;
  padding: 10px;
  display: inline-block;
`;

const gifUrls = {
  app: 'http://gitlab.devel/frontend-platform/create-catho-app/raw/48e095202aeddf47099b9e64d78e58b77320b090/examples/application-react.gif',
  component: 'http://gitlab.devel/frontend-platform/create-catho-app/raw/48e095202aeddf47099b9e64d78e58b77320b090/examples/component-stateful.gif',
}

storiesOf('1. Foundation', module)
  .add('CLI', () => (
    <React.Fragment>
      <Heading image={Formula} title="Create Catho App" />

      <p>
        In order to easily creating new apps or components,
        we present our <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer">CLI</a>.
      </p>

      <Title>How to install</Title>

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

      <Title>Usage</Title>
      <TabbedView>
        <Tab title="Application">
          <Terminal>
            <img src={gifUrls.app} alt="Creating a react application with few commands" />
          </Terminal>
        </Tab>
        <Tab title="Component">
          <Terminal>
            <img src={gifUrls.component} alt="Creating a react component with few commands" />
          </Terminal>
        </Tab>
      </TabbedView>
    </React.Fragment>
  ));
