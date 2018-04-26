import React from 'react';
import Highlight from 'react-highlight';
import Title from '../../.storybook/components/Title';

const Introduction = () => (
  <React.Fragment>
    <p>The official <strong>Catho</strong> style-guide</p>
    <Title>Usage</Title>

    <p>Create a <code>.npmrc</code> file, with the following content:</p>
    <Highlight language="javascript" className="highlight">
      {'registry="http://armazem.devel:4873/'}
    </Highlight>

    <p>Add as a dependency:</p>
    <Highlight language="javascript" className="highlight">
      yarn add @cathodevel/style-guide
    </Highlight>

    <p>Use in your react project:</p>
    <Highlight language="javascript" className="highlight">
      {`import Header from '@cathodevel/style-guide';
export default () => <Header />;`}
    </Highlight>
  </React.Fragment>
);

export default Introduction;
