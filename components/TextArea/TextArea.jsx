import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { INPUT_STYLE, Label, FieldGroup, ErrorMessage } from '../shared';

const { default: DEFAULT_INPUT_STYLE } = INPUT_STYLE;

const StyledTextArea = styled.textarea`
  ${DEFAULT_INPUT_STYLE};
  min-height: 108px;
  margin-top: 8px;
`;

const TextAreaLabel = styled(Label)`
  margin-bottom: 0;
  padding: 8px 12px 0px;
  font-weight: bold;
`;

const HelperText = styled.span`
  cursor: text;
  display: block;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  padding: 8px 12px;
`;

const RequiredMark = styled.em`
  color: ${Colors.ERROR['500']};
`;

const TextAreaErrorMessage = styled(ErrorMessage)`
  padding: 8px 12px;
`;
const TextArea = ({ label, required, helperText, error, ...rest }) => (
  <FieldGroup>
    {label && (
      <TextAreaLabel>
        {label}
        {required && <RequiredMark>*</RequiredMark>}
      </TextAreaLabel>
    )}
    <StyledTextArea error={error} {...rest} />
    {helperText && <HelperText>{helperText}</HelperText>}
    {error && <TextAreaErrorMessage>{error}</TextAreaErrorMessage>}
  </FieldGroup>
);

TextArea.defaultProps = {
  label: 'Textarea label',
  required: false,
  disabled: false,
  placeholder: '',
  helperText: '',
  error: '',
};

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.string,
};

StyledTextArea.displayName = 'StyledTextArea';
TextAreaLabel.displayName = 'TextAreaLabel';
HelperText.displayName = 'HelperText';
TextAreaErrorMessage.displayName = 'TextAreaErrorMessage';

export default TextArea;
