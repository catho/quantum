import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import theme from '../../theme';

/** A text field component to get user text data */
const StyledInput = styled.input`
  ${theme.mixins.transition()};

  border: 1px solid ${Colors.NEUTRAL.DARKERGRAY.WARMGREY};
  border-radius: ${theme.sizes.radius};
  height: ${theme.sizes.fieldHeight};
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  box-sizing: border-box;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  ${props => props.error && `
    border-color: ${Colors.ERROR};
  `}
`;

const Input = ({
  id, label, error, pattern, mask, ...props
}) => (
  <FieldGroup>
    { label && <Label htmlFor={id}> {label} </Label> }

    <StyledInput
      id={id}
      pattern={pattern && pattern.source}
      data-mask={mask}
      error={error}
      {...props}
    />

    {error && <ErrorMessage>{error}</ErrorMessage>}
  </FieldGroup>
);

Input.defaultProps = {
  error: '',
  id: '',
  label: '',
  mask: '',
  maxLength: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  pattern: /.*/,
  placeholder: '',
  type: 'text',
  value: '',
};

Input.propTypes = {
  /** Display an error message and changes border color to error color */
  error: PropTypes.string,
  /** An html identification */
  id: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  /** Set a text mask that filter user input */
  mask: PropTypes.string,
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pattern: PropTypes.instanceOf(RegExp),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'text',
    'tel',
    'number',
    'link',
  ]),
  value: PropTypes.string,
};

export default Input;
