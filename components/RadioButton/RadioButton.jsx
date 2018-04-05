import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';

const Wrapper = styled.span`
  background-color: ${Colors.NEUTRAL.GRAY.WHITE};
  border: 1px solid ${Colors.PRIMARY.BLUE.PEACOCK};
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
    color: ${Colors.PRIMARY.BLUE.PEACOCK};
    cursor: pointer;
    position: relative;
  }

  input {
    appearance: none;
    background-color: ${Colors.NEUTRAL.GRAY.WHITE};
    cursor: pointer;
    height: 100%;
    left: 0;
    margin: 0;
    position: absolute;
    top: 0;
    width: 100%;
    ${theme.mixins.transition()};

    &:checked {
      background-color: ${Colors.PRIMARY.BLUE.PEACOCK};
      ${theme.mixins.transition()};

      ~ label {
        color: ${Colors.NEUTRAL.GRAY.WHITE};
        ${theme.mixins.transition()};
      }
  }
`;

const RadioButton = ({
  children,
  id,
  value,
  name,
}) => (
  <Wrapper>
    <input type="radio" id={id} value={value} name={name} />
    <label htmlFor={id}>{children}</label>
  </Wrapper>
);

RadioButton.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RadioButton;
