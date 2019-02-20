import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../shared/theme';

import { Label, FieldGroup } from '../shared';
import Colors from '../Colors';

const getColors = ({ disabled, checked, error }) => {
  let bgColor = checked ? Colors.BLUE['500'] : Colors.WHITE;
  let borderColor = checked ? Colors.BLUE['500'] : Colors.BLACK['400'];

  if (disabled) {
    borderColor = Colors.BLACK['400'];
    bgColor = checked ? Colors.BLACK['400'] : Colors.BLACK['200'];
  }

  if (error) {
    borderColor = Colors.ERROR['500'];
    bgColor = Colors.WHITE;
  }
  return `
    background-color: ${bgColor};
    border: 2px solid ${borderColor};
  `;
};

const checkboxSize = '24px';

const CheckboxFieldGroup = styled(FieldGroup)`
  height: ${checkboxSize};

  align-items: center;
  pointer-events: none;
`;

const CheckboxLabel = styled(Label)`
  ${theme.mixins.transition()};

  cursor: inherit;
  display: initial;
  font-size: 16px;
  position: relative;
  margin-bottom: 0;
  padding-left: ${checkboxSize};
  left: -${checkboxSize};

  ${({ disabled }) => `
    color: ${disabled ? Colors.BLACK['400'] : Colors.BLACK['700']};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}

  &:before {
    ${theme.mixins.transition()};
    ${getColors};

    position: absolute;
    border-radius: 2px;
    content: ' ';
    display: inline-block;
    left: 0;
    height: ${checkboxSize};
    width: ${checkboxSize};
    box-sizing: border-box;
  }

  &:hover:before {
    ${({ disabled, error }) =>
      !disabled &&
      `
      border: 2px solid ${error ? Colors.ERROR['500'] : Colors.BLUE['500']};
      box-shadow: 0 2px 6px 0 ${
        error ? Colors.ERROR['500'] : Colors.BLUE['50']
      };
    `}
  }
`;

CheckboxLabel.displayName = 'CheckboxLabel';

const HiddenCheckbox = styled.input`
  opacity: 0;
  pointer-events: initial;
  margin: 0;
  width: ${checkboxSize};
  height: ${checkboxSize};

  &:checked + ${CheckboxLabel}:before {
    ${({ disabled, error }) => getColors({ disabled, error, checked: true })};
  }

  &:checked + ${CheckboxLabel}:after {
    border-radius: 1px;
    border-width: 0 3px 3px 0;
    border: solid ${Colors.WHITE};
    content: ' ';
    display: inline-block;
    height: 11px;
    left: 7px;
    position: absolute;
    top: 3px;
    transform: rotate(45deg);
    width: 5px;
  }
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const CheckboxError = styled(Label)`
  color: ${Colors.ERROR['900']};
  cursor: text;
  font-weight: 600;
  font-style: italic;
  left: -3px;
  position: absolute;
  top: 22px;
`;

const Checkbox = ({ label, disabled, error, checked, onChange, ...rest }) => (
  <CheckboxFieldGroup>
    <HiddenCheckbox
      {...rest}
      disabled={disabled}
      type="checkbox"
      checked={checked}
      error={error}
      onChange={onChange}
    />
    <CheckboxLabel checked={checked} disabled={disabled} error={error}>
      {/*label*/}
    </CheckboxLabel>
    {error && <CheckboxError>{error}</CheckboxError>}
  </CheckboxFieldGroup>
);

Checkbox.defaultProps = {
  label: 'Label',
  id: '',
  checked: undefined,
  disabled: false,
  error: '',
  onChange: () => {},
};

Checkbox.propTypes = {
  /** An html identification */
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
