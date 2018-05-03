import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';
import { Label } from '../shared';

const commonAttr = {
  borderWidth: '3px',
  height: '24px',
  width: '24px',
};

const Wrapper = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  appearance: none;
  border: ${commonAttr.borderWidth} solid ${Colors.WHITE};
  border-radius: 50%;
  background-color: ${props => (props.disabled ? Colors.GREY[100] : Colors.WHITE)};
  cursor: inherit;
  height: ${commonAttr.height};
  margin-right: 5px;
  position: relative;
  top: 6px;
  width: ${commonAttr.width};

  ${theme.mixins.transition()};

  &:before {
    content: ' ';
    border: 1px solid ${Colors.GREY[300]};
    border-radius: 50%;
    display: inline-block;
    height: ${commonAttr.height};
    margin-left: -${commonAttr.borderWidth};
    margin-top: -${commonAttr.borderWidth};
    width: ${commonAttr.width};
  }

  &:hover:before {
    border: 1px solid ${props => (props.disabled ? Colors.GREY[300] : Colors.SECONDARY[500])};
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
  cursor: inherit;
  display: inline-block;
`;

const Radio = ({
  id, label, onChange, ...rest
}) => (
  <Wrapper>
    <StyledInput
      id={id}
      type="radio"
      onChange={e => onChange(e, { checked: e.target.value })}
      {...rest}
    />
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
  </Wrapper>
);

Radio.displayName = 'Radio';

Radio.defaultProps = {
  onChange: () => {},
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
