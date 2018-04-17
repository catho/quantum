import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Masked from 'react-text-mask';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import theme from '../../theme';
import masks from './masks';

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
  id, label, error, pattern, mask, ...rest
}) => {
  let inputMask = mask;

  if (typeof mask === 'string') {
    inputMask = masks[mask];
  }

  return (
    <FieldGroup>
      { label && <Label htmlFor={id}> {label} </Label> }

      <Masked
        {...rest}
        mask={inputMask}
        render={
          (ref, props) => (
            <StyledInput
              error={error}
              innerRef={ref}
              {...props}
            />
          )
        }
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldGroup>
  );
};

Input.defaultProps = {
  error: '',
  id: '',
  label: '',
  mask: 'phone',
  maxLength: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  pattern: /.*/,
  placeholder: '',
  type: 'text',
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
};

export default Input;
