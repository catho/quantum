/* eslint-disable no-param-reassign */
import { useState, useEffect, forwardRef } from 'react';
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

const _fontSize = 16;
const _linHeight = 1.5;

export const TextAreaComponent = props => {
  const {
    id = ID_GENERATOR.next().value,
    value,
    onChange,
    label,
    disabled,
    required,
    helperText,
    error,
    placeholder,
    theme,
    skin,
    isAutoResize,
    autoResizeConfig: { initialRows, minRows, maxRows },
    innerRef,
    ...rest
  } = props;

  const [hasDefaultValue, setHasDefaultValue] = useState(!!value?.length);
  const [currentValue, setCurrentValue] = useState(value);
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const onChangeTextArea = event => {
    const { target } = event;
    const textareaLineHeightInPx = _fontSize * _linHeight;
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
    setCurrentValue(inputValue);
    setHasDefaultValue(false);
    setRows(currentRowsNumber < maxRows ? currentRowsNumber : maxRows);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <FieldGroup theme={theme} skin={skin}>
      {label && (
        <InputLabel htmlFor={id}>
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
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        id={id}
        required={required}
        as="textarea"
        onChange={onChangeTextArea}
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
};

TextAreaComponent.defaultProps = {
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

TextAreaComponent.propTypes = {
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
  <TextAreaComponent {...props} innerRef={ref} />
));
