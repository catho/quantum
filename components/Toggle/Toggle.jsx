import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../shared/Label';
import Colors from '../Colors';
import theme from '../../theme';

const StyledInput = styled.input`
  display: none;

  &:checked {
    & + ${Label} {
      &:before {
        background: ${Colors.PRIMARY.BLUE.WINDOWS};
      }

      &:after {
        background-color: ${Colors.PRIMARY.BLUE.PEACOCK};
        transform: translateX(20px) translateY(-50%);
      }
    }
  }
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
    background: ${Colors.NEUTRAL.DARKERGRAY.WARMGREY};
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
    background-color: ${Colors.NEUTRAL.DARKERGRAY.BROWNISHGREY};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    height: 24px;
    position: absolute;
    right: 20px;
    transform: translateY(-50%);
    top: 50%;
    width: 24px;
  }
`;

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }

  handleChange = (event) => {
    this.setState({
      checked: event.target.checked,
    }, () => this.props.onChange({
      checked: this.state.checked,
    }));
  }

  render() {
    const {
      id,
      label,
      onBlur,
      onFocus,
    } = this.props;

    return (
      <div>
        <StyledInput
          checked={this.state.checked}
          id={id}
          type="checkbox"
          onBlur={onBlur}
          onChange={this.handleChange}
          onFocus={onFocus}
        />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
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
