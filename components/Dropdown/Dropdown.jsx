import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import Colors from '../Colors';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const DropdownLabel = styled(Label)`
  margin-bottom: 8px;
  padding-left: 13.5px;
`;

DropdownLabel.displayName = 'DropdownLabel';

const DropdownButton = styled.button`
  align-items: center;
  background-color: ${Colors.WHITE};
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

  ${({ text }) => !text && 'flex-direction: row-reverse;'};
`;

const ArrowDown = styled(Icon).attrs({
  name: 'keyboard_arrow_down',
})`
  color: ${Colors.BLACK['700']};
  font-size: 1.5em;
  pointer-events: none;
`;

const DropdownList = styled.ul`
  background-color: ${Colors.WHITE};
  box-shadow: 0 2px 6px 0 ${Colors.SHADOW[40]};
  margin-top: 4px;
  list-style: none;
  padding: 0;
`;

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})`
  color: ${Colors.BLUE['500']};
`;

const DropdownListItem = styled.li`
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  border: solid 1.5px ${Colors.BLACK[100]};
  border-bottom-width: 0;
  cursor: pointer;
  height: 44px;
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
      error,
      required,
      disabled,
      items,
      placeholder,
      ...rest
    } = this.props;
    const { selectedItem } = this.state;

    const buttonText = itemToString(selectedItem.item) || placeholder;

    return (
      <FieldGroup>
        <Downshift
          {...rest}
          selectedItem={selectedItem}
          onChange={this._onChange}
          itemToString={({ item }) => itemToString(item)}
        >
          {({
            isOpen,
            getToggleButtonProps,
            getItemProps,
            getLabelProps,
            getInputProps,
          }) => (
            <div>
              {label && (
                <DropdownLabel
                  {...getLabelProps()}
                  onClick={() => this._dropdownButton.focus()}
                >
                  {label}
                  {required && <RequiredMark>*</RequiredMark>}
                </DropdownLabel>
              )}
              <input type="hidden" {...getInputProps()} />
              <DropdownButton
                {...getToggleButtonProps()}
                ref={button => {
                  this._dropdownButton = button;
                }}
                isOpen={isOpen}
                disabled={disabled}
                error={error}
                text={buttonText}
              >
                {buttonText}
                <ArrowDown />
              </DropdownButton>
              {isOpen && (
                <DropdownList>
                  {items.map(item => (
                    <DropdownListItem
                      {...getItemProps({
                        item,
                        isSelected: selectedItem === item,
                      })}
                      isSelected={selectedItem === item}
                      key={itemToString(item.item)}
                    >
                      {item.item.content || item.item}
                      {selectedItem === item && <CheckIcon />}
                    </DropdownListItem>
                  ))}
                </DropdownList>
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
  items: PropTypes.arrayOf(itemPropType),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  selectedItem: itemPropType,
};

export default Dropdown;
