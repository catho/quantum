import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonGroupLabel } from '../shared';
import HiddenInput from '../shared/HiddenInput';
import uniqId from '../shared/uniqId';
import CheckboxGroupContext from './CheckboxGroupContext';

const ID_GENERATOR = uniqId('checkbox-button-');

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const CheckboxButton = ({
  children,
  id,
  label,
  value,
  checked,
  disabled,
  name,
  error: errorProp,
  onChange: onChangeProp,
  ...props
}) => {
  const { error = errorProp, onChange = onChangeProp } = useContext(
    CheckboxGroupContext,
  );

  const skin = checked ? 'primary' : 'secondary';
  const _id = useMemo(() => ID_GENERATOR.next().value, [name]);

  return (
    <Wrapper>
      <HiddenInput
        {...props}
        checked={checked}
        disabled={disabled}
        error={error}
        id={_id}
        name={name}
        onChange={onChange}
        skin={skin}
        type="checkbox"
        value={value}
      />
      <ButtonGroupLabel
        checked={checked}
        disabled={disabled}
        error={error}
        htmlFor={_id}
        skin={skin}
      >
        {children || label || value}
      </ButtonGroupLabel>
    </Wrapper>
  );
};

CheckboxButton.defaultProps = {
  checked: false,
  children: '',
  disabled: false,
  error: '',
  id: '',
  label: '',
  onChange: () => {},
  value: '',
};

CheckboxButton.propTypes = {
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

CheckboxButton.displayName = 'CheckboxButton';

export default CheckboxButton;
