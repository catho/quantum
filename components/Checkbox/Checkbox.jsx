import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, FieldGroup, ErrorMessage } from '../shared';
import Colors from '../Colors';

const CHECKBOX_SIZE = '18px';
const CONTAINER_SIZE = '24px';

const CheckboxFieldGroup = styled(FieldGroup)`
  pointer-events: none;
`;

const CheckboxLabel = styled(Label)`
  color: ${Colors.BLACK['700']};
  cursor: inherit;
  font-size: 16px;
  left: 0;
  margin-bottom: 0;
  min-height: ${CONTAINER_SIZE};
  padding-left: ${CONTAINER_SIZE};
  top: 0;

  :before {
    background-color: ${Colors.WHITE};
    border-radius: 2px;
    border: 2px solid ${Colors.BLACK['400']};
    box-sizing: border-box;
    content: ' ';
    display: inline-block;
    height: ${CHECKBOX_SIZE};
    left: 0;
    position: absolute;
    top: 3px;
    transition: all 0.2s ease-in-out;
    width: ${CHECKBOX_SIZE};
  }
`;

CheckboxLabel.displayName = 'CheckboxLabel';

const HiddenInput = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: pointer;
  height: ${CHECKBOX_SIZE};
  height: 100%;
  margin: 0;
  opacity: 0;
  pointer-events: initial;
  position: absolute;
  width: 100%;

  :checked {
    + ${CheckboxLabel}:before {
      background-color: ${Colors.BLUE['500']};
      border-width: 0;
    }

    + ${CheckboxLabel}:after {
      border-radius: 1px;
      border: solid ${Colors.WHITE};
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
  }

  :hover + ${CheckboxLabel}:before {
    border-color: ${Colors.BLUE['500']};
    box-shadow: 0 2px 6px 0 ${Colors.BLUE['50']};
  }

  ${({ error }) =>
    error &&
    `
    + ${CheckboxLabel}:before {
      border-color: ${Colors.ERROR['500']};
    }

    :checked + ${CheckboxLabel}:before {
      background-color: ${Colors.ERROR['500']};
    }

    :hover +  ${CheckboxLabel}:before {
      border-color: ${Colors.ERROR['500']};
      box-shadow: 0 2px 6px 0 ${Colors.ERROR['500']};
    }
  `}

  &[disabled] {
    cursor: not-allowed;

    + ${CheckboxLabel} {
      color: ${Colors.BLACK['400']};
    }

    + ${CheckboxLabel}:before {
      border-color: ${Colors.BLACK['400']};
      background-color: ${Colors.BLACK['200']};
    }

    :checked + ${CheckboxLabel}:before {
      background-color: ${Colors.BLACK['400']};
    }

    :hover + ${CheckboxLabel}:before {
      box-shadow: none;
    }
  }
`;

HiddenInput.displayName = 'HiddenInput';

const CheckboxErrorMessage = styled(ErrorMessage)`
  left: -3px;
  position: absolute;
  top: 28px;
`;

const Checkbox = ({ label, error, id, ...rest }) => (
  <CheckboxFieldGroup>
    <HiddenInput id={id} error={error} {...rest} />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    {error && <CheckboxErrorMessage>{error}</CheckboxErrorMessage>}
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
