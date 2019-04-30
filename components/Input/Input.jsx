import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { ErrorMessage, Label, FieldGroup, INPUT_STYLE } from '../shared';
import Colors from '../Colors';
import Icon from '../Icon';
import InputTypes from './InputTypes';
import uniqId from '../shared/uniqId';

const ID_GENERATOR = uniqId('input-');

const {
  default: DEFAULT_INPUT_STYLE,
  LABEL_STYLE,
  HELPER_TEXT_STYLE,
  REQUIRED_MARK_STYLE,
  ERROR_MESSAGE_STYLE,
  AUTO_FILL_STYLE,
} = INPUT_STYLE;

const InputLabel = styled(Label)`
  ${LABEL_STYLE}
`;

const InputTag = styled.input`
  box-sizing: border-box;
  margin-top: 8px;
  padding-right: 42px;

  ${DEFAULT_INPUT_STYLE};

  ${({ searchable }) =>
    searchable &&
    `
    padding: 10px 42px;
  `}

  ${({ password }) =>
    password &&
    `
    padding-right: 28px;
  `}

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  :-webkit-autofill {
    ${AUTO_FILL_STYLE}
  }
`;

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  right: 12px;
  bottom: 10px;
`;

const InputSearchIcon = styled(InputIcon)`
  left: 12px;
`;

const InputErrorIcon = styled(InputIcon)`
  color: ${Colors.ERROR['500']};
`;

const InputErrorMessage = styled(ErrorMessage)`
  ${ERROR_MESSAGE_STYLE}

  ${({ helperText }) =>
    helperText &&
    `
    padding-top: 2px;
  `}
`;

const HelperText = styled.span`
  ${HELPER_TEXT_STYLE}
`;

const DescriptionLabel = styled.span`
  cursor: text;
  display: block;
  font-size: 14px;
  padding: 0px 12px;
`;

const RequiredMark = styled.em`
  ${REQUIRED_MARK_STYLE}
`;

const InputWrapper = styled.div`
  position: relative;
`;

InputIcon.displayName = 'InputIcon';
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

  constructor(props) {
    super(props);

    const { type, id } = props;

    this.state = { type };

    this._id = id || ID_GENERATOR.next().value;
  }

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
      value,
      ...rest
    } = this.props;
    const { type: typeState } = this.state;
    const _isSearchType = typeProp === 'search';

    return (
      <FieldGroup>
        {label && (
          <InputLabel htmlFor={this._id} error={error}>
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </InputLabel>
        )}
        {descriptionLabel && (
          <DescriptionLabel>{descriptionLabel}</DescriptionLabel>
        )}
        <InputWrapper>
          {_isSearchType && (
            <InputSearchIcon name="search" description={descriptionLabel} />
          )}
          <MaskedInput
            {...rest}
            id={this._id}
            required={required}
            type={typeState}
            value={value}
            render={(ref, props) => (
              <InputTag
                ref={ref}
                error={error}
                searchable={_isSearchType}
                {...props}
              />
            )}
          />
          {error && (
            <InputErrorIcon name="error" description={descriptionLabel} />
          )}
          {typeProp === 'password' && !error && (
            <InputIcon
              name={typeState === 'password' ? 'visibility' : 'visibility_off'}
              description={descriptionLabel}
              onClick={this._toggleInputType}
            />
          )}
          {!!value && !error && (
            <InputIcon name="cancel" description={descriptionLabel} />
          )}
        </InputWrapper>
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && (
          <InputErrorMessage helperText={helperText}>{error}</InputErrorMessage>
        )}
      </FieldGroup>
    );
  }
}

Input.defaultProps = {
  error: '',
  id: '',
  label: '',
  mask: false,
  type: 'text',
  value: '',
  helperText: '',
  descriptionLabel: '',
  required: false,
  placeholder: '',
};

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
};

Input.displayName = 'Input';

export default Input;
