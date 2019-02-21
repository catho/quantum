import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../shared/theme';

import { Label, FieldGroup } from '../shared';
import Colors from '../Colors';

const checkboxSize = '18px';
const containerSize = '24px';

const CheckboxFieldGroup = styled(FieldGroup)`
  pointer-events: none;
`;

const CheckboxLabel = styled(Label)`
  ${theme.mixins.transition()};

  cursor: inherit;
  font-size: 16px;
  margin-bottom: 0;
  padding-left: ${containerSize};
  min-height: ${containerSize};
  left: 0;
  top: 0;
  color: ${Colors.BLACK['700']};

  :before {
    ${theme.mixins.transition()};
    background-color: ${Colors.WHITE};
    border-color: ${Colors.BLACK['400']};
    border-radius: 2px;
    border-style: solid;
    border-width: 2px;
    box-sizing: border-box;
    content: ' ';
    display: inline-block;
    height: ${checkboxSize};
    left: 0;
    position: absolute;
    top: 3px;
    width: ${checkboxSize};
  }
`;

CheckboxLabel.displayName = 'CheckboxLabel';

const HiddenInput = styled.input`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: ${checkboxSize};
  height: 100%;
  margin: 0;
  opacity: 0;
  pointer-events: initial;
  position: absolute;
  width: ${checkboxSize};
  width: 100%;

  :checked + ${CheckboxLabel}:before {
    background-color: ${Colors.BLUE['500']};
    border-color: ${Colors.BLUE['500']};
  }

  :checked + ${CheckboxLabel}:after {
    border-color: ${Colors.WHITE};
    border-radius: 1px;
    border-style: solid;
    border-width: 0 2.5px 2.5px 0;
    content: ' ';
    display: inline-block;
    height: 11px;
    left: 6px;
    position: absolute;
    top: 3px;
    transform: rotate(45deg);
    width: 4px;
  }

  :hover + ${CheckboxLabel}:before {
    ${({ disabled, error }) =>
      !disabled &&
      `
      border: 2px solid ${error ? Colors.ERROR['500'] : Colors.BLUE['500']};
      box-shadow: 0 2px 6px 0 ${
        error ? Colors.ERROR['500'] : Colors.BLUE['50']
      };
    `}
  }

  ${({ error }) =>
    error &&
    `
    border-color: ${Colors.ERROR['500']};
    background-color: ${Colors.WHITE};
  `}

  &[disabled] + ${CheckboxLabel} {
    color: ${Colors.BLACK['400']};
  }

  &[disabled] + ${CheckboxLabel}:before {
    border-color: ${Colors.BLACK['400']};
    background-color: ${Colors.BLACK['200']};
  }

  &[disabled]:checked + ${CheckboxLabel}:before {
    background-color: ${Colors.BLACK['400']};
  }
`;

HiddenInput.displayName = 'HiddenInput';

const CheckboxError = styled(Label)`
  color: ${Colors.ERROR['900']};
  cursor: text;
  font-style: italic;
  font-weight: 600;
  left: -3px;
  position: absolute;
  top: 22px;
`;

const Checkbox = ({ label, error, id, ...rest }) => (
  <CheckboxFieldGroup>
    <HiddenInput type="checkbox" id={id} error={error} {...rest} />
    <CheckboxLabel error={error} htmlFor={id}>
      {label}
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
