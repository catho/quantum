import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import List from '../List/List';
import Colors from '../Colors';
import theme from '../../theme';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const DropdownButton = styled.button`
  ${theme.mixins.transition()};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 10px 16px;

  font-size: 16px;
  font-weight: bold;

  background-color: ${Colors.WHITE};
  border: solid 1px ${Colors.GREY['300']};

  ${({ isOpen }) => isOpen && `
    border-top-color: ${Colors.SECONDARY['500']};
    border-right-color: ${Colors.SECONDARY['500']};
    border-left-color: ${Colors.SECONDARY['500']};
  `}

  border-radius: ${theme.sizes.radius};
  cursor: pointer;

  ${props => props.error && `
    border-color: ${Colors.DANGER['400']};
  `}

  &:focus {
    outline: 0;
  }

  & ~ ul {
    background-color: ${Colors.WHITE};
    border-width: 1px;
    border-style: solid;
    border-color: ${Colors.SECONDARY['500']};
    border-top: none;
  }
`;

const ArrowDown = styled(Icon)`
  font-size: 1.5em;
  pointer-events: none;
`;

const DropDownItem = styled.div`
  cursor: pointer;
  border-bottom: 1px solid ${Colors.GREY['50']};

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: ${Colors.SECONDARY['500']};
    font-weight: bold;
    color: ${Colors.WHITE};
  }

  ${({ isSelected }) => isSelected && `
    color: ${Colors.SECONDARY['500']};
  `}
`;

function itemToString(item = '') {
  if (typeof item === 'string') {
    return item;
  }

  const { content } = item;

  if (typeof content === 'string') {
    return content;
  }

  const { header } = content;
  return header;
}

const Select = ({
  items,
  selectedItem,
  onChange,
  name,
  placeholder,
}) => (
    <Downshift
      selectedItem={selectedItem}
      onChange={onChange}
      itemToString={({ item }) => itemToString(item)}
      render={({
        isOpen,
        getToggleButtonProps,
        getItemProps,
        highlightedIndex,
        selectedItem: dsSelectedItem,
      }) => (
          <div>
            <DropdownButton {...getToggleButtonProps()} name={name} isOpen={isOpen}>
              {itemToString(selectedItem.item) || placeholder}
              <ArrowDown name={!isOpen ? "arrow_drop_down" : "arrow_drop_up"} skin={Colors.GREY['300']} />
            </DropdownButton>
            {isOpen &&
              <List>
                {items
                  .map((item, index) => (
                    <DropDownItem
                      {
                      ...getItemProps({
                        item,
                        isSelected: selectedItem === item,
                      })}>
                      <List.Item
                        key={item.value}
                        icon={item.item.icon}
                        content={item.item.content || item.item}
                      />
                    </DropDownItem>
                  ))
                }
              </List>}
          </div>
        )}
    />
  );

const ListItemPropType = PropTypes.oneOfType([
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
  })
]);

const itemPropType = PropTypes.shape({
  value: stringOrNumber,
  item: ListItemPropType,
});

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Select.propTypes = {
  items: PropTypes.arrayOf(itemPropType),
  selectedItem: itemPropType,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  items: [],
  selectedItem: {},
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    const { selectedItem = null } = props;

    this.state = { selectedItem };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.selectedItem !== this.state.selectedItem) {
      this.state.selectedItem = nextProps.selectedItem;
    }
  }

  onChange = (item) => {
    const { onChange } = this.props;

    this.setState({ selectedItem: item });

    onChange(null, { selectedItem: item });
  }

  render() {
    const {
      items,
      label,
      id,
      error,
      placeholder,
      name,
    } = this.props;

    const { selectedItem } = this.state;

    return (
      <FieldGroup>
        {label && <Label htmlFor={id}> {label} </Label>}

        <Select
          items={items}
          onChange={this.onChange}
          selectedItem={selectedItem}
          placeholder={placeholder}
          name={name}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FieldGroup>
    );
  }
}

Dropdown.defaultProps = {
  placeholder: 'Selecione',
  label: '',
  error: '',
  name: 'Dropdown',
  id: 'dropdown',
  items: [],
  selectedItem: {},
  onChange: () => { },
  onBlur: () => { },
  onFocus: () => { },
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType),
  selectedItem: itemPropType,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Dropdown;
