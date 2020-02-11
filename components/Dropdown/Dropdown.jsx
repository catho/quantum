import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import { FieldGroup, shadow, uniqId } from '../shared';
import { colors, spacing, baseFontSize } from '../shared/theme';

import {
  InputLabel,
  InputErrorMessage,
  RequiredMark,
  TextInput,
  HelperText,
} from '../Input/sub-components';

const ID_GENERATOR = uniqId('dropdown-');
const ITEM_HEIGHT = '44px';
const MAX_ITEMS_VISIBILITY = 7;
const DROPITEM_FONT_SIZE = baseFontSize * 0.875;
const DROPITEM_IMAGE_SIZE = '24px';

const DropInput = styled(TextInput)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  ${({
    text,
    autocomplete,
    theme,
    theme: {
      colors: {
        neutral: { 900: neutral900, 500: neutral500 },
      },
      spacing: { xsmall, medium, xxxlarge },
    },
  }) => `
    ${
      autocomplete
        ? `padding: ${xsmall}px ${xxxlarge}px ${xsmall}px ${medium}px;`
        : ''
    }
    ${!text ? 'flex-direction: row-reverse;' : ''}
    color: ${neutral900};
    ${shadow(5, neutral500)({ theme })};
  `};
`;

const ArrowDown = styled(Icon).attrs({
  name: 'arrow_drop_down',
})`
  pointer-events: none;

  ${({
    selectedItem,
    theme: {
      colors: {
        neutral: { 700: neutral700 },
      },
    },
  }) =>
    !selectedItem &&
    `
    color: ${neutral700};
  `}
`;

const ArrowUp = styled(Icon).attrs({
  name: 'arrow_drop_up',
})`
  pointer-events: none;

  ${({
    selectedItem,
    theme: {
      colors: {
        neutral: { 700: neutral700 },
      },
    },
  }) =>
    !selectedItem &&
    `
    color: ${neutral700};
  `}
`;

const InputArrowDown = styled(ArrowDown)`
  position: absolute;

  ${({
    theme: {
      spacing: { small, medium },
    },
  }) => `
    top: ${small}px;
    right: ${medium * 0.875}px;
  `}
`;

const InputArrowUp = styled(ArrowUp)`
  position: absolute;

  ${({
    theme: {
      spacing: { small, medium },
    },
  }) => `
    top: ${small}px;
    right: ${medium * 0.875}px;
  `}
`;

const DropList = styled.ul`
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

    return `
      background-color: ${neutral0};
      margin-top: ${xxsmall}px;
      ${shadow(5, neutral300)({ theme })};
    `;
  }}
`;

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})`
  ${({
    selectedItem,
    theme: {
      colors: {
        primary: { 700: primary700 },
      },
    },
  }) =>
    !selectedItem &&
    `
    color: ${primary700};
  `}
`;

const DropItem = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  height: 42px;
  ${({
    theme: {
      spacing: { xsmall, medium },
      colors: {
        neutral: { 0: neutral0 },
      },
    },
  }) => `
    font-size: ${DROPITEM_FONT_SIZE}px;
    background-color: ${neutral0};
    padding: ${xsmall}px ${medium}px;
  `}
  &[aria-selected= 'true' ] {
    ${({
      theme: {
        colors: {
          neutral: { 100: neutral100 },
        },
      },
    }) => `
      background-color: ${neutral100};
    `}
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    display: flex;
    justify-content: space-between;
  `}
`;

const DropContainer = styled.div`
  position: relative;
`;

const SelectedItemLabel = styled.span`
  ${({
    theme: {
      colors: {
        primary: { 700: primary700 },
      },
    },
  }) => `
    color: ${primary700}
  `}
`;

const DropItemImage = styled.img`
  float: right;
  width: ${DROPITEM_IMAGE_SIZE};
  height: ${DROPITEM_IMAGE_SIZE};
`;

const DropItemLabel = styled.span`
  vertical-align: middle;
