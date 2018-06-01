import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import MaskedInput from 'react-text-mask';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import Icon from '../Icon';
import theme from '../../theme';
import InputTypes from './InputTypes';

const sharedStyle = css`
  font-size: 12px;
  transform: translateY(-22px);
`;

const InputLabel = styled(Label)`
  cursor: text;
  font-size: 16px;
  left: 0;
  position: absolute;
  top: 6px;
  ${theme.mixins.transition()};

  ${props => props.withValue && `
    ${sharedStyle}
  `}

  ${props => props.error && `
    color: ${Colors.DANGER['500']};
  `}
`;

const InputTag = styled.input`
  ${theme.mixins.transition()};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${Colors.GREY['300']};
  box-sizing: border-box;
  color: ${Colors.GREY['900']};
  font-size: 16px;
  height: 30px;
  padding: 0px 3px;
  outline: none;
  width: 100%;

  ${props => props.password && `
    padding-right: 28px;
  `}

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &:focus {
    border-color: ${Colors.SECONDARY['500']};
  }

  ${props => props.error && `
    border-color: ${Colors.DANGER['500']};
  `}

  &:focus + ${InputLabel} {
    color: ${Colors.SECONDARY['500']};
    ${sharedStyle}
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  right: 2px;
  cursor: pointer;
`;

const InputFieldGroup = styled(FieldGroup)`
  margin-top: 40px;
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

    const {
      value,
      type,
    } = props;

    this.state = {
      value,
      type,
    };
  }

  componentWillUpdate(nextProps) {
    if ((nextProps.value !== this.state.value) ||
        (nextProps.type !== this.state.type)) {
      this.state.value = nextProps.value;
      this.state.type = nextProps.type;
    }
  }

  _onChange = (e) => {
    const { onChange } = this.props;
    const { target: { value } } = e;

    this.setState({ value });

    onChange(e, { value });
  }

  _changeType = (type) => {
    this.setState({ type });
  }

  _showPassword = () => {
    const { type } = this.state;

    if (type === 'text') {
      this._changeType('password');
    } else {
      this._changeType('text');
    }
  }

  render() {
    const {
      id,
      label,
      error,
      mask,
      ...rest
    } = this.props;
    const { value, type } = this.state;

    return (
      <InputFieldGroup>
        <MaskedInput
          {...rest}
          id={id}
          type={type}
          mask={mask}
          value={value}
          onChange={this._onChange}
          render={(ref, props) => (
            <InputTag
              innerRef={ref}
              {...props}
              value={props.defaultValue}
            />
          )}
        />

        { label &&
          <InputLabel
            htmlFor={id}
            error={error}
            withValue={!!value}
          >
            {label}
          </InputLabel>
        }
        {
          this.props.type === 'password' &&
          <InputIcon
            name={type === 'password' ? 'visibility' : 'visibility_off'}
            onClick={this._showPassword}
          />
        }
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'text',
    'tel',
    'number',
    'password',
  ]),
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

export default Input;
