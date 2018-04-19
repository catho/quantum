import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import ColorPalette from '../Colors';
import theme from '../../theme';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const Select = styled.select`
  ${theme.mixins.transition()};

  width: 100%;
  height: ${theme.sizes.fieldHeight};
  padding: 10px 28px 10px 10px;
  background-color: ${ColorPalette.NEUTRAL.GRAY.WHITE};
  border: solid 1px ${ColorPalette.NEUTRAL.DARKERGRAY.WARMGREY};
  border-radius: ${theme.sizes.radius};
  appearance: none;
  cursor: pointer;

  ${props => props.error && `
    border-color: ${ColorPalette.PRIMARY.PINK.LIPSTICK};
  `}

  &:focus {
    border-color: ${ColorPalette.PRIMARY.BLUE.PEACOCK};
    outline: 0;
  }
`;

const Icon = styled(IconArrowDown)`
  color: ${ColorPalette.NEUTRAL.DARKERGRAY.WARMGREY};
  font-size: 1.5em;
  pointer-events: none;
  margin-left: -30px;
`;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: '',
    };
  }

  handleChange = (e) => {
    const { value: selectedItem } = e.target;

    this.setState({ selectedItem }, () => {
      this.props.onSelectItem({ selectedItem: this.state.selectedItem });
    });
  }

  render() {
    const {
      name,
      items,
      label,
      id,
      error,
      placeholder,
      ...rest
    } = this.props;

    const { selectedItem } = this.state;
    const value = selectedItem;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }

        <Select
          {...rest}
          name={name}
          value={value}
          onChange={this.handleChange}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}

          {
            items &&
            items.map(({ key, value: itemValue }) => (
              <option key={key} value={key}>{itemValue}</option>
            ))
          }
        </Select>

        <Icon />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FieldGroup>
    );
  }
}

Dropdown.defaultProps = {
  name: 'Dropdown',
  id: 'dropdown',
  placeholder: 'Select...',
  label: '',
  error: '',
  items: [
    { key: 'foo', value: 'foo' },
    { key: 'bar', value: 'bar' },
    { key: 'baz', value: 'baz' },
  ],
  onSelectItem: () => {},
  onBlur: () => {},
  onFocus: () => {},
};

Dropdown.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.node,
  })),
  onSelectItem: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Dropdown;
