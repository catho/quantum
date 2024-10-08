import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { normalizeChars } from '../shared';
import Icon from '../Icon';

import {
  TextInput,
  InputLabel,
  InputErrorMessage,
  HelperText,
  RequiredMark,
} from '../Input/sub-components';
import useKeyPress from './SubComponents/UseKeyPress';
import styles from './AutoComplete.module.css';

const NON_FOCUSABLE_SUGGESTION_INDEX = -1;

const AutoComplete = ({
  id = '',
  name = '',
  label = '',
  value = '',
  error = '',
  disabled = false,
  helperText = '',
  placeholder = 'Select an option',
  suggestions,
  onSelectedItem = () => {},
  onChange = () => {},
  required = false,
  skin = 'default',
}) => {
  const wrapperClass = classNames(styles.wrapper, {
    [styles['wrapper-dark']]: skin === 'dark',
  });
  const inputWrapperClass = classNames(styles['input-wrapper']);
  const inputTextClass = classNames(styles['input-text']);
  const inputIconClass = classNames(styles['input-icon']);
  const inputErrorIconClass = classNames(
    styles['input-icon'],
    styles[`input-error-icon-${skin}`],
  );
  const listClass = classNames(styles['list-suggestions'], 'shadow-3');
  const itemClass = classNames(styles['item-suggestions']);
  const politeClass = classNames(styles['polite-status']);

  const [userTypedValue, setUserTypedValue] = useState(value);
  const [filterSuggestions, setFilterSuggestions] = useState(suggestions);
  const [filterSuggestionsLength, setFilterSuggestionsLength] = useState(
    filterSuggestions.length,
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cursor, setCursor] = useState(NON_FOCUSABLE_SUGGESTION_INDEX);
  const wrapperRef = useRef();
  const listOptions = useRef();
  const autoInputRef = useRef(null);
  const EscapeKeyPressValue = 'Escape';
  const assistiveDescriptionDefault = `Digite uma ou mais letras para expandir os resultados. ${filterSuggestionsLength} estão disponiveis.`;
  const assistiveDescriptionDropDownOpen = `${assistiveDescriptionDefault} ${
    filterSuggestions[cursor]
  } 
  ${cursor + 1} de ${filterSuggestionsLength} está destacado`;

  const focusOnInput = () => {
    const input = wrapperRef.current?.children[1];
    if (input) {
      input.focus();
      setCursor(NON_FOCUSABLE_SUGGESTION_INDEX);
    }
  };

  const filterItems = (currentValue) =>
    suggestions.filter((suggestion) => {
      let option = normalizeChars(suggestion.toLowerCase());
      option = normalizeChars(option);
      return (
        option.indexOf(normalizeChars(currentValue.toLowerCase())) >
        NON_FOCUSABLE_SUGGESTION_INDEX
      );
    });

  const handleFilter = (currentValue) => {
    const filteredValues = filterItems(currentValue);
    setShowSuggestions(!!filteredValues.length);
    setFilterSuggestions(filteredValues);
  };

  const handleChange = (currentValue) => {
    setUserTypedValue(currentValue);
    onChange(currentValue);
    setCursor(NON_FOCUSABLE_SUGGESTION_INDEX);
    handleFilter(currentValue);
  };

  const handleClickOutside = (event) => {
    if (!wrapperRef.current?.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleInputClick = () => {
    const filteredItem = filterItems(userTypedValue);
    setFilterSuggestions(filteredItem);
    setShowSuggestions(true);
  };

  const handleItemClick = (item) => {
    setUserTypedValue(item);
    onSelectedItem(item);
    setShowSuggestions(false);
  };

  const handleClearValue = () => {
    setUserTypedValue('');
    onChange('');
    setFilterSuggestions(suggestions);
    setCursor(NON_FOCUSABLE_SUGGESTION_INDEX);
  };

  const handleEscPress = ({ key }) => {
    if (key === EscapeKeyPressValue) {
      setShowSuggestions(false);
      focusOnInput();
    }
  };

  const generateSuggestions = () =>
    showSuggestions && filterSuggestions ? (
      <ul
        role="listbox"
        id="autocompleteOptions"
        ref={listOptions}
        className={listClass}
      >
        {filterSuggestions.map((item, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            key={item}
            aria-posinset={index}
            onClick={() => handleItemClick(item)}
            className={itemClass}
            aria-selected={index === cursor}
            role="option"
            tabIndex="-1"
          >
            {item}
          </li>
        ))}
      </ul>
    ) : null;

  const generateAssistiveDescript = () => {
    if (showSuggestions) {
      return assistiveDescriptionDropDownOpen;
    }
    return assistiveDescriptionDefault;
  };

  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const tabPress = useKeyPress('Tab');

  useEffect(() => {
    setFilterSuggestionsLength(filterSuggestions?.length);
  }, [filterSuggestions]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestionsLength && downPress) {
      const selectedCursor =
        cursor < filterSuggestionsLength - 1 ? cursor + 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
  }, [downPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestionsLength && upPress && cursor > 0) {
      const selectedCursor = cursor > 0 ? cursor - 1 : cursor;
      setCursor(selectedCursor);
      listOptions.current.children[selectedCursor].focus();
    }
    if (upPress && cursor === 0) {
      focusOnInput();
    }
  }, [upPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestionsLength && enterPress) {
      setUserTypedValue(filterSuggestions[cursor]);
      onSelectedItem(filterSuggestions[cursor]);
      setShowSuggestions(false);
      focusOnInput();
    }
  }, [cursor, enterPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (tabPress) {
      if (showSuggestions && cursor !== NON_FOCUSABLE_SUGGESTION_INDEX) {
        setUserTypedValue(filterSuggestions[cursor]);
        onSelectedItem(filterSuggestions[cursor]);
      }
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

  useEffect(() => {
    if (document.activeElement === autoInputRef.current) {
      handleFilter(userTypedValue);
    }
  }, [suggestions]);

  return (
    <div className={wrapperClass}>
      <div className={inputWrapperClass} ref={wrapperRef}>
        <InputLabel htmlFor={id}>
          {label}
          {required && <RequiredMark skin={skin}>*</RequiredMark>}
        </InputLabel>
        <TextInput
          id={id}
          ref={autoInputRef}
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
          onChange={(e) => handleChange(e.target.value)}
          skin={skin}
          required={required}
          className={inputTextClass}
        />
        {userTypedValue && !error && !disabled && (
          <Icon
            name="clear"
            description="limpar valor"
            onClick={() => handleClearValue()}
            className={inputIconClass}
          />
        )}
        {generateSuggestions()}
        {error && (
          <Icon
            name="error"
            description={error}
            className={inputErrorIconClass}
          />
        )}
      </div>
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && <InputErrorMessage skin={skin}>{error}</InputErrorMessage>}
      <div
        role="status"
        aria-atomic="true"
        aria-live="polite"
        className={politeClass}
      >
        {generateAssistiveDescript()}
      </div>
    </div>
  );
};

AutoComplete.propTypes = {
  /** A list of string or objects with the values to show in component */
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string,
  /** Displays an error message and changes border color to error color */
  error: PropTypes.string,
  disabled: PropTypes.bool,
  /** Displays a label text that describes the field */
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  /** Callback function to receive what the user is typing */
  onChange: PropTypes.func,
  /** Callback function to receive user selected value */
  onSelectedItem: PropTypes.func,
  /** Displays a helper text below the component */
  helperText: PropTypes.string,
  required: PropTypes.bool,
  skin: PropTypes.oneOf(['default', 'dark']),
};

export default AutoComplete;
