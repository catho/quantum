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
import { spacing, colors, baseFontSize } from '../shared/theme';

const ID_GENERATOR = uniqId('textarea-');

const TextAreaTag = styled(TextInput)`
  && {
    display: block;
    min-height: 108px;
    ${({
      theme: {
        spacing: { xsmall },
      },
    }) => `
      margin-top: ${xsmall}px;`}
    transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
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
    const {
      label,
      required,
      helperText,
      error,
      id,
      theme,
      skin,
      ...rest
    } = this.props;
    const { hasDefaultValue, currentValue } = this.state;

    return (
      <FieldGroup theme={theme} skin={skin}>
        {label && (
          <InputLabel htmlFor={this._id}>
            {label}
            {required && <RequiredMark skin={skin}>*</RequiredMark>}
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
          theme={theme}
          skin={skin}
        />
        {helperText && <HelperText>{helperText}</HelperText>}
        {error && (
          <InputErrorMessage skin={skin} helperText={helperText}>
            {error}
          </InputErrorMessage>
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
  theme: { spacing, colors, baseFontSize },
  skin: 'default',
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
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  skin: PropTypes.oneOf(['default', 'dark']),
};

TextAreaTag.displayName = 'TextAreaTag';

export default TextArea;
