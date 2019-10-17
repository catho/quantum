import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup, uniqId } from '../shared';
import {
  InputLabel,
  InputErrorMessage,
  HelperText,
  RequiredMark,
  TextInput,
} from '../Input/sub-components';

const ID_GENERATOR = uniqId('textarea-');

const TextAreaTag = styled(TextInput)`
  display: block;
  min-height: 108px;
  margin-top: 8px;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    const { id, value } = props;

    this.state = {
      hasDefaultValue: value !== null && value[0],
      currentValue: value,
    };

    this._id = id || ID_GENERATOR.next().value;
  }

  onChangeTextArea = ev => {
    const { onChange } = this.props;
    const inputValue = ev.currentTarget.value;
    this.setState({
      currentValue: inputValue,
      hasDefaultValue: null,
    });

    onChange(ev);
  };

  render() {
    const { label, required, helperText, error, id, ...rest } = this.props;
    const { hasDefaultValue, currentValue } = this.state;

    return (
      <FieldGroup>
        {label && (
          <InputLabel htmlFor={this._id}>
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </InputLabel>
        )}
        <TextAreaTag
          {...rest}
          hasDefaultValue={hasDefaultValue}
          value={currentValue}
          error={error}
          id={this._id}
          required={required}
          as="textarea"
          onChange={this.onChangeTextArea}
        />
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && (
          <InputErrorMessage helperText={helperText}>{error}</InputErrorMessage>
        )}
      </FieldGroup>
    );
  }
}

TextArea.defaultProps = {
  disabled: false,
  error: '',
  helperText: '',
  label: undefined,
  onChange: () => {},
  placeholder: '',
  required: false,
  value: '',
  id: undefined,
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextAreaTag.displayName = 'TextAreaTag';

export default TextArea;
