import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../CodeToClipboard';
import '../../static/quantum-highlight.css';
import Title from '../Title';

const HighlightWrapper = styled.div`
  position: relative;
`;

const HowToImport = ({ importModules, from }) => {
  const msg = `import ${
    importModules ? `{ ${importModules} } from ` : ''
  }'${from}';`;

  return (
    <React.Fragment>
      <Title>Import</Title>

      <HighlightWrapper>
        <Highlight language="javascript" className="highlight">
          {msg}
        </Highlight>

        <CodeToClipboard code={msg} />
      </HighlightWrapper>
    </React.Fragment>
  );
};

HowToImport.defaultProps = {
  importModules: null,
  from: '@cathodevel/quantum',
};

HowToImport.propTypes = {
  importModules: PropTypes.string,
  from: PropTypes.string,
};

export default HowToImport;
