import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import Label from '../shared/Label';
import ErrorMessage from '../shared/ErrorMessage';
import Colors from '../Colors';
import theme from '../../theme';

const StyledInput = styled.input`
  ${theme.mixins.transition()};

  border: 1px solid ${Colors.NEUTRAL.DARKEYGRAY.WARMGREY};
  border-radius: ${theme.sizes.radius};
  height: ${theme.sizes.fieldHeight};
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  box-sizing: border-box;

  ${props => props.error && `
    border-color: ${Colors.ERROR};
  `}
`;

const Input = ({
  id, label, error, pattern, mask, ...props
}) => (
  <React.Fragment>
    { label && <Label htmlFor={id}> {label} </Label> }

    <StyledInput
      id={id && id}
      pattern={pattern && pattern.source}
      data-mask={mask}
      error={error}
      {...props}
    />

    {error && <ErrorMessage>{error}</ErrorMessage>}
  </React.Fragment>
);

Input.defaultProps = {
  error: null,
  hasError: null,
  id: null,
  label: null,
  mask: null,
  maxLength: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  pattern: null,
  placeholder: null,
  type: 'text',
  value: null,
};

Input.propTypes = {
  error: PropTypes.string,
  hasError: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
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
