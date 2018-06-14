import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import List from '../List/List';
import ColorPalette from '../Colors';
import theme from '../../theme';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const DropdownButton = styled.button`
  ${theme.mixins.transition()};

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${theme.sizes.fieldHeight};
  padding: 10px;
  background-color: ${ColorPalette.WHITE};
  border: solid 1px ${ColorPalette.GREY['900']};
  border-radius: ${theme.sizes.radius};
  appearance: none;
  cursor: pointer;

  ${props => props.error && `
    border-color: ${ColorPalette.DANGER['400']};
  `}

  &:focus {
    border-color: ${ColorPalette.PRIMARY['500']};
    outline: 0;
  }
`;

const ArrowDown = styled(Icon)`
  font-size: 1.5em;
  pointer-events: none;
  margin-left: -30px;
  padding-top: 6px;
`;

const Select = ({ items, selectedItem, onChange, placeholder = 'Selecione' }) => (
  <Downshift
    selectedItem={selectedItem}
    onChange={onChange}
    render={({
      isOpen,
      getToggleButtonProps,
      getItemProps,
      highlightedIndex,
      selectedItem: dsSelectedItem,
    }) => (
      <div>
        <DropdownButton {...getToggleButtonProps()}>
          {selectedItem || placeholder}
          <ArrowDown name="keyboard_arrow_down" skin={ColorPalette.GREY['900']} />
        </DropdownButton>
        {isOpen &&
          <List divided>
            { items
                .map((item, index) => (
                  <List.Item
                    {
                    ...getItemProps({
                      item,
                      isActive: highlightedIndex === index,
                      isSelected: dsSelectedItem === item,
                    })}
                    key={item}
                    icon={item.icon}
                    content={item.content || item}
                  />
                ))
            }
          </List>}
      </div>
    )}
  />
);

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
    } = this.props;

    const { selectedItem } = this.state;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }

        <Select
          items={items}
          onChange={this.onChange}
          selectedItem={selectedItem}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FieldGroup>
    );
  }
}

Dropdown.defaultProps = {
  selectedItem: '',
  placeholder: 'Select...',
  label: '',
  error: '',
  name: 'Dropdown',
  id: 'dropdown',
  items: [],
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
};

Dropdown.propTypes = {
  selectedItem: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.node,
  })),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Dropdown;
