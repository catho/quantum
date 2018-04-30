import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';

import { Label, FieldGroup } from '../shared';
import Colors from '../Colors';

const getColors = ({ disabled, checked }) => {
  let bgColor = checked ? Colors.SECONDARY['500'] : Colors.WHITE;
  let borderColor = checked ? Colors.SECONDARY['500'] : Colors.GREY['300'];

  if (disabled) {
    borderColor = Colors.GREY['100'];
    bgColor = Colors.WHITE;
  }

  return `
    background-color: ${bgColor};
    border: 1px solid ${borderColor};
  `;
};

const StyledLabel = styled(Label)`
  ${theme.mixins.transition()};

  bottom: 7px;
  cursor: inherit;
  display: initial;
  position: relative;

  ${({ disabled }) => disabled && `
    color: ${Colors.GREY['300']};
  `}

  ${({ checked, disabled }) => checked && `
    &:before {
      border: solid ${disabled ? Colors.GREY['300'] : Colors.WHITE};
      border-radius: 3px;
      border-width: 0 4px 4px 0;
      content: ' ';
      display: inline-block;
      height: 14px;
      left: -15px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg);
      width: 7px;
    }
  `}
`;

const StyledFieldGroup = styled(FieldGroup)`
  height: 24px;

  ${({ disabled }) => `
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}

  &:before {
    ${theme.mixins.transition()};
    ${props => getColors(props)};

    border-radius: 4px;
    content: ' ';
    display: inline-block;
    height: 24px;
    width: 24px;
  }

  &:hover:before {
    ${({ disabled }) => !disabled && `
      border: 1px solid ${Colors.SECONDARY['500']};
    `}
  }
`;

const StyledCheckbox = styled.input`
  display: none;
`;

class Checkbox extends React.Component {
  onClick = () => {
    const { onChange, disabled } = this.props;

    if (disabled) return;

    onChange({ checked: !this.props.checked });
  }

  render() {
    const {
      id,
      label,
      onChange,
      checked,
      disabled,
      ...rest
    } = this.props;

    return (
      <StyledFieldGroup
        key={label}
        onClick={this.onClick}
        checked={checked}
        disabled={disabled}
      >
        <StyledCheckbox
          {...rest}
          id={id}
          type="checkbox"
          checked={checked}
        />
        {label && <StyledLabel
          htmlFor={id}
          checked={checked}
          disabled={disabled}
        > {label} </StyledLabel>}
      </StyledFieldGroup>
    );
  }
}

Checkbox.defaultProps = {
  id: '',
  checked: false,
  disabled: false,
  label: 'Label',
  onChange: () => {},
};

Checkbox.propTypes = {
  /** An html identification */
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
