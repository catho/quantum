import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../CodeToClipboard';
import '../../../stories/static/styleguide-highlight.css';
import Title from '../Title';

const HighlightWrapper = styled.div`
  position: relative;
`;

const HowToImport = ({ importModules }) => {
  const msg = `import ${'{'} ${importModules} ${'}'} from '@cathodevel/style-guide';`;

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

HowToImport.propTypes = {
  importModules: PropTypes.string.isRequired,
};

export default HowToImport;
