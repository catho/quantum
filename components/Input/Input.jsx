import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { ErrorMessage, Label, FieldGroup, inputStyle } from '../shared';
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
  ${inputStyle}

  box-sizing: border-box;
  margin-top: 8px;
  padding-right: 42px;

  ${({ searchable }) =>
    searchable &&
    `
    padding: 10px 42px 10px 42px;
  `}

  ${props =>
    props.password &&
    `
    padding-right: 28px;
  `}

  &::-webkit-calendar-picker-indicator {
    display: none;
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
    -webkit-box-shadow: 0 0 0px 1000px ${Colors.BLUE['200']} inset;
    -webkit-text-fill-color: ${Colors.BLACK['700']};
  }
`;

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 50px;

  ${({ description }) =>
    description &&
    `
    top: 70px;
  `};
`;

const InputSearchIcon = styled(InputIcon)`
  left: 12px;
`;

const InputErrorIcon = styled(InputIcon)`
  color: ${Colors.ERROR['500']};
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

InputSearchIcon.displayName = 'InputSearchIcon';
InputErrorIcon.displayName = 'InputErrorIcon';
HelperText.displayName = 'HelperText';
DescriptionLabel.displayName = 'DescriptionLabel';
InputTag.displayName = 'InputTag';
InputLabel.displayName = 'InputLabel';

/** A text field component to get user text data */
class Input extends React.Component {
  static CEP = InputTypes.CEP;

  static CNPJ = InputTypes.CNPJ;

  static CPF = InputTypes.CPF;

  static Date = InputTypes.Date;

  static Phone = InputTypes.Phone;

  static Password = InputTypes.Password;

  static counter = 0;

  constructor(props) {
    super(props);

    const { type } = props;

    this.state = {
      type,
    };
  }

  componentWillUpdate(nextProps) {
    const { type } = this.state;
    if (nextProps.type !== type) {
      this.state.type = nextProps.type;
    }
  }

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

  _getId() {
    const { id } = this.props;
    if (id) {
      return id;
    }

    const _id = `input-${Input.counter}`;
    Input.counter += 1;
    return _id;
  }

  render() {
    const {
      label,
      error,
      mask,
      type: inputType,
      descriptionLabel,
      helperText,
      required,
      searchable,
      value,
      ...rest
    } = this.props;
    const { type } = this.state;
    const valueIsTyped = !!value;
    const generateId = this._getId();

    return (
      <InputFieldGroup>
        {label && (
          <InputLabel htmlFor={generateId} error={error}>
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </InputLabel>
        )}
        {descriptionLabel && (
          <DescriptionLabel>{descriptionLabel}</DescriptionLabel>
        )}
        {searchable && (
          <InputSearchIcon name="search" description={descriptionLabel} />
        )}
        <MaskedInput
          {...rest}
          id={generateId}
          type={type}
          mask={mask}
          value={value}
          render={(ref, props) => (
            <InputTag
              ref={ref}
              error={error}
              searchable={searchable}
              {...props}
            />
          )}
        />
        {error && (
          <InputErrorIcon name="error" description={descriptionLabel} />
        )}
        {inputType === 'password' && !error && (
          <InputIcon
            name={type === 'password' ? 'visibility' : 'visibility_off'}
            description={descriptionLabel}
            onClick={this._showPassword}
          />
        )}
        {valueIsTyped && !error && (
          <InputIcon name="cancel" description={descriptionLabel} />
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
  searchable: false,
  placeholder: '',
  onChange: () => {},
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
  /** set if the input is disabled */
  disabled: PropTypes.bool,
  /** set if the input is searchable */
  searchable: PropTypes.bool,
  /** set the input placeholder */
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
  onChange: PropTypes.func,
};

Input.displayName = 'Input';

export default Input;
