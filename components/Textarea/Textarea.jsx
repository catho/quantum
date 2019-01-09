import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import theme from '../../theme';
import { ErrorMessage, Label, FieldGroup } from '../shared';

const Textfield = styled.textarea`
  border: 1px solid ${Colors.SECONDARY['900']};
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
    border-color: ${Colors.PRIMARY['500']};
  }

  ${props =>
    props.error &&
    `
    border-color: ${Colors.DANGER['500']};
  `};
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

    const { value, maxLength } = props;

    this.state = {
      value,
      charsLeft: maxLength,
    };
  }

  componentWillUpdate(nextProps) {
    const { value } = this.state;

    if (nextProps.value !== value) {
      this.state.value = nextProps.value;
    }
  }

  onChange = e => {
    const { onChange, maxLength } = this.props;
    const {
      target: { value },
    } = e;

    this.setState({
      value,
      charsLeft: maxLength - e.target.value.length,
    });

    onChange(e, { value });
  };

  render() {
    const { error, id, label, maxLength, ...rest } = this.props;
    const { value, charsLeft } = this.state;

    return (
      <FieldGroup>
        {label && <Label htmlFor={id}> {label} </Label>}
        <Textfield
          {...rest}
          error={error}
          id={id}
          maxLength={maxLength}
          onChange={this.onChange}
          value={value}
        />
        <Infos>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {maxLength && <Countdown>{charsLeft}</Countdown>}
        </Infos>
      </FieldGroup>
    );
  }
}

Textarea.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  error: '',
  id: '',
  name: '',
  maxLength: 300,
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
};

Textarea.propTypes = {
  value: PropTypes.string,
  /** Textarea label that will be displayed on browser */
  label: PropTypes.string,
  /** Placeholder to show a text inside textarea */
  placeholder: PropTypes.string,
  /** Error message */
  error: PropTypes.string,
  /** Id to associate with label */
  id: PropTypes.string,
  /** Textarea name */
  name: PropTypes.string,
  /** Textarea max-length */
  maxLength: PropTypes.number,
  /** Blur event handle function */
  onBlur: PropTypes.func,
  /** Focus event handle function */
  onFocus: PropTypes.func,
  /** Change event handle function */
  onChange: PropTypes.func,
};

export default Textarea;
