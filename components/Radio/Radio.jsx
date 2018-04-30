import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';
import { Label } from '../shared';

const commonAttr = {
  borderWidth: '3px',
  width: '24px',
  height: '24px',
};

const Wrapper = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  position: relative;
  top: 6px;
  width: ${commonAttr.width};
  height: ${commonAttr.height};
  border-radius: 50%;
  cursor: inherit;
  appearance: none;
  border: ${commonAttr.borderWidth} solid ${Colors.WHITE};
  margin-right: 5px;

  ${theme.mixins.transition()};

  &:before {
    display: inline-block;
    border: 1px solid ${Colors.GREY[300]};
    content: ' ';
    width: ${commonAttr.width};
    height: ${commonAttr.height};
    border-radius: 50%;
    margin-left: -${commonAttr.borderWidth};
    margin-top: -${commonAttr.borderWidth};
  }

  &:hover:before {
    border: 1px solid ${Colors.SECONDARY[500]};
  }

  &:checked {
    background-color: ${Colors.SECONDARY[500]};
    ${theme.mixins.transition()};
  }

  &:checked:before {
    border: 1px solid ${Colors.SECONDARY[500]};
  }
`;

const StyledLabel = styled(Label)`
  display: inline-block;
  cursor: inherit;
`;

class Radio extends React.Component {
  handleChange = (e) => {
    const {onChange} = this.props;

    onChange(e, {checked: e.target.value});
  }

  render(){
    const {id, checked, disabled, value, name, label, onChange} = this.props;
    return (
      <Wrapper>
        <StyledInput
          id={id}
          name={name}
          type="radio"
          value={value}
          onChange={this.handleChange}
        />
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </Wrapper>
    )
  }  
};

Radio.defaultProps = {
  onChange: () => {},
  checked: false,
  disabled: false,
};

Radio.propTypes = {
  /** Id to associate with label */
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Label that will be displayed on browser */
  label: PropTypes.string.isRequired,
  /** On change event handle function */
  onChange: PropTypes.func,
};

export default Radio;
