import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonGroupLabel from '../shared/ButtonGroupLabel';

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0;
`;

const Radio = ({
  children,
  label,
  error,
  disabled,
  onChange,
  value,
  checked,
  ...rest
}) => {
  const skin = checked ? 'primary' : 'secondary';

  return (
    <ButtonGroupLabel
      error={error}
      disabled={disabled}
      skin={skin}
      checked={checked}
    >
      <StyledRadio
        checked={checked}
        disabled={disabled}
        onChange={e => onChange({ value, label }, e)}
        {...rest}
      />
      {children || label}
    </ButtonGroupLabel>
  );
};

Radio.displayName = 'RadioGroup.Radio';

Radio.defaultProps = {
  checked: false,
  disabled: false,
  error: false,
  children: undefined,
  label: undefined,
  onChange: () => {},
};

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Radio;