`;

DropInput.displayName = 'DropInput';
DropItem.displayName = 'DropItem';
SelectedItemLabel.displayName = 'SelectedItemLabel';
ArrowDown.displayName = 'ArrowDown';
ArrowUp.displayName = 'ArrowUp';
DropItemImage.displayName = 'DropItemImage';

const _getValue = item => (item ? item.value || item.label || item : '');
const _getLabel = item => (item ? item.label || item.value || item : '');
const _getImage = item => (item ? item.img : null);
const _getImageAlt = item => (item ? item.alt : null);
const _isEqual = (selected, item) => _getValue(selected) === _getValue(item);

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const List = ({ theme, items, selectedItem, getItemProps }) => (
  <DropList theme={theme}>
    {items.map(item => (
      <DropItem
        theme={theme}
        {...getItemProps({
          item,
          isSelected: _isEqual(selectedItem, item),
          key: _getValue(item),
        })}
      >
        {_isEqual(selectedItem, item) ? (
          <>
            <SelectedItemLabel theme={theme}>
              {_getLabel(item)}
            </SelectedItemLabel>

            {_getImage(item) ? (
              <DropItemImage src={_getImage(item)} alt={_getImageAlt(item)} />
            ) : (
              <CheckIcon theme={theme} />
            )}
          </>
        ) : (
          <>
            <DropItemLabel>{_getLabel(item)}</DropItemLabel>
            {_getImage(item) && (
              <DropItemImage src={_getImage(item)} alt={_getImageAlt(item)} />
            )}
          </>
        )}
      </DropItem>
    ))}
  </DropList>
);

List.defaultProps = {
  selectedItem: null,
};

List.propTypes = {
  selectedItem: itemPropType,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }).isRequired,
  items: PropTypes.arrayOf(itemPropType).isRequired,
  getItemProps: PropTypes.func.isRequired,
};

const Dropdown = ({
  label,
  error,
  helperText,
  required,
  disabled,
  items,
  placeholder,
  selectedItem,
  onChange,
  autocomplete,
  theme,
  id,
  ignoreSpecialChars,
  ...rest
}) => {
  const _buttonLabel = selectedItem ? _getLabel(selectedItem) : placeholder;

  const _highlightedReducer = ({ selectedItem: selected }, changes) => {
    if (changes.isOpen !== undefined && changes.isOpen) {
      const selectedIndex = items.map(_getValue).indexOf(_getValue(selected));
      const withRange = selectedIndex + Math.floor(MAX_ITEMS_VISIBILITY / 2);
      const { length } = items;

      return {
        ...changes,
        highlightedIndex: withRange < length ? withRange : length - 1,
      };
    }

    return changes;
  };

  const hasLabel = !!label;

  const [_id] = useState(id || ID_GENERATOR.next().value);

  const normalizeChars = value =>
    value.replace(
      /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([òóôõöø])|([ùúûü])|([-_])/g,
      (str, a, c, e, i, o, u, hifen) => {
        if (a) return 'a';
        if (c) return 'c';
        if (e) return 'e';
        if (i) return 'i';
        if (o) return 'o';
        if (u) return 'u';
        if (hifen) return ' ';
        return '';
      },
    );

  const inputFilter = value =>
    items.filter(item => {
      let itemValue = _getValue(item).toLowerCase();
      if (ignoreSpecialChars) {
        itemValue = normalizeChars(itemValue);
        return itemValue.indexOf(normalizeChars(value.toLowerCase())) > -1;
      }
      return itemValue.indexOf(value.toLowerCase()) > -1;
    });

  return (
    <FieldGroup>
      <Downshift
        {...rest}
        selectedItem={selectedItem}
        onChange={onChange}
        itemToString={_getValue}
        stateReducer={_highlightedReducer}
        autocomplete={autocomplete}
      >
        {({
          getRootProps,
          getLabelProps,
          getInputProps,
          getToggleButtonProps,
          getItemProps,
          inputValue,
          openMenu,
          isOpen,
        }) => {
          const filteredInput = isOpen ? inputFilter(inputValue) : [];

          return (
            <DropContainer theme={theme} {...getRootProps()}>
              {label && (
                <InputLabel
                  {...getLabelProps()}
                  error={error}
                  disabled={disabled}
                  htmlFor={_id}
                >
                  {label}
                  {required && <RequiredMark>*</RequiredMark>}
                </InputLabel>
              )}
              <input type="hidden" {...getInputProps()} />
              {autocomplete ? (
                <>
                  <DropContainer theme={theme}>
                    <DropInput
                      {...getInputProps({
                        isOpen,
                        placeholder,
                        onClick: openMenu,
                      })}
                      style={{ cursor: 'inherit' }}
                      error={error}
                      disabled={disabled}
                      text={_buttonLabel}
                      theme={theme}
                      hasLabel={hasLabel}
                      id={_id}
                      autocomplete={autocomplete}
                    />
                    {isOpen ? (
                      <InputArrowUp theme={theme} />
                    ) : (
                      <InputArrowDown theme={theme} />
                    )}
                  </DropContainer>

                  {filteredInput.length > 0 && (
                    <List
                      items={filteredInput}
                      theme={theme}
                      selectedItem={selectedItem}
                      getItemProps={getItemProps}
                    />
                  )}
                </>
              ) : (
                <>
                  <DropInput
                    {...getToggleButtonProps()}
                    as="button"
                    isOpen={isOpen}
                    disabled={disabled}
                    error={error}
                    helperText={helperText}
                    text={_buttonLabel}
                    theme={theme}
                    hasLabel={hasLabel}
                    id={_id}
                  >
                    {_buttonLabel}
                    {isOpen ? (
                      <ArrowUp theme={theme} />
                    ) : (
                      <ArrowDown theme={theme} />
                    )}
                  </DropInput>

                  {isOpen && (
                    <List
                      items={items}
                      theme={theme}
                      selectedItem={selectedItem}
                      getItemProps={getItemProps}
                    />
                  )}
                </>
              )}
            </DropContainer>
          );
        }}
      </Downshift>
      {helperText && <HelperText>{helperText}</HelperText>}
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </FieldGroup>
  );
};

Dropdown.defaultProps = {
  autocomplete: false,
  disabled: false,
  required: false,
  error: '',
  id: '',
  label: '',
  placeholder: 'Select an option',
  selectedItem: null,
  helperText: '',
  items: [],
  onChange: () => {},
  theme: { colors, spacing, baseFontSize },
  ignoreSpecialChars: false,
};

Dropdown.propTypes = {
  /** Displays the list with start typing */
  autocomplete: PropTypes.bool,
  /** Disables component */
  disabled: PropTypes.bool,
  /** Displays a mark to shows thats component is required */
  required: PropTypes.bool,
  /** Displays an error message and changes border color to error color */
  error: PropTypes.string,
  id: PropTypes.string,
  /** Displays a label text that describes the field */
  label: PropTypes.string,
  placeholder: PropTypes.string,
  /** Receives the item of the list to be selected */
  selectedItem: itemPropType,
  /** Displays a helper text below the dropdown */
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  /** A list of string or objects with value and label keys */
  items: PropTypes.arrayOf(itemPropType),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  ignoreSpecialChars: PropTypes.bool,
};

export default Dropdown;
