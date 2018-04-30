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
  transform: translateY(-20px);
`;

const StyledLabel = styled(Label)`
  cursor: text;
  font-size: 16px;
  left: 0;
  position: absolute;
  top: 0;
  ${theme.mixins.transition()};

  ${props => props.withValue && `
    ${sharedStyle}
  `}

  ${props => props.error && `
    color: ${Colors.DANGER['500']};
  `}
`;

/** A text field component to get user text data */
const StyledInput = styled.input`
  ${theme.mixins.transition()};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${Colors.GREY['300']};
  color: ${Colors.GREY['900']};
  height: 20px;
  width: 100%;
  padding: 0px 3px 5px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;

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

class Input extends React.Component {
  static CEP = InputTypes.CEP;
  static CNPJ = InputTypes.CNPJ;
  static CPF = InputTypes.CPF;
  static Date = InputTypes.Date;
  static Phone = InputTypes.Phone;

  constructor(props) {
    super(props);

    this.state = {
      withValue: false,
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
      ...rest
    } = this.props;

    return (
      <FieldGroup>
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
