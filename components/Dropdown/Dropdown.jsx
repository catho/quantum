import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import List from '../List/List';
import Colors from '../Colors';
import DeprecatedColors from '../Colors/deprecated';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const DropdownLabel = styled(Label)`
  margin-bottom: 8px;
  padding-left: 13.5px;
`;

DropdownLabel.displayName = 'DropdownLabel';

const DropdownButton = styled.button`
  align-items: center;
  background-color: ${DeprecatedColors.WHITE};
  border-radius: 4px;
  border: 1.5px solid ${Colors.BLACK['400']};
  color: ${Colors.BLACK['400']};
  cursor: pointer;
  display: flex;
  font-size: initial;
  height: 44px;
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

  ${({ isOpen }) =>
    isOpen &&
    `
    border-top-color: ${DeprecatedColors.PRIMARY['500']};
    border-right-color: ${DeprecatedColors.PRIMARY['500']};
    border-left-color: ${DeprecatedColors.PRIMARY['500']};
  `}

  ${props =>
    props.error &&
    `
    border-color: ${DeprecatedColors.DANGER['400']};
  `}

  & ~ ul {
    background-color: ${DeprecatedColors.WHITE};
    border-width: 1px;
    border-style: solid;
    border-color: ${DeprecatedColors.PRIMARY['500']};
    border-top: none;
  }
`;

const ArrowDown = styled(Icon).attrs({
  name: 'keyboard_arrow_down',
})`
  color: ${Colors.BLACK['700']};
  font-size: 1.5em;
  pointer-events: none;
`;

const DropDownItem = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${DeprecatedColors.SECONDARY['50']};

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: ${DeprecatedColors.PRIMARY['500']};
    font-weight: bold;
    color: ${DeprecatedColors.WHITE};
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    color: ${DeprecatedColors.PRIMARY['500']};
  `};
`;

const DropdownErrorMessage = styled(ErrorMessage)`
  margin-top: 8px;
  padding-left: 13.5px;
`;

function itemToString(item = '') {
  if (typeof item === 'string') {
    return item;
  }

  const { content } = item;

  if (typeof content === 'string') {
    return content;
  }

  return content.header;
}

const RequiredMark = styled.em`
  color: ${Colors.ERROR['500']};
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    const { selectedItem = null } = props;

    this.state = { selectedItem };
  }

  componentWillUpdate(nextProps) {
    const { selectedItem } = this.state;

    if (nextProps.selectedItem !== selectedItem) {
      this.state.selectedItem = nextProps.selectedItem;
    }
  }

  _onChange = item => {
    const { onChange } = this.props;

    this.setState({ selectedItem: item });

    onChange(null, { selectedItem: item });
  };

  render() {
    const {
      label,
      id,
      error,
      required,
      disabled,
      items,
      placeholder,
      ...rest
    } = this.props;
    const { selectedItem } = this.state;

    return (
      <FieldGroup>
        {label && (
          <DropdownLabel htmlFor={id}>
            {' '}
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </DropdownLabel>
        )}

        <Downshift
          {...rest}
          id={id}
          selectedItem={selectedItem}
          onChange={this._onChange}
          itemToString={({ item }) => itemToString(item)}
        >
          {({ isOpen, getToggleButtonProps, getItemProps }) => (
            <div>
              <DropdownButton
                {...getToggleButtonProps()}
                isOpen={isOpen}
                disabled={disabled}
                error={error}
              >
                {itemToString(selectedItem.item) || placeholder}
                <ArrowDown />
              </DropdownButton>
              {isOpen && (
                <List>
                  {items.map(item => (
                    <DropDownItem
                      {...getItemProps({
                        item,
                        isSelected: selectedItem === item,
                      })}
                      key={itemToString(item.item)}
                    >
                      <List.Item
                        key={item.value}
                        icon={item.item.icon}
                        content={item.item.content || item.item}
                      />
                    </DropDownItem>
                  ))}
                </List>
              )}
            </div>
          )}
        </Downshift>

        {error && <DropdownErrorMessage>{error}</DropdownErrorMessage>}
      </FieldGroup>
    );
  }
}

Dropdown.defaultProps = {
  disabled: false,
  error: '',
  id: 'dropdown',
  items: [],
  label: '',
  name: 'Dropdown',
  onChange: () => {},
  placeholder: 'Selecione',
  required: false,
  selectedItem: {},
};

const itemPropType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object),
      ]),
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          header: PropTypes.string,
          subheader: PropTypes.string,
        }),
      ]),
    }),
  ]),
});

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  selectedItem: itemPropType,
};

export default Dropdown;
