import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const DropList = styled.select`
  width: 100%;
  height: 44px;
  font-size: ${baseFontSize};
`;
const OptionsItems = styled.option`
  font-size: ${baseFontSize};
`;

const DropdownLight = ({
  disabled,
  label,
  placeholder,
  items,
  selectedItem,
  onChange,
  theme,
}) => (
  <>
    <DropList
      disabled={disabled}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      selectedItem={selectedItem}
      theme={theme}
    >
      {items.map(item => (
        <OptionsItems key={items.value}>{item.label}</OptionsItems>
      ))}
    </DropList>
  </>
);

DropdownLight.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType),
  selectedItem: itemPropType,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

DropdownLight.defaultProps = {
  disabled: false,
  label: '',
  placeholder: 'Select an option',
  selectedItem: null,
  items: [],
  onChange: () => {},
  theme: { colors, spacing, baseFontSize },
};

export default DropdownLight;
