import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import ColorsDeprecated from '../Colors/deprecated';
import Colors from '../Colors';
import Icon from '../Icon';
import theme from '../shared/theme';
import InputTypes from './InputTypes';

const InputLabel = styled(Label)`
  cursor: text;
  font-size: 16px;
  margin-bottom: 0;
  padding: 8px 12px 0px 12px;
  font-weight: bold;
  ${theme.mixins.transition()};
`;

const InputTag = styled.input`
  ${theme.mixins.transition()};
  background-color: transparent;
  border: none;
  border-radius: 4px;
  border: 1.5px solid ${Colors.BLACK['400']};
  box-sizing: border-box;
  color: ${Colors.BLACK['700']};
  font-size: 16px;
  height: 44px;
  padding: 10px 12px;
  outline: none;
  width: 100%;
  margin-top: 5px;

  &[disabled] {
    background-color: ${Colors.BLACK['100']};
    color: ${Colors.BLACK['400']};
    cursor: not-allowed;
    border-color: ${Colors.BLACK['400']};
    box-shadow: none;
  }

  ${({ error }) =>
    error &&
    `
    border-color: ${Colors.ERROR['500']};
  `}

  ${props =>
    props.password &&
    `
    padding-right: 28px;
  `}

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &:focus {
    border-color: ${Colors.BLUE['500']};
    box-shadow: 0 1px 6px 0 ${Colors.BLUE['50']};
  }

  &:focus + ${InputLabel} {
    color: ${ColorsDeprecated.PRIMARY['500']};
  }

  ${({ placeholder, defaultValue }) =>
    placeholder &&
    !defaultValue &&
    `
    color: ${Colors.BLACK['400']};
  `}

  :-webkit-autofill {
    -webkit-text-fill-color: ${Colors.BLACK['700']};
    -webkit-box-shadow: 0 0 0px 1000px ${Colors.BLUE['200']} inset;
  }
`;

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 45px;
`;

const InputFieldGroup = styled(FieldGroup)`
  margin: 40px 0 20px;

  &:first-child {
    margin-top: 20px;
  }
`;

const InputErrorMessage = styled(ErrorMessage)`
  padding: 8px 12px;
`;

const HelperText = styled.span`
  color: ${Colors.BLACK['700']};
  cursor: text;
  display: block;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  padding: 8px 12px;
`;

const DescriptionLabel = styled.span`
  color: ${Colors.BLACK['700']};
  cursor: text;
  display: block;
  font-size: 14px;
  padding: 0px 12px;
`;

const RequiredMark = styled.em`
  color: ${Colors.ERROR['500']};
`;

/** A text field component to get user text data */
class Input extends React.Component {
  static CEP = InputTypes.CEP;

  static CNPJ = InputTypes.CNPJ;

  static CPF = InputTypes.CPF;

  static Date = InputTypes.Date;

  static Phone = InputTypes.Phone;

  static Password = InputTypes.Password;

  constructor(props) {
    super(props);

    const { value, type } = props;

    this.state = {
      value,
      type,
    };
  }

  componentWillUpdate(nextProps) {
    const { value, type } = this.state;
    if (nextProps.value !== value || nextProps.type !== type) {
      this.state.value = nextProps.value;
      this.state.type = nextProps.type;
    }
  }

  _onChange = e => {
    const { onChange } = this.props;
    const {
      target: { value },
    } = e;

    this.setState({ value });

    onChange(e, { value });
  };

  _changeType = type => {
    this.setState({ type });
  };

  _showPassword = () => {
    const { type } = this.state;

    if (type === 'text') {
      this._changeType('password');
    } else {
      this._changeType('text');
    }
  };

  _handleClear = () => {
    this.setState({ value: '' });
  };

  render() {
    const {
      id,
      label,
      error,
      mask,
      type: inputType,
      descriptionLabel,
      helperText,
      required,
      ...rest
    } = this.props;
    const { value, type } = this.state;
    const valueIsTyped = !!value;

    return (
      <InputFieldGroup>
        {label && (
          <InputLabel htmlFor={id} error={error}>
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </InputLabel>
        )}
        {descriptionLabel && (
          <DescriptionLabel>{descriptionLabel}</DescriptionLabel>
        )}
        <MaskedInput
          {...rest}
          id={id}
          type={type}
          mask={mask}
          value={value}
          onChange={this._onChange}
          render={(ref, props) => (
            <InputTag ref={ref} error={error} {...props} />
          )}
        />
        {inputType === 'password' && (
          <InputIcon
            name={type === 'password' ? 'visibility' : 'visibility_off'}
            onClick={this._showPassword}
          />
        )}
        {valueIsTyped && (
          <InputIcon name="cancel" onClick={this._handleClear} />
        )}
        {error && <InputErrorMessage>{error}</InputErrorMessage>}
        {helperText && !error && <HelperText>{helperText}</HelperText>}
      </InputFieldGroup>
    );
  }
}

Input.defaultProps = {
  error: '',
  id: '',
  label: '',
  mask: false,
  maxLength: '',
  type: 'text',
  value: '',
  helperText: '',
  descriptionLabel: '',
  required: false,
  disabled: false,
  placeholder: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  /** Display a helper text below the input */
  helperText: PropTypes.string,
  /** Display a description text below the label */
  descriptionLabel: PropTypes.string,
  /** set if the input is required */
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'tel', 'number', 'password']),
  /** Display an error message and changes border color to error color */
  error: PropTypes.string,
  /** Set a text mask that filter user input */
  maxLength: PropTypes.string,
  /** A html identification */
  id: PropTypes.string,
  /**
   * Mask must follow this [rules](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask)
   */
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.instanceOf(RegExp),
    PropTypes.func,
    PropTypes.string,
  ]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.displayName = 'Input';

export default Input;
