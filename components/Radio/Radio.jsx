import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';

const commonAttr = {
  borderWidth: '3px',
  width: '24px',
  height: '24px',
};

const Wrapper = styled.div`
  margin-right: 10px;
`;

const StyledInput = styled.input`
  position: relative;
  top: 6px;
  width: ${commonAttr.width};
  height: ${commonAttr.height};
  border-radius: 50%;
  cursor: pointer;
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

const Radio = ({
  id,
  value,
  name,
  label,
  onChange,
}) => (
  <Wrapper>
    <StyledInput
      type="radio"
      id={id}
      value={value}
      name={name}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </Wrapper>
);

Radio.defaultProps = {
  onChange: null,
};

Radio.propTypes = {
  /** Id to associate with label */
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  /** Label that will be displayed on browser */
  label: PropTypes.string.isRequired,
  /** On change event handle function */
  onChange: PropTypes.func,
};

export default Radio;
