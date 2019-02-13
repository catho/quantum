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
      width: 5px;
      position: absolute;
      height: 12px;
      left: 3px;

      border: solid ${Colors.WHITE};
      border-radius: 3px;
      border-width: 0 3px 3px 0;
      top: 1px;
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
    left: -2px;
    top: 2px;
    height: 18px;
    width: 18px;
    box-sizing: border-box;
  }

  &:hover:before {
    ${({ disabled, error }) =>
      !disabled &&
      `
      border: 2px solid ${error ? Colors.ERROR['500'] : Colors.BLUE['500']};
      box-shadow: 0 2px 6px 0 ${
        error ? Colors.ERROR['500'] : Colors.BLUE['500']
      };
    `}
  }
`;

const StyledFieldGroup = styled(FieldGroup)`
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  display: none;
`;

const ErrorLabel = styled(Label)`
  color: ${Colors.ERROR['900']};
  cursor: text;
  font-weight: 600;
  font-style: italic;
  left: -3px;
  position: absolute;
  top: 22px;
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
    const { label, disabled, error, ...rest } = this.props;
    const { checked } = this.state;
    return (
      <StyledFieldGroup>
        <StyledLabel checked={checked} disabled={disabled} error={error}>
          <StyledCheckbox
            {...rest}
            disabled={disabled}
            type="checkbox"
            checked={checked}
            error={error}
            onChange={this.onChange}
          />
          {label}
        </StyledLabel>
        <ErrorLabel>{error}</ErrorLabel>
      </StyledFieldGroup>
    );
  }
}

Checkbox.defaultProps = {
  label: 'Label',
  id: '',
  checked: false,
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
