import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import ColorPalette from '../Colors';
import theme from '../../theme';
import { FieldGroup, Label, ErrorMessage } from '../shared';

const Select = styled.select`
  ${theme.mixins.transition()};

  width: 100%;
  height: ${theme.sizes.fieldHeight};
  padding: 10px 28px 10px 10px;
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

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    const { value } = props;

    this.state = { value };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.state.value = nextProps.value;
    }
  }

  onChange = (e) => {
    const { onChange } = this.props;
    const { target: { value } } = e;

    this.setState({ value });

    onChange(e, { value });
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

    const { value } = this.state;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }

        <Select
          {...rest}
          id={id}
          name={name}
          value={value}
          onChange={this.onChange}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}

          {
            items &&
            items.map(({ key, value: itemValue }) => (
              <option key={key} value={key}>{itemValue}</option>
            ))
          }
        </Select>

        <ArrowDown name="keyboard_arrow_down" skin={ColorPalette.GREY['900']} />

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
  items: [],
  value: '',
  onChange: () => {},
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Dropdown;
