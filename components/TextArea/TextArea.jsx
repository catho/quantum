import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { INPUT_STYLE, Label, FieldGroup, ErrorMessage } from '../shared';

const {
  default: DEFAULT_INPUT_STYLE,
  LABEL_STYLE,
  HELPER_TEXT_STYLE,
  REQUIRED_MARK_STYLE,
  ERROR_MESSAGE_STYLE,
  AUTO_FILL_STYLE,
} = INPUT_STYLE;

const StyledTextArea = styled.textarea`
  ${DEFAULT_INPUT_STYLE};
  min-height: 108px;
  margin-top: 8px;

  :-webkit-autofill {
    ${AUTO_FILL_STYLE}
  }
`;

const TextAreaLabel = styled(Label)`
  ${LABEL_STYLE}
`;

const HelperText = styled.span`
  ${HELPER_TEXT_STYLE}
`;

const RequiredMark = styled.em`
  ${REQUIRED_MARK_STYLE}
`;

const TextAreaErrorMessage = styled(ErrorMessage)`
  ${ERROR_MESSAGE_STYLE}
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
