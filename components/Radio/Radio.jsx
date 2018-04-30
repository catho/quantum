import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';

const Wrapper = styled.span`
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.GREY[300]};
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  margin-right: 20px;
  padding: 12px;
  position: relative;
  overflow: hidden;
  text-align: center;
  ${theme.mixins.transition()};

  &:hover {
    border: 1px solid ${Colors.SECONDARY[500]};
  }

  &:last-child {
    margin-right: 0;
  }

  label {
    cursor: pointer;
    position: relative;
  }
`;

const StyledInput = styled.input`
  border-radius: 50%;
  appearance: none;
  background-color: ${Colors.WHITE};
  cursor: pointer;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  ${theme.mixins.transition()};

  &:checked {
    border: 3px solid ${Colors.WHITE};
    background-color: ${Colors.SECONDARY[500]};
    ${theme.mixins.transition()};

    ~ label {
      color: ${Colors.WHITE};
      ${theme.mixins.transition()};
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
