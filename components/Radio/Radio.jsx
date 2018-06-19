import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { Label } from '../shared';

const commonAttr = {
  borderWidth: '3px',
  height: '24px',
  width: '24px',
};

const Wrapper = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

const StyledLabel = styled(Label)`
  cursor: inherit;
  display: inline-block;

  &:before {
    content: ' ';
    border: 1px solid ${({ disabled }) => (disabled ? Colors.SECONDARY[100] : Colors.SECONDARY[300])};
    border-radius: 50%;
    display: inline-block;
    height: ${commonAttr.height};
    width: ${commonAttr.width};
    margin-left: -4px;
    margin-top: -4px;
    margin-right: 5px;

    ${({ checked }) => checked && `
      box-shadow: inset 0px 0px 0 3px white;
    `}
    cursor: inherit;
    position: relative;
    top: 6px;
  }

  &:hover:before {
    border: 1px solid ${({ disabled }) => (disabled ? Colors.SECONDARY[100] : Colors.PRIMARY[500])};
    box-shadow: inset 0 0 0 3px ${Colors.WHITE};
  }
`;

const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledLabel}:before {
    background-color: ${Colors.PRIMARY[500]};
    box-shadow: inset 0 0 0 3px ${Colors.WHITE};
  }

  &:disabled:checked + ${StyledLabel}:before {
    background-color: ${Colors.SECONDARY[100]};
    box-shadow: inset 0 0 0 3px ${Colors.WHITE};
  }
`;

const Radio = ({
  id, label, onChange, disabled, ...rest
}) => (
  <Wrapper>
    <StyledInput
      {...rest}
      id={id}
      type="radio"
      disabled={disabled}
      onChange={e => onChange(e, { checked: e.target.value })}
    />
    <StyledLabel
      {...rest}
      disabled={disabled}
      htmlFor={id}
    >
      {label}
    </StyledLabel>
  </Wrapper>
);

Radio.displayName = 'Radio';

Radio.defaultProps = {
  onChange: () => { },
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
