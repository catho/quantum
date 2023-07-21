import { useState, useRef, useEffect } from 'react';
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
  RequiredMark,
} from '../Input/sub-components';
import useKeyPress from './SubComponents/UseKeyPress';

const ITEM_HEIGHT = '44px';
const MAX_ITEMS_VISIBILITY = 7;
const DROPITEM_FONT_SIZE = baseFontSize * 0.875;

const ComponentWrapper = styled.div`
  ${({
    theme: {
      colors: { neutral },
    },
    skin = 'default',
  }) => css`
    position: relative;
    color: ${skin === 'default' ? neutral[700] : neutral[0]};
  `}
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputText = styled(TextInput)`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => css`
    margin-top: ${xsmall}px;
  `}
`;

const InputIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  ${({
    theme: {
      spacing: { xsmall, medium },
    },
  }) => css`
    right: ${medium}px;
    bottom: ${xsmall * 1.25}px;
    width: ${baseFontSize * 1.5}px;
  `}
`;

const InputErrorIcon = styled(InputIcon).attrs({ name: 'error' })`
  ${({
    theme: {
      colors: {
        error: { 700: error700 },
      },
    },
    skin,
  }) => css`
    color: ${skin === 'default' ? error700 : 'inherit'};
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
  z-index: 1;

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

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  height: ${ITEM_HEIGHT};
  ${({
    theme: {
      spacing: { xsmall, medium },
      colors: {
        neutral: { 0: neutral0, 700: neutral700 },
      },
    },
  }) => css`
    color: ${neutral700};
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
  value,
  error,
  disabled,
  helperText,
  placeholder,
  suggestions,
  theme,
  onSelectedItem,
  onChange,
  required,
  skin,
}) => {
  const [userTypedValue, setUserTypedValue] = useState(value);
  const [filterSuggestions, setFilterSuggestions] = useState(suggestions);
  const [filterSuggestionsLength, setFilterSuggestionsLength] = useState(
    filterSuggestions.length,
  );
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cursor, setCursor] = useState(0);
  const wrapperRef = useRef();
  const listOptions = useRef();
  const autoInputRef = useRef(null);
  const EscapeKeyPressValue = 'Escape';
  const assistiveDescriptionDefault = `Digite uma ou mais letras para expandir os resultados. ${filterSuggestionsLength} estão disponiveis.`;
  const assistiveDescriptionDropDownOpen = `${assistiveDescriptionDefault} ${
    filterSuggestions[cursor]
  } 
  ${cursor + 1} de ${filterSuggestionsLength} está destacado`;

  const filterItems = (currentValue) =>
    suggestions.filter((suggestion) => {
      let option = normalizeChars(suggestion.toLowerCase());
      option = normalizeChars(option);
      return option.indexOf(normalizeChars(currentValue.toLowerCase())) > -1;
    });

  const handleFilter = (currentValue) => {
    const filteredValues = filterItems(currentValue);
    setShowSuggestions(!!filteredValues.length);
    setFilterSuggestions(filteredValues);
  };

  const handleChange = (currentValue) => {
    setUserTypedValue(currentValue);
    onChange(currentValue);
    setCursor(0);
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
    setCursor(0);
  };

  const handleEscPress = ({ key }) => {
    const node = wrapperRef.current;
    if (node && key === EscapeKeyPressValue) {
      setShowSuggestions(false);
      node.children[1].focus();
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
        skin={skin}
      >
        {filterSuggestions.map((item, index) => (
          <ListItem
            key={item}
            aria-posinset={index}
            onClick={() => handleItemClick(item)}
            theme={theme}
            aria-selected={index === cursor}
            role="option"
            tabIndex="-1"
          >
            {item}
          </ListItem>
        ))}
      </List>
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
      wrapperRef.current.children[1].focus();
      setCursor(-1);
    }
  }, [upPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && filterSuggestionsLength && enterPress) {
      setUserTypedValue(filterSuggestions[cursor]);
      onSelectedItem(filterSuggestions[cursor]);
      setShowSuggestions(false);
      wrapperRef.current.children[1].focus();
    }
  }, [cursor, enterPress]);

  /* istanbul ignore next */
  useEffect(() => {
    if (showSuggestions && tabPress) {
      setUserTypedValue(filterSuggestions[cursor]);
      onSelectedItem(filterSuggestions[cursor]);
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

  useEffect(() => {
    if (document.activeElement === autoInputRef.current) {
      handleFilter(userTypedValue);
    }
  }, [suggestions]);

  return (
    <ComponentWrapper theme={theme} skin={skin}>
      <InputWrapper ref={wrapperRef}>
        <InputLabel htmlFor={id} error={error}>
          {label}
          {required && <RequiredMark skin={skin}>*</RequiredMark>}
        </InputLabel>
        <InputText
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
        {error && (
          <InputErrorIcon description={error} theme={theme} skin={skin} />
        )}
      </InputWrapper>
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && (
        <InputErrorMessage theme={theme} skin={skin}>
          {error}
        </InputErrorMessage>
      )}
      <PoliteStatus role="status" aria-atomic="true" aria-live="polite">
        {generateAssistiveDescript()}
      </PoliteStatus>
    </ComponentWrapper>
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

AutoComplete.defaultProps = {
  theme: {
    spacing,
    colors,
  },
  id: '',
  name: '',
  label: '',
  value: '',
  helperText: '',
  error: '',
  disabled: false,
  placeholder: 'Select an option',
  onChange: () => {},
  onSelectedItem: () => {},
  required: false,
  skin: 'default',
};

export default AutoComplete;
