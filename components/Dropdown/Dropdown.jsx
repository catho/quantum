import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import { FieldGroup, shadow, createUniqId, normalizeChars } from '../shared';
import { colors, spacing, baseFontSize } from '../shared/theme';

import {
  InputLabel,
  InputErrorMessage,
  RequiredMark,
  TextInput,
  HelperText,
} from '../Input/sub-components';

const uniqId = createUniqId('dropdown-');
const ITEM_HEIGHT = '44px';
const MAX_ITEMS_VISIBILITY = 7;
const DROPITEM_FONT_SIZE = baseFontSize * 0.875;
const DROPITEM_IMAGE_SIZE = '24px';
const ICON_DEFAULT_SIZE = `${baseFontSize * 1.5}px`;

const DropInput = styled(TextInput)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-align: left;

  ${({
    text,
    autocomplete,
    theme: {
      spacing: { xsmall, medium, xxxlarge },
    },
  }) => `
    ${
      autocomplete
        ? `padding: ${xsmall}px ${xxxlarge}px ${xsmall}px ${medium}px;`
        : ''
    }
    ${!text ? 'flex-direction: row-reverse;' : ''}
    color: inherit;
  `};
`;

const ArrowIcon = styled(Icon)`
  pointer-events: none;
  width: ${ICON_DEFAULT_SIZE};

  ${({ selectedItem }) =>
    !selectedItem &&
    `
    color: inherit;
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
      colors: { neutral },
    } = theme;

    return css`
      background-color: ${neutral[0]};
      color: ${neutral[700]};
      margin-top: ${xxsmall}px;
      ${shadow(5, neutral[300])({ theme })};
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
  width: ${DROPITEM_IMAGE_SIZE};
  height: ${DROPITEM_IMAGE_SIZE};
  margin-left: ${spacing.xsmall}px;
`;

DropInput.displayName = 'DropInput';
DropItem.displayName = 'DropItem';
ArrowIcon.displayName = 'ArrowIcon';
SelectedItemLabel.displayName = 'SelectedItemLabel';
DropItemImage.displayName = 'DropItemImage';
DropContainer.displayName = 'DropContainer';

const _getValue = (item) => (item ? item.value || item.label || item : '');
const _getLabel = (item) => (item ? item.label || item.value || item : '');
const _getImage = ({ img }) => img;
const _getImageAlt = ({ alt }) => alt;
const _isEqual = (selected, item) => _getValue(selected) === _getValue(item);

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const List = ({ theme, items, selectedItem = null, getItemProps }) => (
  <DropList theme={theme}>
    {items.map((item) => (
      <DropItem
        theme={theme}
        key={_getValue(item)}
        {...getItemProps({
          item,
          isSelected: _isEqual(selectedItem, item),
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
            <span>{_getLabel(item)}</span>
            {_getImage(item) && (
              <DropItemImage src={_getImage(item)} alt={_getImageAlt(item)} />
            )}
          </>
        )}
      </DropItem>
    ))}
  </DropList>
);

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
  label = '',
  error = '',
  helperText = '',
  required = false,
  disabled = false,
  items = [],
  placeholder = 'Select an option',
  selectedItem = null,
  onChange = () => {},
  autocomplete = false,
  theme = { colors, spacing, baseFontSize },
  id = '',
  name = '',
  ignoreSpecialChars = false,
  skin = 'default',
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

  const [_id] = useState(id || uniqId());

  const inputFilter = (value) =>
    items.filter((item) => {
      let itemValue = _getLabel(item).toLowerCase();
      if (ignoreSpecialChars) {
        itemValue = normalizeChars(itemValue);
        return itemValue.indexOf(normalizeChars(value.toLowerCase())) > -1;
      }
      return itemValue.indexOf(value.toLowerCase()) > -1;
    });

  return (
    <FieldGroup theme={theme} skin={skin}>
      <Downshift
        {...rest}
        selectedItem={selectedItem}
        onChange={onChange}
        itemToString={_getLabel}
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
                  {required && <RequiredMark skin={skin}>*</RequiredMark>}
                </InputLabel>
              )}
              <input
                {...getInputProps({
                  name,
                  type: 'hidden',
                })}
              />
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
                      skin={skin}
                      {...rest}
                    />
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
                    skin={skin}
                    id={_id}
                  >
                    {_buttonLabel}
                    <ArrowIcon
                      name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                      theme={theme}
                    />
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
      {error && <InputErrorMessage skin={skin}>{error}</InputErrorMessage>}
    </FieldGroup>
  );
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
  name: PropTypes.string,
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
  skin: PropTypes.oneOf(['default', 'dark']),
};

export default Dropdown;
