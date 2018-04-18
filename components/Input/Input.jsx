import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import Masked from 'react-text-mask';
import InputTypes from './InputTypes';

import { ErrorMessage, Label, FieldGroup } from '../shared';
import Colors from '../Colors';
import theme from '../../theme';

/** A text field component to get user text data */
const StyledInput = styled.input`
  ${theme.mixins.transition()};

  border: 1px solid ${Colors.NEUTRAL.DARKERGRAY.WARMGREY};
  border-radius: ${theme.sizes.radius};
  height: ${theme.sizes.fieldHeight};
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  box-sizing: border-box;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &:focus {
    border-color: ${Colors.PRIMARY.BLUE.PEACOCK};
  }

  ${props => props.error && `
    border-color: ${Colors.SECONDARY.PINK.LIPSTICK};
  `}
`;

class Input extends React.Component {
  static CEP = InputTypes.CEP;
  static CNPJ = InputTypes.CNPJ;
  static CPF = InputTypes.CPF;
  static Date = InputTypes.Date;
  static Phone = InputTypes.Phone;

  onChange = (e) => {
    this.props.onChange({ value: e.target.value });
  }

  render() {
    const {
      id,
      label,
      error,
      mask,
      ...rest
    } = this.props;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }
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

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FieldGroup>
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
  placeholder: '',
  type: 'text',
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
  placeholder: PropTypes.string,
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
};

export default Input;
