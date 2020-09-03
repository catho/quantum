import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { FieldGroup, uniqId } from '../shared';
import Icon from '../Icon';
import InputTypes from './InputTypes';
import {
  TextInput,
  InputLabel,
  HelperText,
  RequiredMark,
  InputErrorMessage,
} from './sub-components';
import { spacing, colors, baseFontSize } from '../shared/theme';

const ID_GENERATOR = uniqId('input-');

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  ${({
    theme: {
      spacing: { xsmall, medium },
    },
  }) => `
    right: ${medium}px;
    bottom: ${xsmall * 1.25}px;
    width: ${baseFontSize * 1.5}px;
  `}
`;

const InputSearchIcon = styled(InputIcon).attrs({ name: 'search' })`
  pointer-events: none;
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `left: ${medium}px;`}
`;

const InputErrorIcon = styled(InputIcon).attrs({ name: 'error' })`
  ${({
    theme: {
      colors: {
        error: { 700: error700 },
      },
    },
  }) => `color: ${error700};`}
`;

const DescriptionLabel = styled.span`
  cursor: text;
  display: block;
  ${({ theme: { baseFontSize: fontSize } }) => `
    font-size: ${fontSize * 0.875}px;
    padding: 0;
  `}
`;

const InputWrapper = styled.div`
  position: relative;
`;

InputIcon.displayName = 'InputIcon';
InputSearchIcon.displayName = 'InputSearchIcon';
InputErrorIcon.displayName = 'InputErrorIcon';
DescriptionLabel.displayName = 'DescriptionLabel';

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

    const { type, id, value } = props;

    this.state = {
      type,
      currentValue: value,
      hasDefaultValue: value !== null && value[0],
    };

    this._id = id || ID_GENERATOR.next().value;
  }

  onChangeInput = ev => {
    const { onChange } = this.props;
    const inputValue = ev.currentTarget.value;
    this.setState({
      currentValue: inputValue,
      hasDefaultValue: false,
    });

    onChange(ev);
  };

  _changeType = type => {
    this.setState({ type });
  };

  _toggleInputType = () => {
    const { type } = this.state;
    this._changeType(type === 'text' ? 'password' : 'text');
  };

  render() {
    const {
      label,
      error,
      type: typeProp,
      descriptionLabel,
      helperText,
      required,
      onClean,
      theme,
      disabled,
      ...rest
    } = this.props;
    const { currentValue, hasDefaultValue } = this.state;
    const { type: typeState } = this.state;

    const _isSearchType = typeProp === 'search';
    const _isPassword = typeProp === 'password';
    const hasValue = currentValue && currentValue[0];
    const _hasIcon = error || _isPassword || hasValue;
    const hasLabel = !!label;
    const onCleanClick = e => {
      this.setState({
        currentValue: '',
        hasDefaultValue: false,
      });
      onClean(e);
    };

    return (
      <FieldGroup>
        {label && (
          <InputLabel htmlFor={this._id} error={error}>
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </InputLabel>
        )}
        {descriptionLabel && (
          <DescriptionLabel theme={theme}>{descriptionLabel}</DescriptionLabel>
        )}
        <InputWrapper>
          {_isSearchType && (
            <InputSearchIcon description={descriptionLabel} theme={theme} />
          )}
          <MaskedInput
            {...rest}
            disabled={disabled}
            id={this._id}
            required={required}
            type={typeState}
            value={currentValue}
            onChange={this.onChangeInput}
            render={(ref, props) => (
              <TextInput
                {...props}
                ref={ref}
                error={error}
                hasLabel={hasLabel}
                hasRightIcon={_hasIcon}
                hasLeftIcon={_isSearchType}
                hasDefaultValue={hasDefaultValue}
              />
            )}
          />
          {error && !_isPassword && (
            <InputErrorIcon description={descriptionLabel} theme={theme} />
          )}
          {_isPassword && (
            <InputIcon
              theme={theme}
              name={typeState === 'password' ? 'visibility' : 'visibility_off'}
              description={descriptionLabel}
              onClick={this._toggleInputType}
            />
          )}
          {hasValue && !_isPassword && !error && !disabled && (
            <InputIcon
              theme={theme}
              name="clear"
              description={descriptionLabel}
              onClick={onCleanClick}
            />
          )}
        </InputWrapper>
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && <InputErrorMessage theme={theme}>{error}</InputErrorMessage>}
      </FieldGroup>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  /** Displays a label text that describes the field */
  label: PropTypes.string,
  /** Displays a helper text below the input */
  helperText: PropTypes.string,
  /** Displays a description text below the label */
  descriptionLabel: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'text',
    'tel',
    'number',
    'password',
    'search',
  ]),
  /** Displays an error message and changes border color to error color */
  error: PropTypes.string,
  disabled: PropTypes.bool,
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
  onClean: PropTypes.func,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Input.defaultProps = {
  error: '',
  disabled: false,
  id: '',
  label: '',
  mask: val => Array(val.length).fill(/./),
  type: 'text',
  value: '',
  helperText: '',
  descriptionLabel: '',
  required: false,
  placeholder: '',
  onClean: () => {},
  onChange: () => {},
  theme: { spacing, colors, baseFontSize },
  minLength: 0,
  maxLength: 255,
};

Input.displayName = 'Input';

export default Input;
