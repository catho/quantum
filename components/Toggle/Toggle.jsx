import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Icon from '../Icon';

const CheckIcon = styled(Icon)``;
const CloseIcon = styled(Icon)``;
const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  pointer-events: none;
`;

const Switch = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 24px;
  padding-left: 42px;

  &:before {
    background-color: ${Colors.BLACK[400]};
    border-radius: 16px;
    content: '';
    height: 24px;
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }

  ${CloseIcon},
  ${CheckIcon} {
    align-items: center;
    background-color: ${Colors.BLACK[100]};
    border-radius: 50%;
    display: flex;
    color: ${Colors.BLACK[400]};
    font-size: 12px;
    height: 20px;
    justify-content: center;
    position: absolute;
    left: 2px;
    top: 2px;
    visibility: hidden;
    width: 20px;
    transition: transform 0.2s ease-in-out;
  }

  ${CloseIcon} {
    visibility: visible;
  }
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
  role: 'switch',
})`
  cursor: pointer;
  height: 24px;
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: initial;
  width: 100%;

  &:focus + ${Switch}:before {
    box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
  }

  &:hover + ${Switch}:before {
    background-color: ${Colors.BLACK[700]};
  }

  &:checked + ${Switch} ${CloseIcon} {
    visibility: hidden;
    transform: translateX(18px);
  }

  &:checked + ${Switch} ${CheckIcon} {
    visibility: visible;
  }

  &:checked + ${Switch}:before {
    background-color: ${Colors.BLUE[500]};
  }

  &:checked:hover + ${Switch}:before {
    background-color: ${Colors.COBALT[500]};
  }

  &:checked + ${Switch} ${CheckIcon} {
    background-color: ${Colors.BLUE[200]};
    color: ${Colors.BLUE[500]};
    transform: translateX(18px);
  }
`;

const Toggle = ({ checked, id, onChange, ...rest }) => (
  <Wrapper>
    <Checkbox
      checked={checked}
      aria-checked={checked || false}
      id={id}
      onChange={onChange}
      {...rest}
    />
    <Switch>
      <CloseIcon name="close" />
      <CheckIcon name="check" />
    </Switch>
  </Wrapper>
);

Toggle.defaultProps = {
  id: '',
  checked: null,
  onChange: () => {},
};

Toggle.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
