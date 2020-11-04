import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import HiddenInput from '../shared/HiddenInput';
import Icon from '../Icon';
import uniqId from '../shared/uniqId';
import {
  colors,
  spacing,
  components,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const ID_GENERATOR = uniqId('radio-button-');

const LockIcon = styled(Icon).attrs({
  name: 'lock',
})`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
  margin-left: ${xsmall}px;
`}
`;

const ButtonIcon = styled(Icon)`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
  margin-right: ${xsmall}px;
`}
`;

const Wrapper = styled.div`
  ${({
    inline,
    theme: {
      baseFontSize,
      spacing: { xsmall, medium },
    },
  }) =>
    inline &&
    `
    display: inline-block;
    margin-right: ${medium}px;
    vertical-align: top;

    :last-child {
      margin-right: 0;
    }

    ${LockIcon} {
      font-size: ${baseFontSize}px;
      margin-left: ${xsmall}px;
    }
  `}
`;

const RadioButton = styled(Button)`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
    margin-bottom: ${xsmall}px;
  `}
  display: inline-flex;
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
      skin,
      theme,
      size,
      ...rest
    } = this.props;

    return (
      <Wrapper inline={inline} theme={theme}>
        <RadioButton
          checked={checked}
          disabled={disabled}
          error={error}
          htmlFor={this._id}
          skin={error ? 'error' : skin}
          stroked={!checked}
          theme={theme}
          size={size}
          $as="label"
        >
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
          {icon && <ButtonIcon theme={theme} name={icon} />}
          {children || label}
          {disabled && <LockIcon theme={theme} />}
        </RadioButton>
      </Wrapper>
    );
  }
}

Radio.displayName = 'RadioGroup.Button';

Radio.defaultProps = {
  checked: false,
  children: undefined,
  skin: 'primary',
  size: 'medium',
  disabled: false,
  error: false,
  icon: undefined,
  id: undefined,
  inline: false,
  label: undefined,
  onChange: () => {},
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
    colors,
    components: {
      button: components.button,
    },
  },
};

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.string,
  skin: PropTypes.oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
    colors: PropTypes.object,
    components: PropTypes.shape({
      button: PropTypes.object,
    }),
  }),
};

export default Radio;
