import { Component } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';
import { FieldGroup, createUniqId } from '../shared';
import Icon from '../Icon';
// eslint-disable-next-line import/no-cycle
import InputTypes from './InputTypes';
import {
  TextInput,
  InputLabel,
  HelperText,
  RequiredMark,
  InputErrorMessage,
} from './sub-components';
import styles from './Input.module.css';

const uniqId = createUniqId('input-');

const InputIcon = ({ className, ...rest }) => {
  const inputIconClass = classNames(styles['input-icon'], className);
  return <Icon className={inputIconClass} {...rest} />;
};

const InputSearchIcon = ({ className, ...rest }) => {
  const inputIconClass = classNames(styles['search-icon'], className);
  return <InputIcon name="search" className={inputIconClass} {...rest} />;
};

const InputErrorIcon = ({ className, skin, ...rest }) => {
  const inputIconClass = classNames(
    { [styles['error-icon-default']]: skin === 'default' },
    className,
  );
  return <InputIcon name="error" className={inputIconClass} {...rest} />;
};

InputIcon.displayName = 'InputIcon';
InputSearchIcon.displayName = 'InputSearchIcon';
InputErrorIcon.displayName = 'InputErrorIcon';

/** A text field component to get user text data */
class Input extends Component {
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

    this._id = id || uniqId();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentValue } = this.state;
    const { value } = this.props;

    if (currentValue !== value && prevProps.value !== value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ ...prevState, currentValue: value });
    }
  }

  onChangeInput = (ev) => {
    const { onChange } = this.props;
    const inputValue = ev.currentTarget.value;
    this.setState({
      currentValue: inputValue,
      hasDefaultValue: false,
    });

    onChange(ev);
  };

  _changeType = (type) => {
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
      disabled,
      skin,
      ...rest
    } = this.props;
    const { currentValue, hasDefaultValue } = this.state;
    const { type: typeState } = this.state;

    const _isSearchType = typeProp === 'search';
    const _isPassword = typeProp === 'password';
    const hasValue = currentValue && currentValue[0];
    const _hasIcon = error || _isPassword || hasValue;
    const hasLabel = !!label;
    const onCleanClick = (e) => {
      this.setState({
        currentValue: '',
        hasDefaultValue: false,
      });
      onClean(e);
    };
    const inputWrapperClass = classNames(styles.wrapper);
    const descriptionLabelClass = classNames(styles['description-label']);

    return (
      <FieldGroup skin={skin}>
        {label && (
          <InputLabel htmlFor={this._id}>
            {label}
            {required && <RequiredMark skin={skin}>*</RequiredMark>}
          </InputLabel>
        )}
        {descriptionLabel && (
          <span className={descriptionLabelClass}>{descriptionLabel}</span>
        )}
        <div className={inputWrapperClass}>
          {_isSearchType && <InputSearchIcon description={descriptionLabel} />}
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
                skin={skin}
              />
            )}
          />
          {error && !_isPassword && (
            <InputErrorIcon description={descriptionLabel} skin={skin} />
          )}
          {_isPassword && (
            <InputIcon
              name={typeState === 'password' ? 'visibility' : 'visibility_off'}
              description={descriptionLabel}
              onClick={this._toggleInputType}
            />
          )}
          {hasValue && !_isPassword && !error && !disabled && (
            <InputIcon
              name="clear"
              description={descriptionLabel}
              onClick={onCleanClick}
            />
          )}
        </div>
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && <InputErrorMessage skin={skin}>{error}</InputErrorMessage>}
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
  minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  skin: PropTypes.oneOf(['default', 'dark']),
};

Input.defaultProps = {
  error: '',
  disabled: false,
  id: '',
  label: '',
  mask: (val) => Array(val.length).fill(/./),
  type: 'text',
  value: '',
  helperText: '',
  descriptionLabel: '',
  required: false,
  placeholder: '',
  onClean: () => {},
  onChange: () => {},
  minLength: 0,
  maxLength: 255,
  skin: 'default',
};

Input.displayName = 'Input';

export default Input;
