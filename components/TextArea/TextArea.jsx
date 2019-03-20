import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { INPUT_STYLE, Label, FieldGroup } from '../shared';

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
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  padding: 8px 12px;
`;

const RequiredMark = styled.em`
  color: ${Colors.ERROR['500']};
`;

const TextArea = ({ label, required, helperText, ...rest }) => (
  <FieldGroup>
    {label && (
      <TextAreaLabel>
        {label}
        {required && <RequiredMark>*</RequiredMark>}
      </TextAreaLabel>
    )}
    <StyledTextArea {...rest} />
    {helperText && <HelperText>{helperText}</HelperText>}
  </FieldGroup>
);

TextArea.defaultProps = {
  label: 'Textarea label',
  required: false,
  disabled: false,
  placeholder: '',
  helperText: '',
};

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};

StyledTextArea.displayName = 'StyledTextArea';
TextAreaLabel.displayName = 'TextAreaLabel';
HelperText.displayName = 'HelperText';

export default TextArea;
