import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Colors from '../Colors';
import { Label } from '../shared';
import skins from '../Button/skins';

const CANCEL_SKIN = skins({ skin: 'cancel' });
const PRIMARY_SKIN = skins({ skin: 'primary' });

console.log(Colors.COBALT);

const commonAttr = {
  borderWidth: '4px',
  height: '16px',
  width: '16px',
};

const boxedRadio = props => {
  const { unselected, selected, disabled } = CANCEL_SKIN;

  if (props.boxed) {
    return css`
      padding: 10px;
      background-color: ${props.disabled
        ? disabled.background
        : unselected.background};
      border: 1px solid ${props.disabled ? disabled.border : unselected.border};
      color: ${props.disabled ? disabled.color : unselected.color};
      font-weight: ${props.disabled
        ? disabled.fontWeight
        : unselected.fontWeight};

      &:active {
        background-color: ${selected.background};
        border-color: ${selected.border};
        color: ${selected.color};
      }
    `;
  }

  return css`
    &:before {
      content: ' ';
      border-width: 1.5px;
      border-style: solid;
      border-color: ${Colors.BLACK[400]};
      ${props.disabled &&
        `
        background-color: ${Colors.BLACK[200]};
      `}
      border-radius: 50%;
      display: inline-block;
      height: ${commonAttr.height};
      width: ${commonAttr.width};
      margin-right: 5px;

      ${props.checked && `box-shadow: inset 0px 0px 0 3px white;`}
      cursor: inherit;
      position: relative;
      top: 4px;
    }

    &:hover:before {
      border-color: ${props.disabled ? Colors.COBALT[100] : Colors.BLUE[500]};
      box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
    }
  `;
};

const StyledLabel = styled(Label)`
  cursor: inherit;
  display: inline-block;

  ${boxedRadio};
`;

const Wrapper = styled.div`
  cursor: pointer;
  margin-right: ${({ boxed }) => (boxed ? '0' : '10px')};

  &:first-child ${StyledLabel} {
    border-right: none;
  }
`;

const boxedInput = props => {
  const { selected, disabled } = PRIMARY_SKIN;

  if (props.boxed) {
    return css`
      &:checked + ${StyledLabel} {
        background-color: ${selected.background};
        border-color: ${selected.border};
        color: ${selected.color};
      }

      &:disabled:checked + ${StyledLabel} {
        background-color: ${disabled.background};
        border-color: ${disabled.border};
        color: ${disabled.color};
      }
    `;
  }

  return css`
    &:checked + ${StyledLabel}:before {
      background-color: ${Colors.BLUE};
      box-shadow: inset 0 0 0 4px ${Colors.WHITE};
    }

    &:disabled:checked + ${StyledLabel}:before {
      background-color: ${Colors.COBALT[100]};
      box-shadow: inset 0 0 0 4px ${Colors.WHITE};
    }
  `;
};

const StyledInput = styled.input`
  display: none;

  ${boxedInput};
`;

const Radio = ({ id, label, onChange, disabled, ...rest }) => (
  <Wrapper {...rest}>
    <StyledInput
      {...rest}
      id={id}
      type="radio"
      disabled={disabled}
      onChange={e => onChange(e, { checked: e.target.value })}
    />
    <StyledLabel {...rest} disabled={disabled} htmlFor={id}>
      {label}
    </StyledLabel>
  </Wrapper>
);

Radio.displayName = 'Radio';

Radio.defaultProps = {
  onChange: () => {},
  disabled: false,
};

Radio.propTypes = {
  /** Id to associate with label */
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** Label that will be displayed on browser */
  label: PropTypes.string.isRequired,
  /** On change event handle function */
  onChange: PropTypes.func,
};

export default Radio;
