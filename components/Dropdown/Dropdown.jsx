import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import Colors from '../Colors';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const ITEM_HEIGHT = '44px';

const DropLabel = styled(Label)`
  margin-bottom: 8px;
  padding-left: 13.5px;
`;

DropLabel.displayName = 'DropLabel';

const DropButton = styled.button`
  align-items: center;
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  border: 1.5px solid ${Colors.BLACK['400']};
  color: ${Colors.BLACK['400']};
  cursor: pointer;
  display: flex;
  font-size: initial;
  height: ${ITEM_HEIGHT};
  justify-content: space-between;
  letter-spacing: 0.2px;
  padding: 10px 12px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  :hover,
  :focus {
    border-color: ${Colors.BLUE['500']};
    box-shadow: 0 2px 6px 0 ${Colors.BLUE['50']};
  }

  ${({ error }) =>
    error &&
    `
    border-color: ${Colors.ERROR['500']};

    :hover, :focus {
      box-shadow: 0 2px 6px 0 ${Colors.ERROR['500']};
      border-color: ${Colors.ERROR['500']};
    }
  `};

  &[disabled] {
    background-color: ${Colors.BLACK['100']};
    color: ${Colors.BLACK['400']};
    cursor: not-allowed;
    border-color: ${Colors.BLACK['400']};
    box-shadow: none;
  }

  ${({ text }) => !text && 'flex-direction: row-reverse;'};
  ${({ selectedItem }) => selectedItem && `color: ${Colors.BLACK[700]}`};
`;

const ArrowDown = styled(Icon).attrs({
  name: 'keyboard_arrow_down',
})`
  color: ${Colors.BLACK['700']};
  font-size: 1.5em;
  pointer-events: none;
`;

const DropList = styled.ul`
  background-color: ${Colors.WHITE};
  box-shadow: 0 2px 6px 0 ${Colors.SHADOW[40]};
  list-style: none;
  margin-top: 4px;
  max-height: calc(${ITEM_HEIGHT} * 7);
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
  border-radius: 4px;
  border: solid 1.5px ${Colors.BLACK[100]};
  border-bottom-width: 0;
  cursor: pointer;
  height: ${ITEM_HEIGHT};
  padding: 10px 15px;
  box-sizing: border-box;

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

const DropError = styled(ErrorMessage)`
  margin-top: 8px;
  padding-left: 13.5px;
`;

const DropContainer = styled.div`
  position: relative;
`;

const RequiredMark = styled.em`
  color: ${Colors.ERROR['500']};
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
  ...rest
}) => {
  const _buttonLabel = selectedItem ? _getLabel(selectedItem) : placeholder;
  const _buttonRef = React.createRef();

  const _reducer = ({ selectedItem: selected }, changes) => {
    if (changes.isOpen !== undefined && changes.isOpen) {
      return {
        ...changes,
        highlightedIndex: items.map(_getValue).indexOf(_getValue(selected)),
      };
    }

    return changes;
  };

  return (
    <FieldGroup>
      <Downshift
        {...rest}
        selectedItem={selectedItem}
        onChange={onChange}
        itemToString={_getValue}
        stateReducer={_reducer}
      >
        {({
          getRootProps,
          getLabelProps,
          getInputProps,
          getToggleButtonProps,
          getItemProps,
          isOpen,
        }) => (
          <DropContainer {...getRootProps()}>
            {label && (
              <DropLabel
                {...getLabelProps()}
                onClick={() => _buttonRef.current.focus()}
              >
                {label}
                {required && <RequiredMark>*</RequiredMark>}
              </DropLabel>
            )}
            <input type="hidden" {...getInputProps()} />
            <DropButton
              {...getToggleButtonProps()}
              ref={_buttonRef}
              isOpen={isOpen}
              disabled={disabled}
              error={error}
              text={_buttonLabel}
              selectedItem={selectedItem}
            >
              {_buttonLabel}
              <ArrowDown />
            </DropButton>
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
          </DropContainer>
        )}
      </Downshift>

      {error && <DropError>{error}</DropError>}
    </FieldGroup>
  );
};

Dropdown.defaultProps = {
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
  disabled: PropTypes.bool,
  error: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType),
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  selectedItem: itemPropType,
};

export default Dropdown;
