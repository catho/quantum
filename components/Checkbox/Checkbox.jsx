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

  cursor: inherit;
  display: initial;
  position: relative;
  margin-bottom: 0;

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
      left: -23px;
      position: absolute;
      top: -1px;
      transform: rotate(45deg);
      width: 7px;
    }
  `}
`;

const StyledFieldGroup = styled(FieldGroup)`
  height: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;

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
    margin-right: 5px;
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
  constructor(props) {
    super(props);

    const { checked } = props;

    this.state = { checked };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.checked !== this.state.checked) {
      this.state.checked = nextProps.checked;
    }
  }

  onChange = (e) => {
    const { onChange, disabled } = this.props;

    if (disabled) return;

    const { checked } = this.state;

    this.setState({ checked: !checked });

    onChange(e, { checked: !checked });
  }

  render() {
    const { label, disabled, ...rest } = this.props;
    const { checked } = this.state;

    return (
      <StyledFieldGroup checked={checked} disabled={disabled}>
        <StyledLabel checked={checked} disabled={disabled}>
          <StyledCheckbox
            {...rest}
            disabled={disabled}
            type="checkbox"
            checked={checked}
            onChange={this.onChange}
          />
          {label}
        </StyledLabel>
      </StyledFieldGroup>
    );
  }
}

Checkbox.defaultProps = {
  label: 'Label',
  id: '',
  checked: false,
  disabled: false,
  onChange: () => { },
};

Checkbox.propTypes = {
  /** An html identification */
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
