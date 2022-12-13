import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';
import { itemsMock } from '../../stories/DropdownLight/mock';

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
  font-size: 16px;
`;
const OptionsItems = styled.option`
  font-size: 16px;
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
      items={items}
      selectedItem={selectedItem}
      theme={theme}
    >
      {itemsMock.map(item => (
        <OptionsItems key={itemsMock}>{item}</OptionsItems>
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
