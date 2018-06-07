import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import theme from '../../theme';

const Checkbox = styled.input`
  display: none;
`;

const StyledLabel = styled(Label)`
  ${({ disabled }) => `
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
  display: inline-block;
  padding-right: 54px;
  position: relative;

  &:before,
  &:after {
    ${theme.mixins.transition()}
  }

  &:before {
    background: ${({ checked }) => (checked ? Colors.SECONDARY[100] : Colors.GREY[200])};
    border-radius: 10px;
    content: '';
    height: 16px;
    position: absolute;
    right: 0;
    transform: translateY(-50%);
    top: 50%;
    width: 42px;
  }

  &:after {
    transform: ${({ checked }) => (checked ? 'translateX(20px) translateY(-50%)' : 'translateY(-50%)')};
    border: 1px solid ${({ checked }) => (checked ? 'transparent' : Colors.GREY['300'])};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    height: 24px;
    position: absolute;
    right: 20px;
    top: 50%;
    width: 24px;
    background-color: ${({ checked, disabled }) => {
    if (disabled) return Colors.GREY[300];
    return (checked ? Colors.SECONDARY[500] : Colors.WHITE);
  }};
  }

  &:hover:after{
    background-color: ${({ disabled }) => !disabled && Colors.SECONDARY[500]};
    border: 1px solid transparent;
  }
`;

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    const { checked } = props;

    this.state = { checked };
  }

  componentWillUpdate({ checked }) {
    if (checked !== this.state.checked) {
      this.state.checked = checked;
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
    const {
      id, label, disabled, ...rest
    } = this.props;
    const { checked } = this.state;

    return (
      <FieldGroup>
        <StyledLabel checked={checked} disabled={disabled}>
          <Checkbox
            {...rest}
            disabled={disabled}
            checked={checked}
            id={id}
            type="checkbox"
            onChange={this.onChange}
          />
          {label}
        </StyledLabel>
      </FieldGroup>
    );
  }
}

Toggle.defaultProps = {
  label: '',
  id: '',
  checked: false,
  disabled: false,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

Toggle.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Toggle;
