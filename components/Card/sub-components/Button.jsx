import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {default as OriginalButton} from '../../Button';

const ButtonWrapper = styled(OriginalButton)`
  background-color: transparent;
  padding: 0;
  margin: 0 10px 0 0;
  box-shadow: none;
  font-family: oxygen;
  text-transform: uppercase;
  font-size: 12px;

  &:active {
    box-shadow: none;
    background-color: transparent;
    border: 1px solid transparent;
  }
`;

const Button = props => <ButtonWrapper {...props} />;

export default Button;