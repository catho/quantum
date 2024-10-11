import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import { FieldGroup, createUniqId, normalizeChars } from '../shared';

import {
  InputLabel,
  InputErrorMessage,
  RequiredMark,
  TextInput,
  HelperText,
} from '../Input/sub-components';
import { useTextInputClass } from '../Input/sub-components/TextInput';
import styles from './Dropdown.module.css';

const uniqId = createUniqId('dropdown-');
const MAX_ITEMS_VISIBILITY = 7;

const DropButton = forwardRef(
  (
    { children, className, hasDefaultValue, hasLabel, skin, error, ...rest },
    ref,
  ) => {
    const buttonClass = useTextInputClass({
      hasDefaultValue,
      hasLabel,
      skin,
      error,
      className,
    });

    return (
      <button type="button" ref={ref} className={buttonClass} {...rest}>
        {children}
      </button>
    );
  },
);

const DropContainer = forwardRef(({ children, className, ...rest }, ref) => {
  const dropContainerClass = classNames(styles['drop-container'], className);
  return (
    <div ref={ref} className={dropContainerClass} {...rest}>
      {children}
    </div>
  );
});

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

const List = ({ items, selectedItem = null, getItemProps }) => {
  const imageItemClass = classNames(styles['drop-image-item']);
  const checkIconClass = classNames(styles['check-icon-without-selected-item']);
  const dropListClass = classNames(styles['drop-list']);
  const itemClass = classNames(styles['drop-item']);
  const itemSelectedLabelClass = classNames(
    styles['drop-item-item-selected-label'],
  );

  return (
    <ul className={dropListClass}>
      {items.map((item) => (
        <li
          className={`${itemClass} ${_isEqual(selectedItem, item) ? styles['drop-item-item-selected'] : ''}`}
          key={_getValue(item)}
          {...getItemProps({
            item,
          })}
        >
          {_isEqual(selectedItem, item) ? (
            <>
              <span className={itemSelectedLabelClass}>{_getLabel(item)}</span>

              {_getImage(item) ? (
                <img
                  className={imageItemClass}
                  src={_getImage(item)}
                  alt={_getImageAlt(item)}
                />
              ) : (
                <Icon name="check" className={checkIconClass} />
              )}
            </>
          ) : (
            <>
              <span>{_getLabel(item)}</span>
              {_getImage(item) && (
                <img
                  className={imageItemClass}
                  src={_getImage(item)}
                  alt={_getImageAlt(item)}
                />
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  selectedItem: itemPropType,
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
  id = '',
  name = '',
  ignoreSpecialChars = false,
  skin = 'default',
  ...rest
}) => {
  const _buttonLabel = selectedItem ? _getLabel(selectedItem) : placeholder;
  const dropdownButtonClass = classNames(styles['dropdown-button'], {
    [styles['without-text']]: !_buttonLabel,
  });
  const dropdownInputClass = classNames(styles['dropdown-input'], {
    [styles['without-text']]: !_buttonLabel,
    [styles['dropdown-input-autocomplete']]: autocomplete,
  });
  const arrowIconClass = classNames(styles['arrow-icon']);

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
    <FieldGroup skin={skin}>
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
            <DropContainer {...getRootProps()}>
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
                  <DropContainer>
                    <TextInput
                      {...getInputProps({
                        placeholder,
                        onClick: openMenu,
                      })}
                      style={{ cursor: 'inherit' }}
                      error={error}
                      disabled={disabled}
                      text={_buttonLabel}
                      hasLabel={hasLabel}
                      id={_id}
                      autocomplete={autocomplete}
                      skin={skin}
                      className={dropdownInputClass}
                      {...rest}
                    />
                  </DropContainer>

                  {filteredInput.length > 0 && (
                    <List
                      items={filteredInput}
                      selectedItem={selectedItem}
                      getItemProps={getItemProps}
                    />
                  )}
                </>
              ) : (
                <>
                  <DropButton
                    {...getToggleButtonProps()}
                    disabled={disabled}
                    error={error}
                    hasLabel={hasLabel}
                    skin={skin}
                    id={_id}
                    className={dropdownButtonClass}
                  >
                    {_buttonLabel}
                    <Icon
                      name={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
                      className={arrowIconClass}
                    />
                  </DropButton>

                  {isOpen && (
                    <List
                      items={items}
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
  ignoreSpecialChars: PropTypes.bool,
  skin: PropTypes.oneOf(['default', 'dark']),
};

export default Dropdown;
