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
      spacing: { xsmall, small },
    },
  }) => `
    right: ${small}px;
    bottom: ${xsmall * 1.25}px;
  `}
`;

const InputSearchIcon = styled(InputIcon).attrs({ name: 'search' })`
  pointer-events: none;
  ${({
    theme: {
      spacing: { small },
    },
  }) => `left: ${small}px;`}
`;

const InputErrorIcon = styled(InputIcon).attrs({ name: 'error' })`
  ${({
    theme: {
      colors: {
        error: { 500: error500 },
      },
    },
  }) => `color: ${error500};`}
`;

const DescriptionLabel = styled.span`
  cursor: text;
  display: block;
  ${({
    theme: {
      spacing: { small },
      baseFontSize: fontSize,
    },
  }) => `
    font-size: ${fontSize * 0.875}px;
    padding: 0 ${small}px;
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
    };

    this._id = id || ID_GENERATOR.next().value;
  }

  onChangeInput = ev => {
    const { onChange } = this.props;
    const inputValue = ev.currentTarget.value;
    this.setState({
      currentValue: inputValue,
    });

    onChange();
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
      ...rest
    } = this.props;
    const { currentValue } = this.state;
    const { type: typeState } = this.state;

    const _isSearchType = typeProp === 'search';
    const _isPassword = typeProp === 'password';
    const hasValue = currentValue && currentValue[0];
    const _hasIcon = error || _isPassword || hasValue;
    const onCleanClick = e => {
      this.setState({
        currentValue: '',
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
            id={this._id}
            required={required}
            type={typeState}
            value={currentValue}
            onChange={this.onChangeInput}
            render={(ref, props) => (
              <TextInput
                ref={ref}
                error={error}
                hasRightIcon={_hasIcon}
                hasLeftIcon={_isSearchType}
                {...props}
              />
            )}
          />
          {error && (
            <InputErrorIcon description={descriptionLabel} theme={theme} />
          )}
          {_isPassword && !error && (
            <InputIcon
              theme={theme}
              name={typeState === 'password' ? 'visibility' : 'visibility_off'}
              description={descriptionLabel}
              onClick={this._toggleInputType}
            />
          )}
          {hasValue && !_isPassword && !error && (
            <InputIcon
              theme={theme}
              name="cancel"
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
};

Input.defaultProps = {
  error: '',
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
};

Input.displayName = 'Input';

export default Input;
