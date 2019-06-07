import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import Colors from '../Colors';
import { FieldGroup } from '../shared';
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
  ${({ selectedItem }) => !selectedItem && `color: ${Colors.BLACK[400]}`};
`;

const ArrowDown = styled(Icon).attrs({
  name: 'keyboard_arrow_down',
})`
  color: ${Colors.BLACK['700']};
  font-size: 1.5em;
  pointer-events: none;
`;

const InputArrowDown = styled(ArrowDown)`
  position: absolute;
  top: 12px;
  right: 14px;
`;

const DropList = styled.ul`
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  border: solid 1.5px ${Colors.BLACK[100]};
  box-shadow: 0 2px 6px 0 ${Colors.SHADOW[40]};
  box-sizing: border-box;
  list-style: none;
  margin-top: 4px;
  max-height: calc(${ITEM_HEIGHT} * ${MAX_ITEMS_VISIBILITY});
  overflow: auto;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 9999;
`;

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})`
  color: ${Colors.BLUE['500']};
`;

const DropItem = styled.li`
  background-color: ${Colors.WHITE};
  border-bottom: solid 1.5px ${Colors.BLACK[100]};
  box-sizing: border-box;
  cursor: pointer;
  height: ${ITEM_HEIGHT};
  padding: 10px 15px;

  :last-child {
    border-bottom-width: 0;
  }

  &[aria-selected='true'] {
    background-color: ${Colors.BLUE[200]};
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
    items.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) > -1);

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
                      style={{ cursor: 'inherit' }}
                      {...getInputProps({
                        isOpen,
                        placeholder,
                        onClick: openMenu,
                      })}
                      error={error}
                      disabled={disabled}
                      text={_buttonLabel}
                    />
                    <InputArrowDown />
                  </DropContainer>

                  {filteredInput.length > 0 && (
                    <DropList>
                      {filteredInput.map(item => (
                        <DropItem
                          {...getItemProps({
                            item,
                            isSelected: _isEqual(selectedItem, item),
                            key: _getValue(item),
                          })}
                        >
                          {_getLabel(item)}
                          {_isEqual(selectedItem, item) && <CheckIcon />}
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
                  >
                    {_buttonLabel}
                    <ArrowDown />
                  </DropInput>

                  {isOpen && (
                    <DropList>
                      {items.map(item => (
                        <DropItem
                          {...getItemProps({
                            item,
                            isSelected: _isEqual(selectedItem, item),
                            key: _getValue(item),
                          })}
                        >
                          {_getLabel(item)}
                          {_isEqual(selectedItem, item) && <CheckIcon />}
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
};

export default Dropdown;
