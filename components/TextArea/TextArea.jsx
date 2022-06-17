/* eslint-disable no-param-reassign */
import { Component, forwardRef } from 'react';
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
      isAutoResize,
    }) => `
      resize: ${!isAutoResize ? 'auto' : 'none'};
      min-height: ${!isAutoResize ? `${CUSTOM_HEIGHT}px` : 'inherit'};
      margin-top: ${xsmall}px;
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
      autoResizeConfig: {
        initialRows,
        minRows: minRowsConfig,
        maxRows: maxRowsConfig,
      },
    } = props;

    this.state = {
      hasDefaultValue: value !== null && value[0],
      currentValue: value,
      rows: initialRows,
      minRows: minRowsConfig,
      maxRows: maxRowsConfig,
    };

    this._id = id || ID_GENERATOR.next().value;
    this._fontSize = 16;
    this._linHeight = 1.5;
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentValue } = this.state;
    const { value } = this.props;

    if (currentValue !== value && prevProps.value !== value) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ ...prevState, currentValue: value });
    }
  }

  onChangeTextArea = event => {
    const { target } = event;
    const { onChange } = this.props;
    const { minRows, maxRows } = this.state;
    const textareaLineHeightInPx = this._fontSize * this._linHeight;
    const previousNumberRows = target.rows;
    target.rows = minRows;

    const currentRowsNumber = Math.floor(
      target.scrollHeight / textareaLineHeightInPx,
    );

    if (currentRowsNumber === previousNumberRows) {
      target.rows = currentRowsNumber;
    }

    if (currentRowsNumber >= maxRows) {
      target.rows = maxRows;
      target.scrollTop = target.scrollHeight;
    }

    const inputValue = event.currentTarget.value;
    this.setState({
      currentValue: inputValue,
      hasDefaultValue: null,
      rows: currentRowsNumber < maxRows ? currentRowsNumber : maxRows,
    });

    onChange(event);
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
      isAutoResize,
      autoResizeConfig,
      innerRef,
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
          ref={innerRef}
          isAutoResize={isAutoResize}
          rows={isAutoResize ? rows : undefined}
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
  isAutoResize: false,
  autoResizeConfig: {
    initialRows: 1,
    minRows: 1,
    maxRows: 5,
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
  innerRef: undefined,
};

TextArea.propTypes = {
  isAutoResize: PropTypes.bool,
  autoResizeConfig: PropTypes.shape({
    initialRows: PropTypes.number,
    minRows: PropTypes.number,
    maxRows: PropTypes.number,
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
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

TextAreaTag.displayName = 'TextAreaTag';

export default forwardRef((props, ref) => (
  <TextArea innerRef={ref} {...props} />
));
