import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../CodeToClipboard';
import '../../../stories/static/styleguide-highlight.css';

const HowToImport = ({importModules}) => {
  const msg = `import ${'{'} ${ importModules } ${'}'} from '@cathodevel/style-guide';`.toString();

  return (
  <React.Fragment>
    <h2>Import</h2>

    <HighlightWrapper>
      <Highlight language="javascript" className="highlight">
        {msg}
      </Highlight>
      
      <CodeToClipboard code={msg} />
    </HighlightWrapper>
  </React.Fragment>
  )
};

const HighlightWrapper = styled.div`
  position:relative;
`

export default HowToImport;
