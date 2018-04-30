import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../shared/Label';
import Colors from '../Colors';
import theme from '../../theme';

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled(Label)`
  cursor: pointer;
  display: inline-block;
  padding-right: 54px;
  position: relative;

  &:before,
  &:after {
    ${theme.mixins.transition()}
  }

  &:before {
    background: ${props => (props.checked ? Colors.SECONDARY[100] : Colors.GREY['200'])};
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
    transform: ${props => (props.checked ? 'translateX(20px) translateY(-50%)' : 'translateY(-50%)')};
    background-color: ${props => (props.checked ? Colors.SECONDARY[500] : Colors.WHITE)};
    border: 1px solid ${props => (props.checked ? 'transparent' : Colors.GREY['300'])};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    height: 24px;
    position: absolute;
    right: 20px;
    top: 50%;
    width: 24px;
  }

  &:hover:after{
    background-color: ${Colors.SECONDARY[500]};
    border: 1px solid transparent;
  }

`;

class Toggle extends React.Component {
  handleClick = () => {
    this.props.onChange({ checked: !this.props.checked });
  }

  render() {
    const {
      checked,
      id,
      label,
      onBlur,
      onFocus,
    } = this.props;

    return (
      <div>
        <StyledInput
          checked={checked}
          id={id}
          type="checkbox"
          onBlur={onBlur}
          onClick={this.handleClick}
          onFocus={onFocus}
        />
        <StyledLabel htmlFor={id} checked={checked}>{label}</StyledLabel>
      </div>
    );
  }
}

Toggle.defaultProps = {
  checked: false,
  label: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Toggle;
