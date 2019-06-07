import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import { FieldGroup, shadow } from '../shared';

import { colors, spacing } from '../shared/theme';

import {
  InputLabel,
  InputErrorMessage,
  RequiredMark,
  TextInput,
} from '../Input/sub-components';

const ITEM_HEIGHT = '44px';
const MAX_ITEMS_VISIBILITY = 7;

const DropInput = styled(TextInput)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  ${({ text }) => !text && 'flex-direction: row-reverse;'};
  ${({
    selectedItem,
    theme: {
      colors: {
        neutral: { 500: neutral500 },
      },
    },
  }) =>
    !selectedItem &&
    `
    color: ${neutral500};
  `};
`;

const ArrowDown = styled(Icon).attrs({
  name: 'keyboard_arrow_down',
})`
  font-size: 1.5em;
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
        neutral: { 100: neutral100, 300: neutral300 },
      },
    } = theme;

    return `
      background-color: ${neutral100};
      border: solid 1.5px ${neutral100};
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
        primary: { 500: primary },
      },
    },
  }) =>
    !selectedItem &&
    `
    color: ${primary};
  `}
`;

const DropItem = styled.li`
  box-sizing: border-box;
  cursor: pointer;

  ${({
    theme: {
      spacing: { xsmall, small },
      colors: {
        neutral: { 100: neutral100, 300: neutral300 },
      },
    },
  }) => `
    background-color: ${neutral100};
    border-bottom: solid 1.5px ${neutral300};
    padding: ${xsmall * 1.125}px ${small}px;
  `}

  :last-child {
    border-bottom-width: 0;
  }

  &[aria-selected='true'] {
    ${({
      theme: {
        colors: {
          primary: { 100: primary },
        },
      },
    }) => `
      background-color: ${primary};
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

const _getValue = item => (item ? item.value || item.label || item : '');
const _getLabel = item => (item ? item.label || item.value || item : '');
const _isEqual = (selected, item) => _getValue(selected) === _getValue(item);

const Dropdown = ({
  label,
  error,
  required,
  disabled,
  items,
  placeholder,
  selectedItem,
  onChange,
  autocomplete,
  theme,
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

  const inputFilter = value =>
    items.filter(
      item =>
        _getValue(item)
          .toLowerCase()
          .indexOf(value.toLowerCase()) > -1,
    );

  return (
    <FieldGroup>
      <Downshift
        {...rest}
        selectedItem={selectedItem}
        onChange={onChange}
        itemToString={_getValue}
        stateReducer={_highlightedReducer}
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
            <DropContainer {...getRootProps()}>
              {label && (
                <InputLabel
                  {...getLabelProps()}
                  onClick={() => openMenu()}
                  error={error}
                  disabled={disabled}
                >
                  {label}
                  {required && <RequiredMark>*</RequiredMark>}
                </InputLabel>
              )}
              <input type="hidden" {...getInputProps()} />
              {autocomplete ? (
                <>
                  <DropContainer>
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
                    />
                    <InputArrowDown theme={theme} />
                  </DropContainer>

                  {filteredInput.length > 0 && (
                    <DropList theme={theme}>
                      {filteredInput.map(item => (
                        <DropItem
                          theme={theme}
                          {...getItemProps({
                            item,
                            isSelected: _isEqual(selectedItem, item),
                            key: _getValue(item),
                          })}
                        >
                          {_getLabel(item)}
                          {_isEqual(selectedItem, item) && (
                            <CheckIcon theme={theme} />
                          )}
                        </DropItem>
                      ))}
                    </DropList>
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
                    text={_buttonLabel}
                    selectedItem={selectedItem}
                    theme={theme}
                  >
                    {_buttonLabel}
                    <ArrowDown theme={theme} />
                  </DropInput>

                  {isOpen && (
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
                          {_getLabel(item)}
                          {_isEqual(selectedItem, item) && (
                            <CheckIcon theme={theme} />
                          )}
                        </DropItem>
                      ))}
                    </DropList>
                  )}
                </>
              )}
            </DropContainer>
          );
        }}
      </Downshift>

      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </FieldGroup>
  );
};

Dropdown.defaultProps = {
  autocomplete: false,
  disabled: false,
  error: '',
  items: [],
  label: '',
  onChange: () => {},
  placeholder: 'Select an option',
  required: false,
  selectedItem: '',
  theme: { colors, spacing },
};

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

Dropdown.propTypes = {
  autocomplete: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  /** A list of string or objects with value and label keys */
  items: PropTypes.arrayOf(itemPropType),
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  selectedItem: itemPropType,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default Dropdown;
