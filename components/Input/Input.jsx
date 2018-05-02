import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import React from 'react';
import Masked from 'react-text-mask';
import InputTypes from './InputTypes';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import theme from '../../theme';

const sharedStyle = css`
  font-size: 12px;
  transform: translateY(-30px);
`;

const StyledLabel = styled(Label)`
  cursor: text;
  font-size: 16px;
  left: 0;
  position: absolute;
  bottom: 20px;
  ${theme.mixins.transition()};

  ${props => props.withValue && `
    ${sharedStyle}
  `}

  ${props => props.error && `
    color: ${Colors.DANGER['500']};
  `}
`;

const StyledInput = styled.input`
  ${theme.mixins.transition()};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${Colors.GREY['300']};
  box-sizing: border-box;
  color: ${Colors.GREY['900']};
  font-size: 16px;
  height: 30px;
  margin-bottom: 20px;
  padding: 0px 3px;
  outline: none;
  width: 100%;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &:focus {
    border-color: ${Colors.SECONDARY['500']};
  }

  ${props => props.error && `
    border-color: ${Colors.DANGER['500']};
  `}

  &:focus + ${StyledLabel} {
    color: ${Colors.SECONDARY['500']};
    ${sharedStyle}
  }
`;

const StyledFieldGroup = styled(FieldGroup)`
  margin-top: 40px;
`;

/** A text field component to get user text data */
class Input extends React.Component {
  static CEP = InputTypes.CEP;
  static CNPJ = InputTypes.CNPJ;
  static CPF = InputTypes.CPF;
  static Date = InputTypes.Date;
  static Phone = InputTypes.Phone;
  // static Password = InputTypes.Password;

  constructor(props) {
    super(props);

    this.state = {
      withValue: !!props.value,
    };
  }

  onChange = (e) => {
    this.setState({
      withValue: !!e.target.value,
    });

    this.props.onChange(e, { value: e.target.value });
  }

  render() {
    const {
      id,
      label,
      error,
      mask,
      onChange,
      ...rest
    } = this.props;

    return (
      <StyledFieldGroup>
        <Masked
          {...rest}
          id={id}
          mask={mask}
          onChange={this.onChange}
          render={
            (ref, props) => (
              <StyledInput
                {...props}
                error={error}
                innerRef={ref}
              />
            )
          }
        />
        { label &&
          <StyledLabel
            htmlFor={id}
            error={error}
            withValue={this.state.withValue}
          >
            {label}
          </StyledLabel>
        }
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </StyledFieldGroup>
    );
  }
}

Input.defaultProps = {
  error: '',
  id: '',
  label: '',
  mask: false,
  maxLength: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  type: 'text',
  value: '',
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
  ]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
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
  value: PropTypes.string,
};

export default Input;
