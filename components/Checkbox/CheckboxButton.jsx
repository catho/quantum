import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HiddenInput from '../shared/HiddenInput';
import { createUniqId } from '../shared/uniqId';
import Icon from '../Icon';
import Button from '../Button';
import CheckboxGroupContext from './CheckboxGroupContext';

const uniqId = createUniqId('checkbox-button-');

const HiddenCheckbox = styled(HiddenInput).attrs({
  type: 'checkbox',
})``;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const LockIcon = styled(Icon).attrs({
  name: 'lock',
})``;

const Wrapper = styled.div`
  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
    margin-right: 16px;
    vertical-align: top;

    :last-child {
      margin-right: 0;
    }
  `}

  ${LockIcon} {
    font-size: 17px;
    margin-left: 8px;
  }
`;

const CheckButton = styled(Button)`
  margin-bottom: 16px;
  display: inline-flex;
`;

const CheckboxButton = ({
  children,
  id,
  label,
  value,
  checked,
  disabled,
  name,
  icon,
  skin,
  error: errorProp,
  onChange: onChangeProp,
  ...props
}) => {
  const {
    error = errorProp,
    onChange = onChangeProp,
    inline,
    size,
  } = useContext(CheckboxGroupContext);
  const [_id] = useState(id || uniqId());

  let checkSkin;

  if (error) {
    checkSkin = 'error';
  } else if (disabled) {
    checkSkin = 'neutral';
  } else if (checked) {
    checkSkin = skin;
  }

  return (
    <Wrapper inline={inline}>
      <CheckButton
        checked={checked}
        disabled={disabled}
        error={error}
        htmlFor={_id}
        skin={checkSkin}
        icon={icon}
        stroked={!checked}
        size={size}
        $as="label"
      >
        <HiddenCheckbox
          {...props}
          checked={checked}
          disabled={disabled}
          error={error}
          id={_id}
          name={name}
          onChange={onChange}
          skin={checkSkin}
          value={value}
        />
        {children || label || value}
        {disabled && <LockIcon />}
      </CheckButton>
    </Wrapper>
  );
};

CheckboxButton.defaultProps = {
  checked: false,
  children: '',
  skin: 'primary',
  disabled: false,
  error: '',
  icon: undefined,
  id: '',
  label: '',
  onChange: () => {},
  value: '',
};

CheckboxButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  skin: PropTypes.oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CheckboxButton.displayName = 'CheckboxButton';

export default CheckboxButton;
