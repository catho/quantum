import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { shadow, normalizeChars } from '../shared';
import { baseFontSize, colors, spacing } from '../shared/theme';
import Icon from '../Icon';

import {
  TextInput,
  InputLabel,
  InputErrorMessage,
  HelperText,
} from '../Input/sub-components';
import useKeyPress from './SubComponents/UseKeyPress';

const Wrapper = styled.div`
  position: relative;
`;

const InputText = styled(TextInput)`
  margin-top: 8px;
`;

const ITEM_HEIGHT = '44px';
const MAX_ITEMS_VISIBILITY = 7;
const DROPITEM_FONT_SIZE = baseFontSize * 0.875;

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  ${({
    theme: {
      spacing: { xsmall, medium },
    },
  }) => `
    right: ${medium}px;
    bottom: ${xsmall * 4.6}px;
    width: ${baseFontSize * 1.5}px;
  `}
`;

const InputErrorIcon = styled(InputIcon).attrs({ name: 'error' })`
  ${({
    theme: {
      colors: {
        error: { 700: error700 },
      },
      spacing: { medium },
    },
  }) => `
  color: ${error700};
  bottom: ${medium * 4}px;
  `}
`;

const List = styled.ul`
  border-radius: 4px;
  box-sizing: border-box;
  list-style: none;
  max-height: calc(${ITEM_HEIGHT} * ${MAX_ITEMS_VISIBILITY});
  overflow: auto;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 9999;

  ${({ theme }) => {
    const {
      spacing: { xxsmall },
      colors: {
        neutral: { 0: neutral0, 700: neutral700 },
      },
    } = theme;

    return css`
      background-color: ${neutral0};
      margin-top: ${xxsmall}px;
      ${shadow(3, neutral700)({ theme })};
    `;
  }}
`;

const ListItens = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 42px;
  ${({
    theme: {
      spacing: { xsmall, medium },
      colors: {
        neutral: { 0: neutral0 },
      },
    },
  }) => css`
    font-size: ${DROPITEM_FONT_SIZE}px;
    background-color: ${neutral0};
    padding: ${xsmall}px ${medium}px;
  `}
  &[aria-selected = 'true' ], &:hover {
    ${({
      theme: {
        colors: {
          neutral: { 100: neutral100 },
        },
      },
    }) => css`
      background-color: ${neutral100};
    `}
  }
`;

const PoliteStatus = styled.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const AutoComplete = ({
  id,
  name,
  label,
  error,
  disabled,
  helperText,
  placeholder,
  suggestions,
  theme,
  selectedItem,
}) => {
  const [userTypedValue, setUserTypedValue] = useState('');
  const [filterSuggestions, setFilterSuggestions] = useState(suggestions);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cursor, setCursor] = useState(0);

  const wrapperRef = useRef();
  const listOptions = useRef();

  const filterItens = value =>
    suggestions.filter(suggestion =>
      suggestion.includes(normalizeChars(value.toLowerCase())),
    );

  const handleChange = ({ target }) => {
    setUserTypedValue(target.value);
    if (selectedItem) selectedItem(target.value);
    setCursor(0);
    setShowSuggestions(true);
    filterItens(target.value);
    setFilterSuggestions(filterItens(target.value));
  };

  /* istanbul ignore next */
  const handleClickOutside = event => {
    if (!wrapperRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleInputClick = () => {
    setFilterSuggestions(filterItens(userTypedValue));
    setShowSuggestions(true);
  };

  const handleItemClick = item => {
    setUserTypedValue(item);
    if (selectedItem) selectedItem(item);
    setShowSuggestions(false);
  };

  const handleClearValue = () => {
    setUserTypedValue('');
  };

  /* istanbul ignore next */
  const handleEscPress = ({ key }) => {
    if (key === 'Escape') {
      setShowSuggestions(false);
      wrapperRef.current.children[1].focus();
      setCursor(0);
    }
  };

  const generateSuggestions = () =>
    showSuggestions && filterSuggestions ? (
      <List
        theme={theme}
        role="listbox"
        id="autocompleteOptions"
        ref={listOptions}
      >
        {filterSuggestions.map((item, index) => (
          <ListItens
            key={item}
            aria-posinset={index}
            onClick={() => handleItemClick(item)}
            theme={theme}
            aria-selected={index === cursor}
            role="option"
            tabIndex="-1"
          >
            {item}
          </ListItens>
        ))}
      </List>
    ) : null;

  const generateAssistiveDescript = () => {
    if (showSuggestions) {
      return `${filterSuggestions.length} estão disponiveis. ${
        filterSuggestions[cursor]
      } ${cursor + 1} de ${filterSuggestions.length} está destacado`;
    }
    return `${filterSuggestions.length} estão disponiveis.`;
  };

  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const tabPress = useKeyPress('Tab');

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestions.length && downPress) {
      const selectedCursor =
        cursor < filterSuggestions.length - 1 ? cursor + 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [downPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestions.length && upPress) {
      const selectedCursor = cursor > 0 ? cursor - 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
    if (upPress && cursor === 0) {
      wrapperRef.current.children[1].focus();
      setCursor(-1);
    }
  }, [upPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestions.length && enterPress) {
      setUserTypedValue(filterSuggestions[cursor]);
      setShowSuggestions(false);
      wrapperRef.current.children[1].focus();
    }
  }, [cursor, enterPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && tabPress) {
      setUserTypedValue(filterSuggestions[cursor]);
      setShowSuggestions(false);
    } else if (tabPress) {
      setShowSuggestions(false);
    }
  }, [tabPress]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <InputLabel htmlFor={id} error={error}>
        {label}
      </InputLabel>
      <InputText
        id={id}
        name={name}
        type="text"
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete="off"
        role="combobox"
        aria-owns="autocompleteOptions"
        aria-autocomplete="both"
        aria-expanded={showSuggestions}
        value={userTypedValue}
        onClick={() => handleInputClick()}
        onChange={e => handleChange(e)}
      />
      {userTypedValue && !error && !disabled && (
        <InputIcon
          theme={theme}
          name="clear"
          description="limpar valor"
          onClick={() => handleClearValue()}
        />
      )}
      {generateSuggestions()}
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && <InputErrorMessage theme={theme}>{error}</InputErrorMessage>}
      {error && <InputErrorIcon description={error} theme={theme} />}
      <PoliteStatus role="status" aria-atomic="true" aria-live="polite">
        {generateAssistiveDescript()}
      </PoliteStatus>
    </Wrapper>
  );
};

AutoComplete.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
  /** A list of string or objects with the values to show in component */
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  /** Displays an error message and changes border color to error color */
  error: PropTypes.string,
  disabled: PropTypes.bool,
  /** Displays a label text that describes the field */
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  /** Callback function to receive user typed value and user selected value */
  selectedItem: PropTypes.func,
  /** Displays a helper text below the component */
  helperText: PropTypes.string,
};

AutoComplete.defaultProps = {
  theme: {
    spacing,
    colors,
  },
  id: '',
  name: '',
  label: '',
  helperText: '',
  error: '',
  disabled: false,
  placeholder: 'Select an option',
  selectedItem: () => {},
};

export default AutoComplete;
