import React from 'react';
import styled from 'styled-components';
import OriginalButton from '../../Button';

const ButtonWrapper = styled(OriginalButton)`
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 10px;

  &:active {
    box-shadow: none;
    background-color: transparent;
    border: 1px solid transparent;
  }
`;

const Button = props => <ButtonWrapper {...props} />;

Button.displayName = 'Card.Button';

export default Button;
