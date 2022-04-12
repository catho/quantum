/* eslint-disable no-param-reassign */
import { Component } from 'react';
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

const CUSTOM_HEIGHT = 108;

const TextAreaTag = styled(TextInput)`
  && {
    display: block;
    ${({
      theme: {
        spacing: { xsmall },
      },
      autoResize,
    }) => `
      margin-top: ${xsmall}px;
      min-height: ${!autoResize ? `${CUSTOM_HEIGHT}px` : 'inherit'};
      resize: ${!autoResize ? 'auto' : 'none'};
      `}
    transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
`;

class TextArea extends Component {
  constructor(props) {
    super(props);

    const {
      id,
      value,
      autoResizeConfig: { rowsConfig, minRowsConfig, maxRowsConfig },
    } = props;

    this.state = {
      hasDefaultValue: value !== null && value[0],
      currentValue: value,
      rows: rowsConfig,
      minRows: minRowsConfig,
      maxRows: maxRowsConfig,
    };

    this._id = id || ID_GENERATOR.next().value;
    this._fontSize = 16;
    this._linHeight = 1.5;
  }

  onChangeTextArea = ev => {
    const { onChange } = this.props;
    const { minRows, maxRows } = this.state;
    const textareaLineHeightInPx = this._fontSize * this._linHeight;
    const previousRows = ev.target.rows;
    ev.target.rows = minRows;

    const currentRows = Math.floor(
      ev.target.scrollHeight / textareaLineHeightInPx,
    );

    if (currentRows === previousRows) {
      ev.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      ev.target.rows = maxRows;
      ev.target.scrollTop = ev.target.scrollHeight;
    }

    const inputValue = ev.currentTarget.value;
    this.setState({
      currentValue: inputValue,
      hasDefaultValue: null,
      rows: currentRows < maxRows ? currentRows : maxRows,
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
      autoResize,
      autoResizeConfig,
      ...rest
    } = this.props;
    const { hasDefaultValue, currentValue, rows } = this.state;

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
          autoResize={autoResize}
          rows={autoResize && rows}
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
  /** Disables the default resize and activates the auto resize */
  autoResize: false,
  autoResizeConfig: {
    rowsConfig: 1,
    minRowsConfig: 1,
    maxRowsConfig: 5,
  },
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
  autoResize: PropTypes.bool,
  autoResizeConfig: PropTypes.shape({
    rowsConfig: PropTypes.number,
    minRowsConfig: PropTypes.number,
    maxRowsConfig: PropTypes.number,
  }),
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
