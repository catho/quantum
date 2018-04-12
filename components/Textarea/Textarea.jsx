import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';
import { ErrorMessage, Label, FieldGroup } from '../shared';

const Textfield = styled.textarea`
  border: 1px solid ${Colors.NEUTRAL.DARKERGRAY.WARMGREY};
  border-radius: ${theme.sizes.radius};
  box-sizing: border-box;
  color: inherit;
  font-size: 14px;
  font-family: inherit;
  height: 100px;
  padding: 10px;
  resize: none;
  width: 100%;
  ${theme.mixins.transition()};

  &:focus {
    border-color: ${Colors.PRIMARY.BLUE.PEACOCK};
  }

  ${props => props.errorMessage && `
    border-color: ${Colors.ERROR};
  `}
`;

const Infos = styled.div`
  display: flex;
`;

const Countdown = styled.span`
  font-size: 12px;
  margin-left: auto;
  margin-top: 2px;
`;

/**
 * Renders a textarea with an optional prop that shows characters remaining countdown
 */
class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: this.props.maxLength,
    };
  }

  handleOnChange = (e) => {
    this.setState({
      charsLeft: this.props.maxLength - e.target.value.length,
    });
  }

  render() {
    const {
      errorMessage,
      id,
      label,
      maxLength,
      name,
      onBlur,
      onFocus,
      placeholder,
    } = this.props;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }
        <Textfield
          errorMessage={errorMessage}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlur}
          onChange={this.handleOnChange}
          onFocus={onFocus}
          placeholder={placeholder}
        />
        <Infos>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {maxLength && <Countdown>{this.state.charsLeft}</Countdown>}
        </Infos>
      </FieldGroup>
    );
  }
}

Textarea.defaultProps = {
  errorMessage: '',
  maxLength: 300,
  onBlur: () => {},
  onFocus: () => {},
  placeholder: '',
};

Textarea.propTypes = {
  /** Error message */
  errorMessage: PropTypes.string,
  /** Id to associate with label */
  id: PropTypes.string.isRequired,
  /** Textarea label that will be displayed on browser */
  label: PropTypes.string.isRequired,
  /** Textarea max-length */
  maxLength: PropTypes.number,
  /** Textarea name */
  name: PropTypes.string.isRequired,
  /** Blur event handle function */
  onBlur: PropTypes.func,
  /** Focus event handle function */
  onFocus: PropTypes.func,
  /** Placeholder to show a text inside textarea */
  placeholder: PropTypes.string,
};

export default Textarea;
