import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import InputTypes from './InputTypes';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import theme from '../../theme';
import maskFn from '../Mask';

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

const Link = styled.a`
  color: ${Colors.SECONDARY['500']};
  font-size: 14px;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 8px;
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

  ${props => props.passwordLink && `
    padding-right: 140px;
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

    const { value } = props;

    this.state = { value };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.state.value = nextProps.value;
    }
  }

  onChange = (e) => {
    const { onChange } = this.props;
    const { target: { value } } = e;

    this.setState({ value });

    onChange(e, { value });
  }

  render() {
    const {
      id,
      label,
      error,
      onChange,
      passwordLink,
      mask,
      ...rest
    } = this.props;
    const { value } = this.state;

    const parsed = mask ? maskFn({ value, pattern: mask }) : value;

    return (
      <InputFieldGroup>
        <InputTag
          {...rest}
          id={id}
          passwordLink={passwordLink}
          onChange={this.onChange}
          value={parsed}
          error={error}
        />

        { label &&
          <InputLabel
            htmlFor={id}
            error={error}
            withValue={!!parsed}
          >
            {label}
          </InputLabel>
        }
        {
          passwordLink &&
          <Link href={passwordLink} title="Esqueceu a senha?">Esqueceu a senha?</Link>
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
  mask: '',
  maxLength: '',
  passwordLink: '',
  type: 'text',
  value: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

Input.propTypes = {
  /** Display an error message and changes border color to error color */
  error: PropTypes.string,
  /** An html identification */
  id: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  /** Set a text mask that filter user input */
  maxLength: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'text',
    'tel',
    'number',
    'link',
    'password',
  ]),
  // TODO: documentation
  mask: PropTypes.string,
  passwordLink: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Input;
