import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { INPUT_STYLE } from '../shared';

const { default: DEFAULT_INPUT_STYLE } = INPUT_STYLE;

const StyledTextArea = styled.textarea`
  ${DEFAULT_INPUT_STYLE};
`;

const TextArea = ({ label, ...rest }) => (
  <>
    <StyledTextArea {...rest} />
  </>
);

TextArea.defaultProps = {
  label: 'Textarea label',
};

TextArea.propTypes = {
  label: PropTypes.string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
