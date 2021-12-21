import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { shadow, normalizeChars } from '../shared';
import { baseFontSize, colors, spacing } from '../shared/theme';

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
        neutral: { 0: neutral0, 300: neutral300 },
      },
    } = theme;

    return css`
      background-color: ${neutral0};
      margin-top: ${xxsmall}px;
      /* ${shadow(5, neutral300)({ theme })}; */
      box-shadow: 0px 2px 4px rgba(47, 46, 46, 0.5);
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

  ${({ isSelected }) =>
    isSelected &&
    css`
      display: flex;
      justify-content: space-between;
    `}
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

  const handleClickOutside = event => {
    if (!wrapperRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleItemClick = item => {
    setUserTypedValue(item);
    if (selectedItem) selectedItem(item);
    setShowSuggestions(false);
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

  const handleInputClick = () => {
    setFilterSuggestions(filterItens(userTypedValue));
    setShowSuggestions(true);
  };

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

  useEffect(() => {
    if (filterSuggestions.length && downPress) {
      const selectedCursor =
        cursor < filterSuggestions.length - 1 ? cursor + 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [downPress]);

  useEffect(() => {
    if (filterSuggestions.length && upPress) {
      const selectedCursor = cursor > 0 ? cursor - 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
    if (upPress && cursor === 0) {
      wrapperRef.current.children[1].focus();
      setCursor(-1);
    }
  }, [upPress]);

  useEffect(() => {
    if (filterSuggestions.length && enterPress) {
      setUserTypedValue(filterSuggestions[cursor]);
      setShowSuggestions(false);
      wrapperRef.current.children[1].focus();
    }
  }, [cursor, enterPress]);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
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
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && <InputErrorMessage theme={theme}>{error}</InputErrorMessage>}
      {generateSuggestions()}
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
  /** A list of string or objects with value and label keys */
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  /** Displays an error message and changes border color to error color */
  error: PropTypes.string,
  /** Displays a label text that describes the field */
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  /** Receives the item of the list to be selected */
  selectedItem: PropTypes.string,
  /** Displays a helper text below the dropdown */
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
  placeholder: 'Select an option',
  selectedItem: undefined,
};

export default AutoComplete;
