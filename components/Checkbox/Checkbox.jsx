import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../shared/theme';

import { Label, FieldGroup } from '../shared';
import Colors from '../Colors';

const getColors = ({ disabled, checked }) => {
  let bgColor = checked ? Colors.BLUE['500'] : Colors.WHITE;
  let borderColor = checked ? Colors.BLUE['500'] : Colors.BLACK['400'];

  if (disabled) {
    borderColor = Colors.BLACK['400'];
    bgColor = checked ? Colors.BLACK['400'] : Colors.BLACK['200'];
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
  padding-left: 24px;

  ${({ disabled }) =>
    `
    color: ${disabled ? Colors.BLACK['400'] : Colors.BLACK['700']};
  `}

  ${({ checked }) =>
    checked &&
    `
    &:after {
      content: ' ';
      display: inline-block;
      width: 7px;
      position: absolute;
      height: 14px;
      top: -2px;
      left: 0;

      border: solid ${Colors.WHITE};
      border-radius: 3px;
      border-width: 0 4px 4px 0;

      transform: rotate(45deg);
    }
  `}

  ${({ disabled }) => `
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}

  &:before {
    ${theme.mixins.transition()};
    ${props => getColors(props)};

    position: absolute;
    border-radius: 4px;
    content: ' ';
    display: inline-block;
    left: -8px;
    top: -4px;
    height: 24px;
    width: 24px;
  }

  &:hover:before {
    ${({ disabled }) =>
      !disabled &&
      `
      border: 1px solid ${Colors.BLUE['500']};
    `}
  }
`;

const StyledFieldGroup = styled(FieldGroup)`
  height: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
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
    const { checked } = this.state;
    if (nextProps.checked !== checked) {
      this.state.checked = nextProps.checked;
    }
  }

  onChange = e => {
    const { onChange, disabled } = this.props;

    if (disabled) return;

    const { checked } = this.state;

    this.setState({ checked: !checked });

    onChange(e, { checked: !checked });
  };

  render() {
    const { label, disabled, ...rest } = this.props;
    const { checked } = this.state;

    return (
      <StyledFieldGroup>
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
  onChange: () => {},
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
