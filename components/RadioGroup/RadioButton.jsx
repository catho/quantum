import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonGroupLabel from '../shared/ButtonGroupLabel';
import HiddenRadio from '../shared/HiddenRadio';
import Icon from '../Icon';
import uniqId from '../shared/uniqId';

const LockIcon = styled(Icon).attrs({
  name: 'lock',
})``;

const ButtonIcon = styled(Icon)`
  margin-right: 8px;
`;

const Wrapper = styled.div`
  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
    vertical-align: top;
    margin-right: 16px;

    :last-child {
      margin-right: 0;
    }
  `}

  ${LockIcon} {
    margin-left: 8px;
    font-size: 17px;
  }
`;

const Radio = ({
  children,
  label,
  error,
  disabled,
  onChange,
  value,
  checked,
  icon,
  id,
  inline,
  ...rest
}) => {
  const skin = checked ? 'primary' : 'secondary';
  const _id = id || uniqId('radio-button-');

  return (
    <Wrapper inline={inline}>
      <HiddenRadio
        checked={checked}
        disabled={disabled}
        id={_id}
        onChange={e => onChange({ value, label }, e)}
        value={value}
        skin={skin}
        error={error}
        {...rest}
      />
      <ButtonGroupLabel
        checked={checked}
        disabled={disabled}
        error={error}
        htmlFor={_id}
        skin={skin}
      >
        {icon && <ButtonIcon name={icon} />}
        {children || label}
        {disabled && <LockIcon />}
      </ButtonGroupLabel>
    </Wrapper>
  );
};

Radio.displayName = 'RadioGroup.Button';

Radio.defaultProps = {
  checked: false,
  children: undefined,
  disabled: false,
  error: false,
  icon: undefined,
  id: undefined,
  inline: false,
  label: undefined,
  onChange: () => {},
};

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default Radio;
