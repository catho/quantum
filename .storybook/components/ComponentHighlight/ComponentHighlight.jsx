import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../../components/Colors';

const Name = styled.span`
  color: red;
`;

// const nameRegex = /(<\/?)(.*?)(\s?\/?>?)$/gm;
const nameRegex = /(&lt;\/?)(.*?)(\s?\/?(&gt;)?)$/gm;

const formatCode = (code) => {
  return code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(nameRegex, '$1<span style="color:red;">$2</span>$3');
};

const ComponentHighlight = ({ code }) => {
  const formatted = formatCode(code);

  return (
    <pre dangerouslySetInnerHTML={{
      __html: formatted,
    }} />
  );
};

ComponentHighlight.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ComponentHighlight;
