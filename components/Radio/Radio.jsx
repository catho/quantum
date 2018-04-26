import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';

const Wrapper = styled.span`
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.PRIMARY['500']};
  border-radius: ${theme.sizes.radius};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  height: ${theme.sizes.fieldHeight};
  margin-right: 20px;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  text-align: center;
  ${theme.mixins.transition()};

  &:last-child {
    margin-right: 0;
  }

  label {
    color: ${Colors.PRIMARY['500']};
    cursor: pointer;
    position: relative;
  }
`;

const StyledInput = styled.input`
  appearance: none;
  background-color: ${Colors.WHITE};
  cursor: pointer;
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  ${theme.mixins.transition()};

  &:checked {
    background-color: ${Colors.PRIMARY['500']};
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
    <label htmlFor={id}>
      {label}
    </label>
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
