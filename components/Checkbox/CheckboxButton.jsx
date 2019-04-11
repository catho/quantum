import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonGroupLabel } from '../shared';
// import Colors from '../Colors';
// import Icon from '../Icon';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: pointer;
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const Checkbox = ({
  children,
  error,
  id,
  label,
  value,
  checked,
  disabled,
  ...rest
}) => (
  <Wrapper>
    <ButtonGroupLabel htmlFor={id} checked={checked} disabled={disabled}>
      <HiddenCheckbox id={id} error={error} value={value} {...rest} />
      {children || label || value}
    </ButtonGroupLabel>
  </Wrapper>
);

Checkbox.defaultProps = {
  checked: false,
  children: '',
  disabled: false,
  error: '',
  id: '',
  label: '',
  onChange: () => {},
  value: '',
};

Checkbox.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
