import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Icon from '../Icon/Icon';
import Colors from '../Colors';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const ITEM_HEIGHT = '44px';

const _value = item => item.value || item.label || item;
const _label = item => item.label || item.value || item;

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

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    const { selectedItem } = props;

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

    const buttonText = selectedItem ? _label(selectedItem) : placeholder;

    return (
      <FieldGroup>
        <Downshift
          {...rest}
          selectedItem={selectedItem}
          onChange={this._onChange}
          itemToString={_value}
        >
          {({
            isOpen,
            getToggleButtonProps,
            getItemProps,
            getLabelProps,
            getInputProps,
            getRootProps,
          }) => (
            <DropContainer {...getRootProps()}>
              {label && (
                <DropLabel
                  {...getLabelProps()}
                  onClick={() => this._dropButton.focus()}
                >
                  {label}
                  {required && <RequiredMark>*</RequiredMark>}
                </DropLabel>
              )}
              <input type="hidden" {...getInputProps()} />
              <DropButton
                {...getToggleButtonProps()}
                ref={button => {
                  this._dropButton = button;
                }}
                isOpen={isOpen}
                disabled={disabled}
                error={error}
                text={buttonText}
                selectedItem={selectedItem}
              >
                {buttonText}
                <ArrowDown />
              </DropButton>
              {isOpen && (
                <DropList>
                  {items.map(item => (
                    <DropItem
                      {...getItemProps({
                        item,
                        isSelected: selectedItem === item,
                        key: _value(item),
                      })}
                    >
                      {_label(item)}
                      {selectedItem === item && <CheckIcon />}
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
  selectedItem: null,
};

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    item: PropTypes.string,
  }),
]);

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
