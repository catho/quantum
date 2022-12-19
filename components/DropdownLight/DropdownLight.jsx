import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const DropdownSelect = styled.select`
  width: 100%;
  height: 44px;

  ${({ theme }) => {
    const { baseFontSize: baseFontSizeDropdownSelect } = theme;

    return css`
      font-size: ${baseFontSizeDropdownSelect}px;
    `;
  }}
`;

const DropdownLight = ({ disabled, items, theme }) => (
  <>
    <DropdownSelect disabled={disabled} theme={theme}>
      {items.map(item => (
        <option key={items.value || items}>{item.label || item}</option>
      ))}
    </DropdownSelect>
  </>
);

DropdownLight.propTypes = {
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(itemPropType),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

DropdownLight.defaultProps = {
  disabled: false,
  items: [],
  theme: { colors, spacing, baseFontSize },
};

export default DropdownLight;
