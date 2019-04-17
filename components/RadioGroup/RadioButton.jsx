import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonGroupLabel from '../shared/ButtonGroupLabel';
import HiddenInput from '../shared/HiddenInput';
import Icon from '../Icon';
import uniqId from '../shared/uniqId';

const ID_GENERATOR = uniqId('radio-button-');

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

class Radio extends React.Component {
  constructor(props) {
    super(props);

    const { id } = props;

    this._id = id || ID_GENERATOR.next().value;
  }

  render() {
    const {
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
    } = this.props;
    const skin = checked ? 'primary' : 'secondary';

    return (
      <Wrapper inline={inline}>
        <HiddenInput
          type="radio"
          checked={checked}
          disabled={disabled}
          id={this._id}
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
          htmlFor={this._id}
          skin={skin}
        >
          {icon && <ButtonIcon name={icon} />}
          {children || label}
          {disabled && <LockIcon />}
        </ButtonGroupLabel>
      </Wrapper>
    );
  }
}

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
