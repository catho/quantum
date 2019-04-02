import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonGroupLabel from '../shared/ButtonGroupLabel';
import HiddenRadio from './HiddenRadio';
import Icon from '../Icon';

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
  inline,
  ...rest
}) => {
  const skin = checked ? 'primary' : 'secondary';

  return (
    <Wrapper inline={inline}>
      <ButtonGroupLabel
        error={error}
        disabled={disabled}
        skin={skin}
        checked={checked}
      >
        {icon && <ButtonIcon name={icon} />}
        <HiddenRadio
          checked={checked}
          disabled={disabled}
          onChange={e => onChange({ value, label }, e)}
          value={value}
          {...rest}
        />
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
  inline: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default Radio;
